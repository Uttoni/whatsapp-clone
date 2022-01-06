import React from 'react';
import './ChatIntro.css';

const ChatIntro = () => {
    return(
        <div className='chat-intro'>
          <img src="./images/fundo_wpp.jpg" alt=""/>
          <h1>Keep your phone connected</h1>
          <h2>WhatsApp connects to your phone to synchronize your messages.
              To reduce the data usage, connect your phone to a Wi-Fi network.
          </h2>
        </div>
    );
}

export default ChatIntro;