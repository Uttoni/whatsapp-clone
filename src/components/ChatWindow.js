import React, { useState, useEffect, useRef } from "react";
import EmojiPicker from 'emoji-picker-react';

import MessageItem from './MessageItem';
import './styles/ChatWindow.css';

import SearchIcon from '@mui/icons-material/Search';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import MicIcon from '@mui/icons-material/Mic';
import SendIcon from '@mui/icons-material/Send';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import CloseIcon from '@mui/icons-material/Close';

const ChatWindow = ({user}) => {

    const body = useRef();

    let recognition = null;
    let SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if(SpeechRecognition !== undefined){
        recognition = new SpeechRecognition();
    }

    const [emojiOpen, setEmojiOpen] = useState(false);
    const [text, setText] = useState('');
    const [listening, setListening] = useState(false);
    const [messageList, setMessageList] = useState([
        {author:123, date:'19:00', body: "testeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee"},
        {author:123, date:'19:01', body: "estranho"},
        {author:1234, date:'19:01', body: 'ta funcionandooooooo :3'},
        { author: 123, date: '19:00', body: "testeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee" },
        { author: 123, date: '19:01', body: "estranho" },
        { author: 1234, date: '19:01', body: 'ta funcionandooooooo :3' },
        { author: 123, date: '19:00', body: "testeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee" },
        { author: 123, date: '19:01', body: "estranho" },
        { author: 1234, date: '19:01', body: 'ta funcionandooooooo :3' },
        { author: 123, date: '19:00', body: "testeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee" },
        { author: 123, date: '19:01', body: "estranho" },
        { author: 1234, date: '19:01', body: 'ta funcionandooooooo :3' }, { author: 123, date: '19:00', body: "testeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee" },
        { author: 123, date: '19:01', body: "estranho" },
        { author: 1234, date: '19:01', body: 'ta funcionandooooooo :3' }
    ]);


    useEffect(() => {
        if(body.current.scrollHeight > body.current.offsetHeight){
            body.current.scrollTop = body.current.scrollHeight - body.current.offsetHeight
        }
    },[messageList]);

    const handleEmojiClick = (e, emojiObject) => {
        setText(text + emojiObject.emoji)
    }

    const handleOpenEmoji = () => {
        setEmojiOpen(true);
    }

    const handleCloseEmoji = () => {
        setEmojiOpen(false);
    }

    const handleSendClick = () => {

    }

    const handleMicClick = () => {
        if( recognition !== null){
            recognition.onstart = () => {
                setListening(true);
            }

            recognition.onend = () => {
                setListening(false);
            }
            
            recognition.onresult = (e) => {
                setText(e.results[0][0].transcript)
            }

            recognition.start();

        }
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
            <div ref={body} className="chatWindow-body">
                {
                    messageList.map((item, key) => (
                        <MessageItem
                            key={key}
                            data={item}
                            user={user}
                        />
                    ))
                }
            </div>

            <div className="chatWindow-emoji-area"
                style={{height: emojiOpen ? '200px':'0px'}}
            >
                <EmojiPicker
                    disableSearchBar
                    disableSkinTonePicker
                    onEmojiClick={handleEmojiClick}
                />
            </div>

            <div className="chatWindow-footer">
                <div className="chatWindow-footer-left">
                    <div
                        className="chatWindow-header-icon"
                        onClick={handleCloseEmoji}
                        style={{ width: emojiOpen ? '40px' : '0' }}
                    >
                        <CloseIcon style={{ color: '#919191', width: emojiOpen ? '40px' : '0'}}/>
                    </div>
                    <div 
                        className="chatWindow-header-icon"
                        onClick={handleOpenEmoji}
                    >
                        <InsertEmoticonIcon style={{color: emojiOpen? '#009688':'#919191'}}/>
                    </div>
                    <div className="chatWindow-header-icon">
                        <AttachFileIcon style={{color: '#919191'}}/>
                    </div>
                </div>
                <div className="chatWindow-footer-input-area">
                    <input 
                        className="chatWindow-footer-input" 
                        type="text" 
                        placeholder="Type a message"
                        value={text}
                        onChange={e => setText(e.target.value)}
                    />
                </div>
                <div className="chatWindow-footer-right">
                    { text === '' &&
                        <div 
                            className="chatWindow-header-icon"
                            onClick={handleMicClick}
                        >
                            <MicIcon style={{ color: listening ? '#126ece' : '#919191' }}/>
                        </div>
                    }
                    {text !== '' &&
                        <div 
                            className="chatWindow-header-icon"
                            onClick={handleSendClick}
                        >
                            <SendIcon style={{color: '#919191'}}/>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
}

export default ChatWindow;