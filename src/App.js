import React, { useState, useEffect } from 'react';
import './App.css';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';
import ChatListItem from './components/ChatListItem.js';

export default () => {

  const [chatList, setChatList] = useState([
    {},{},{},{},{},{}
  ]);

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
              />
            ))
          }
        </div>

      </div>
      <div className='content-area'>
        ...
      </div>
    </div>
  )
};