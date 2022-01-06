import React from "react";
import './ChatWindow.css';
import SearchIcon from '@mui/icons-material/Search';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AttachFileIcon from '@mui/icons-material/AttachFile';


const ChatWindow = () => {
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
            <div className="chatWindow-footer">

            </div>
        </div>
    );
}

export default ChatWindow;