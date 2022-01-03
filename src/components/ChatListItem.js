import React from 'react';
import './ChatListItem.css';

export default () => {

    return(
        <div className='chatlist-item'>
            <img className='chatlist-item-avatar' src='https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/104113705/original/6076831db34315e45bd2a31a9d79bb7b91d48e04/design-flat-style-minimalist-avatar-of-you.jpg' alt=""/>
            <div className='chatlist-item-lines'>
                <div className='chatlist-item-line'>
                    <div className='chatlist-item-name'>Uttoni Brandani</div>
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