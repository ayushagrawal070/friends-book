import React, { useContext, useEffect, useState } from 'react'
import './Conversation.css'
import axios from 'axios';
function Conversation({ conversation, currentUser }) {
    const pf = process.env.REACT_APP_PUBLIC_FOLDER;
    const [friend, setFriend] = useState(null);
    useEffect(() => {
        const getFriend = async () => {
            try {
                const friendId = await conversation.members.find(m => m !== currentUser._id);
                const res = await axios.get('/users?userId=' + friendId);
                setFriend(res.data);
            } catch (err) { console.log(err); }
        }
        getFriend();
    }, [conversation, currentUser])
    return (
        <div className="conversation">
            <img src={friend && friend.profilePicture ? pf + friend.profilePicture : pf + "person/noAvatar.png"} className="conversationImg" alt="" />
            <span className="conversationName">
                {friend ? friend.username : ""}
            </span>

        </div>
    )
}

export default Conversation
