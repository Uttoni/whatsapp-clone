import React from 'react';
import './ChatListItem.css';

export default ({onClick, active, data}) => {

    return(
        <div 
            className={`chatlist-item ${active ? 'active':''}`}
            onClick={onClick}
        >
            <img className='chatlist-item-avatar' src={data.avatar} alt=""/>
            <div className='chatlist-item-lines'>
                <div className='chatlist-item-line'>
                    <div className='chatlist-item-name'>{data.name}</div>
                    <div className='chatlist-item-date'>19:00</div>
                </div>
                <div className='chatlist-item-line'>
                    <div className='chatlist-item-msg'>
                        <p>Eaí, blz? Eaí, blz? Eaí, blz? Eaí, blz?Eaí, blz? Eaí, blz?Eaí, blz? Eaí, blz? Eaí, blz? Eaí, blz? Eaí, blz? Eaí, blz? Eaí, blz?</p>
                    </div>
                </div>
            </div>
        </div>
    );
}