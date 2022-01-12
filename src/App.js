import React, { useEffect, useState } from 'react';
import './App.css';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';
import ChatListItem from './components/ChatListItem.js';
import ChatIntro from './components/ChatIntro.js';
import ChatWindow from './components/ChatWindow.js';
import NewChat from './components/NewChat';
import Login from './components/Login';
import { addUser, onChatList } from './Api.js';

const App = () => {

  const [chatList, setChatList] = useState([]);
  const [user, setUser] = useState(null);
  const [activeChat, setActiveChat] = useState({});
  const [showNewChat, setShowNewChat] = useState(false);


  useEffect(() => {
    const getList = async (user) => {
      if (user !== null) {
        setChatList(await onChatList(user.id));
      }
    };

    getList(user);

  }, [user]);

  const handleNewChat = () => {
    setShowNewChat(true);
  }

  const handleLoginData = async (u) =>{
    let newUser ={
      id: u.uid,
      name: u.displayName,
      avatar: u.photoURL
    }
    //save in database
    await addUser(newUser);
    //setting user
    setUser(newUser);
  }

  if(user===null){
    return(<Login onReceive={handleLoginData}/>);
  }
  
  return(
    <div className='app-window'>
      <div className='sidebar'>
        <NewChat 
          show={showNewChat}
          setShow={setShowNewChat}
          user={user}
          chatList={chatList}
        />
        <header>
          <img className='header-avatar' src={user.avatar} alt=""/>
          <div className='header-buttons'>
            <div className='header-btn'>
              <DonutLargeIcon style={{color: '#919191'}}/>
            </div>
            <div
              className='header-btn'
              onClick={handleNewChat}
            >
              <ChatIcon style={{color: '#919191'}}/>
            </div>
            <div className='header-btn'>
              <MoreVertIcon style={{color: '#919191'}}/>
            </div>
          </div>
        </header>

        <div className='search'>
          <div className='search-input'>
            <SearchIcon style={{color: '#919191'}} fontSize='small'/>
            <input placeholder='Search or start a new chat' type='search'/>
          </div>
        </div>

        <div className='chatlist'>
          {
            chatList.map((item, key) => (
              <ChatListItem 
                key={key}
                active={activeChat.chatId === chatList[key].chatId}
                onClick={() => setActiveChat(chatList[key])}
                data={item}
              />
            ))
          }
        </div>

      </div>
      <div className='content-area'>
        { activeChat.chatId !== undefined &&
          <ChatWindow user={user} data={activeChat}/>
        }

        {activeChat.chatId === undefined &&
          <ChatIntro />
        }
        
      </div>
    </div>
  )
};

export default App;