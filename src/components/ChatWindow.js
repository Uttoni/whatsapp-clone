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
import { onChatContent, sendMessage } from "../Api";

const ChatWindow = ({user, data}) => {

    const body = useRef();

    let recognition = null;
    let SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if(SpeechRecognition !== undefined){
        recognition = new SpeechRecognition();
    }

    const [emojiOpen, setEmojiOpen] = useState(false);
    const [text, setText] = useState('');
    const [listening, setListening] = useState(false);
    const [messageList, setMessageList] = useState([]);
    const [users, setUsers] = useState([]);
    const [bottom, setBottom] = useState(true);
    const [messageSent, setMessageSent] = useState(true);

    useEffect(()=>{
        const getMessages = async (data) => {
            if (data) {
                setMessageList(await onChatContent(data.chatId, setUsers));
            }
        };

        getMessages(data);
    }, [data, messageSent]);
    

    useEffect(() => {
        if(bottom){
            if(body.current.scrollHeight > body.current.offsetHeight){
                body.current.scrollTop = body.current.scrollHeight - body.current.offsetHeight
            }
        }
    },[users]);
    
    const handleEmojiClick = (e, emojiObject) => {
        setText(text + emojiObject.emoji)
    }

    const handleOpenEmoji = () => {
        setEmojiOpen(true);
    }

    const handleCloseEmoji = () => {
        setEmojiOpen(false);
    }

    const handleInputKeyUp = (e) => {
        if(e.keyCode == 13){
            handleSendClick();
        }
    }

    const handleSendClick = () => {
        if(text !== ''){
            sendMessage(data, user.id, 'text', text, users);
            setText('');
            setEmojiOpen(false);
            setBottom(true);
            setMessageSent(!messageSent);
        }
    }

    const handleSetBottom = () => {
        setBottom(false);
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
        <div className="chatWindow"
        >
            <div className="chatWindow-header">
                <div className="chatWindow-header-info">
                    <img className="chatWindow-header-avatar" src={data.image} alt=""/>
                    <div className="chatWindow-header-name">{data.title}</div>
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
            <div ref={body} className="chatWindow-body"
            onScroll={handleSetBottom}>
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
                        onKeyUp={handleInputKeyUp}
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