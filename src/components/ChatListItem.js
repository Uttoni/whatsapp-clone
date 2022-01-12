import React, { useEffect, useState } from 'react';
import './styles/ChatListItem.css';

const ChatListItem = ({onClick, active, data}) => {

    const [time, setTime] = useState('');
    useEffect(() => {
        if(data.lastMessageDate > 0){
            let d = new Date(data.lastMessageDate.seconds * 1000);
            let hours = d.getHours();
            let minutes = d.getMinutes();
            hours = hours < 10 ? '0' + hours: hours;
            minutes = minutes < 10 ? '0' + minutes : minutes;
            setTime(`${hours}:${minutes}`)
        }
    }, [data]);

    return(
        <div 
            className={`chatlist-item ${active ? 'active':''}`}
            onClick={onClick}
        >
            <img className='chatlist-item-avatar' src={data.image} alt=""/>
            <div className='chatlist-item-lines'>
                <div className='chatlist-item-line'>
                    <div className='chatlist-item-name'>{data.title}</div>
                    <div className='chatlist-item-date'>{time}</div>
                </div>
                <div className='chatlist-item-line'>
                    <div className='chatlist-item-msg'>
                        <p>{data.lastMessage}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ChatListItem;