import React, { useState } from "react";
import EmojiPicker from 'emoji-picker-react';

import './styles/ChatWindow.css';

import SearchIcon from '@mui/icons-material/Search';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import MicIcon from '@mui/icons-material/Mic';
import SendIcon from '@mui/icons-material/Send';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import CloseIcon from '@mui/icons-material/Close';

const ChatWindow = () => {

    const [emojiOpen, setEmojiOpen] = useState(false);

    const handleEmojiClick = () => {

    }

    return(
        <div className="chatWindow">
            <div className="chatWindow-header">
                <div className="chatWindow-header-info">
                    <img className="chatWindow-header-avatar" src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/104113705/original/6076831db34315e45bd2a31a9d79bb7b91d48e04/design-flat-style-minimalist-avatar-of-you.jpg" alt=""/>
                    <div className="chatWindow-header-name">Toni</div>
                </div>
                <div className="chatWindow-header-icons">
                    <div className="chatWindow-header-icon">
                        <SearchIcon style={{color: '#919191'}}/>
                    </div>
                    <div className="chatWindow-header-icon">
                        <AttachFileIcon style={{color: '#919191'}}/>
                    </div>
                    <div className="chatWindow-header-icon">
                        <MoreVertIcon style={{color: '#919191'}}/>
                    </div>
                </div>
            </div>
            <div className="chatWindow-body">

            </div>

            <div className="chatWindow-emoji-area">
                <EmojiPicker 
                    style={{height: emojiOpen ? '0px':'200px' }}
                    disableSearchBar
                    onEmojiClick={handleEmojiClick}
                />
            </div>

            <div className="chatWindow-footer">
                <div className="chatWindow-footer-left">
                    <div className="chatWindow-header-icon">
                        <CloseIcon style={{color: '#919191'}}/>
                    </div>
                    <div className="chatWindow-header-icon">
                        <InsertEmoticonIcon style={{color: '#919191'}}/>
                    </div>
                    <div className="chatWindow-header-icon">
                        <AttachFileIcon style={{color: '#919191'}}/>
                    </div>
                </div>
                <div className="chatWindow-footer-input-area">
                    <input className="chatWindow-footer-input" type="text" placeholder="Type a message"/>
                </div>
                <div className="chatWindow-footer-right">
                    <div className="chatWindow-header-icon">
                        <MicIcon style={{color: '#919191'}}/>
                    </div>
                    <div className="chatWindow-header-icon">
                        <SendIcon style={{color: '#919191'}}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ChatWindow;