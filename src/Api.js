import { initializeApp } from 'firebase/app';
import { addDoc, arrayUnion, collection, doc, getDoc, getDocs, getFirestore, query, setDoc, updateDoc, where } from 'firebase/firestore/lite';

//new
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import firebaseConfig from './firebaseConfig';
import NewChat from './components/NewChat';

//old
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

//new
const provider = new GoogleAuthProvider();
const auth = getAuth(firebaseApp);

export const fbPopup = async () => {
    try{
        let result = await signInWithPopup(auth, provider)
        const user = result.user;
        return user;
    }
    catch(error){
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
    }
}

export const addUser = async (user) => {

    try{
        let document = doc(db, 'users', user.id);
        await setDoc(document, {id: user.id, name:user.name, avatar:user.avatar}, {merge:true});

    }catch(error){
        console.log(error);
    }

};

export const getAllContacts = async (id) => {
    try {
        let results = [];

        const q = query(collection(db, "users"), where("id", "!=", id));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            let user = doc.data();
            results.push(user);
        });

        return results;
    } catch (error) {
        console.log(error);
    }
};

export const addChat = async (user, friend) => {
   
    try {
        //Add new chat ---------------------------------------
        let document = collection(db, 'chats');
        let newChat = await addDoc(document, {
            messages: [],
            users: [
                user.id,
                friend.id
            ] 
        });

        //Add chat to user -------------------------------
        document = doc(db, 'users', user.id);
        await updateDoc(document, {
            chats: arrayUnion({
                chatId: newChat.id,
                title: friend.name,
                image: friend.avatar,
                with: friend.id
            })
        });

        //Add chat to friend -----------------------------
        document = doc(db, 'users', friend.id);
        await updateDoc(document, {
            chats: arrayUnion({
                chatId: newChat.id,
                title: user.name,
                image: user.avatar,
                with: user.id
            })
        });
    } catch (error) {
        console.log(error);
    }
};

export const onChatList = async (userId) => {
    try {
        let chats = [];

        const q = query(collection(db, "users"), where("id", "==", userId));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            if(doc.exists){
                let data = doc.data();
                if(data.chats){
                    chats = [...data.chats];
                    chats.sort((a, b)=>{
                        if(a.lastMessageDate === undefined){
                            return -1;
                        }
                        if(b.lastMessageDate === undefined) {
                            return -1;
                        }
                        
                        if(a.lastMessageDate.seconds < b.lastMessageDate.seconds){
                            return 1;
                        }
                        else{
                            return -1;
                        }
                    });
                }
            }
        });

        return chats;
    } catch (error) {
        console.log(error);
    }
}

export const onChatContent = async (chatId, setUsers) => {
    try{
        let messages = [];
        console.log('chat id:',chatId);
        const q = query(collection(db, "chats"));
        const querySnapshot = await getDocs(q);
        console.log('snapshot', querySnapshot);
        querySnapshot.forEach((doc) => {
            if (doc.exists) {
                let data = doc.data();
                if (data.messages) {
                    messages = data.messages;
                    console.log('messages on api', data.messages)
                }
                if(data.users){
                    setUsers(data.users);
                }
            }
        });
        console.log('messages:', messages);
        return messages;
    }catch(error){
        console.log(error);
    }
};

export const sendMessage = async (chatData, userId, type, body, users) => {
    try{
        let document = doc(db, 'chats', chatData.chatId);
        let now = new Date();

        await updateDoc(document, {
            messages: arrayUnion({
                type: type,
                author: userId,
                body: body,
                date: now
            }),
        });

        for(let i in users){
            
            const q = query(collection(db, "users"), where("id", "==", users[i]));
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc2) => {
                let user = doc2.data();
                if(user.chats){
                    let chats = [...user.chats];

                    for(let e in chats){
                        if(chats[e].chatId === chatData.chatId){
                            chats[e].lastMessage = body;
                            chats[e].lastMessageDate = now;
                        }
                    }

                    console.log('chats after being rewritten', chats);
                    let document2 = doc(db, 'users', users[i]);
                    updateDoc(document2, {
                        chats: chats
                    });
                }
            });            
        }

    }catch(error){
        console.log(error);
    }
};