import React from 'react'
import ChatOnline from '../../Components/chatOnline/ChatOnline'
import Conversation from '../../Components/Conversations/Conversation'
import Header from '../../Components/Header/Header'
import Message from '../../Components/messages/Message'
import './messenger.css'

function Messenger() {
    return (
        <>
            <Header />
            <div className="messenger">
                <div className="chatMenu">
                    <div className="chatMenuWrapper">
                        <input className="chatMenuInput" placeholder="Search for friends" />
                        <Conversation />
                    </div>
                </div>
                <div className="chatBox">
                    <div className="chatBoxWrapper">
                        <div className="chatBoxTop">
                            <Message />
                            <Message own />
                            <Message />
                            <Message />
                            <Message />
                            <Message />
                            <Message />
                        </div>
                        <div className="chatBoxBottom">
                            <textarea className="chatMessageInput" placeholder="Write something.." ></textarea>
                            <button className="chatSubmitButton">Send</button>
                        </div>
                    </div>
                </div>
                <div className="chatOnline">
                    <div className="chatOnlineWrapper">
                        <ChatOnline />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Messenger
