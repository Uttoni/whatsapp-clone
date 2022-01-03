import React from 'react';
import './App.css';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';

export default () => {
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

        <div className='seach'>
          ...
        </div>

        <div className='chat-list'>
          ...
        </div>

      </div>
      <div className='content-area'>
        ...
      </div>
    </div>
  )
};