import './styles/NewChat.css';
import React, { useState, useEffect } from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { getAllContacts, addChat } from '../Api';

const NewChat = ({user, chatList, show, setShow}) => {

    const [contactList, setContactList] = useState([]);

    useEffect(()=>{
        const getList = async () => {
            if(user !== null){
                let results = await getAllContacts(user.id);
                setContactList(results);
            }
        };

        getList();
    }, [user]);

    const addNewChat = async (friend) =>{
        await addChat(user, friend);

        handleClose();
    };

    const handleClose = () => { 
        setShow(false);
    };

    return(
        <div 
            className='newChat'
            style={{left: show ? '0':'-415px'}}
        >
            <div className='newChat-head'>
                <div 
                    className='newChat-icon'
                    onClick={handleClose}
                >
                    <ArrowBackIcon style={{color: "#fff"}}/>
                </div>
                <div className='newChat-head-title'>New Conversation</div>
            </div>
            <div className='newChat-list'>
                {
                    contactList.map((item, key) => (
                        <div onClick={() => addNewChat(item)} className='newChat-item' key={key}>
                            <img className='newChat-item-avatar' alt="" src={item.avatar}/>
                            <div className='newChat-item-name'>{item.name}</div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default NewChat;
