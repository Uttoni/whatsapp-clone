import React, { useState } from 'react';
import './styles/NewChat.css';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const NewChat = ({user, chatList, show, setShow}) => {

    const [contactList, setContactList] = useState([
        { id: 123, avatar: 'https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/104113705/original/6076831db34315e45bd2a31a9d79bb7b91d48e04/design-flat-style-minimalist-avatar-of-you.jpg', name:'Breno'},
        { id: 123, avatar: 'https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/104113705/original/6076831db34315e45bd2a31a9d79bb7b91d48e04/design-flat-style-minimalist-avatar-of-you.jpg', name: 'Diego' },
        { id: 123, avatar: 'https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/104113705/original/6076831db34315e45bd2a31a9d79bb7b91d48e04/design-flat-style-minimalist-avatar-of-you.jpg', name: 'Vinícius' },
        { id: 123, avatar: 'https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/104113705/original/6076831db34315e45bd2a31a9d79bb7b91d48e04/design-flat-style-minimalist-avatar-of-you.jpg', name: 'Taty' }
    ]);

    const handleClose = () => { 
        setShow(false);
    }

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
                        <div className='newChat-item' key={key}>
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