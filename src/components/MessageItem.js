import React from 'react';
import './styles/MessageItem.css';

const MessageItem = ({data, user}) =>{
    return(
        <div 
            className='message-line'
            style={{justifyContent: user.id === data.author ? 'flex-end': 'flex-start'}}
        >
            <div className='message-item'
                style={{backgroundColor: user.id === data.author ? '#dcf8c6': '#fff'}}
            >
                <div className='message-text'>{data.body}</div>
                <div className='message-date'>{data.date}</div>
            </div>
        </div>
    );
}

export default MessageItem;