import React, { useContext, useEffect, useState } from 'react'
import ChatOnline from '../../Components/chatOnline/ChatOnline'
import Conversation from '../../Components/Conversations/Conversation'
import Header from '../../Components/Header/Header'
import Message from '../../Components/messages/Message'
import { AuthContext } from '../../context/AuthContext'
import './messenger.css'
import axios from 'axios'
import { useRef } from 'react'
import { io } from "socket.io-client"
function Messenger() {

    const [conversations, setConversations] = useState([]);
    const [currentChat, setCurrentChat] = useState(null);
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState("");
    const [arrivalMessage, setArrivalMessage] = useState(null);
    const [onlineUsers, setOnlineUsers] = useState([]);
    const socket = useRef();
    const { user } = useContext(AuthContext);
    const scrollRef = useRef();

    useEffect(() => {
        socket.current = io("ws://localhost:8900");
        socket.current.on("getMessage", (data) => {
            setArrivalMessage({
                sender: data.senderId,
                text: data.text,
                createdAt: Date.now(),
            });
        });
    }, []);

    useEffect(() => {
        arrivalMessage &&
            currentChat?.members.includes(arrivalMessage.sender) &&
            setMessages((prev) => [...prev, arrivalMessage]);
    }, [arrivalMessage, currentChat]);

    useEffect(() => {
        socket.current.emit("addUser", user._id);
        socket.current.on("getUsers", (users) => {
            setOnlineUsers(
                user.following.filter((f) => users.some((u) => u.userId === f))
            );
        });
    }, [user]);

    useEffect(() => {
        const getConversations = async () => {
            try {
                const res = await axios.get("/conversations/" + user._id);
                setConversations(res.data);
            } catch (err) {
                console.log(err);
            }
        }
        getConversations();
    }, [user._id])

    useEffect(() => {
        const getMessages = async () => {
            try {
                const res = await axios.get("/messages/" + currentChat?._id);
                setMessages(res.data);
            }
            catch (err) { console.log(err); }
        }
        getMessages();
    }, [currentChat])

    useEffect(() => {
        scrollRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages])

    const handleSubmit = async (e) => {
        e.preventDefault();
        const message = {
            sender: user._id,
            text: newMessage,
            conversationId: currentChat._id
        };

        const receiverId = currentChat.members.find(
            (member) => member !== user._id
        );

        socket.current.emit("sendMessage", {
            senderId: user._id,
            receiverId,
            text: newMessage,
        });

        try {
            const res = await axios.post('/messages', message);
            setMessages([...messages, res.data]);
            setNewMessage("");
        }
        catch (err) {
            console.log(err);
        }
    }
    return (
        <>
            <Header />
            <div className="messenger">
                <div className="chatMenu">
                    <div className="chatMenuWrapper">
                        <input className="chatMenuInput" placeholder="Search for friends" />
                        {conversations.map(conversation => (
                            <div onClick={() => setCurrentChat(conversation)}>
                                < Conversation conversation={conversation} currentUser={user} />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="chatBox">
                    <div className="chatBoxWrapper">
                        {currentChat ? <>
                            <div className="chatBoxTop">
                                {messages.map(m => (
                                    <div ref={scrollRef}>
                                        <Message message={m} own={m.sender === user._id} />
                                    </div>))}

                            </div>
                            <div className="chatBoxBottom">
                                <textarea
                                    onChange={(e) => setNewMessage(e.target.value)}
                                    value={newMessage}
                                    className="chatMessageInput"
                                    placeholder="Write something.."
                                >
                                </textarea>
                                <button className="chatSubmitButton" onClick={handleSubmit}>Send</button>
                            </div></> : <span className="noConversationText">Open a conversation to start the chat</span>
                        }
                    </div>
                </div>
                <div className="chatOnline">
                    <div className="chatOnlineWrapper">
                        <ChatOnline onlineUsers={onlineUsers} currentId={user._id} setCurrentChat={setCurrentChat} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Messenger
