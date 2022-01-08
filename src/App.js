import React, { useState, useEffect } from 'react';
import './App.css';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';
import ChatListItem from './components/ChatListItem.js';
import ChatIntro from './components/ChatIntro.js';
import ChatWindow from './components/ChatWindow.js';

export default () => {

  const [chatList, setChatList] = useState([
    {chatId: 1, name: 'Nome da Pessoa 1', avatar: 'https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/104113705/original/6076831db34315e45bd2a31a9d79bb7b91d48e04/design-flat-style-minimalist-avatar-of-you.jpg'},
    {chatId: 2, name: 'Nome da Pessoa 2', avatar: 'https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/104113705/original/6076831db34315e45bd2a31a9d79bb7b91d48e04/design-flat-style-minimalist-avatar-of-you.jpg'},
    {chatId: 3, name: 'Nome da Pessoa 3', avatar: 'https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/104113705/original/6076831db34315e45bd2a31a9d79bb7b91d48e04/design-flat-style-minimalist-avatar-of-you.jpg'},

  ]);
  
  const [activeChat, setActiveChat] = useState({});

  return(
    <div className='app-window'>
      <div className='sidebar'>
        <header>
          <img className='header-avatar' src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/104113705/original/6076831db34315e45bd2a31a9d79bb7b91d48e04/design-flat-style-minimalist-avatar-of-you.jpg" alt=""/>
          <div className='header-buttons'>
            <div className='header-btn'>
              <DonutLargeIcon style={{color: '#919191'}}/>
            </div>
            <div className='header-btn'>
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
          <ChatWindow />
        }

        {activeChat.chatId === undefined &&
          <ChatIntro />
        }
        
      </div>
    </div>
  )
};