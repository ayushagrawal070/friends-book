import axios from 'axios';
import React, { useEffect, useState } from 'react'
import './ChatOnline.css'

function ChatOnline({ onlineUsers, currentId, setCurrentChat }) {

    const [friends, setFriends] = useState([]);
    const [onlineFriends, setOnlineFriends] = useState([]);

    const pf = process.env.REACT_APP_PUBLIC_FOLDER;


    useEffect(() => {
        const getFriends = async () => {
            const res = await axios.get("users/friends/" + currentId);
            setFriends(res.data);
        };
        getFriends();
    }, [currentId]);

    // console.log(friends);

    useEffect(() => {
        setOnlineFriends(friends.filter(f => (
            onlineUsers.includes(f._id)
        )))
    }, [onlineUsers, friends]);

    const handleClick = async (user) => {
        try {
            const res = await axios.get(
                `/conversations/find/${currentId}/${user._id}`
            );
            setCurrentChat(res.data);
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className="chatOnline">
            {onlineFriends.map(o => (
                <div className="chatOnlineFriend" onClick={() => handleClick(o)}>
                    <div className="chatOnlineImgContainer">
                        <img className="chatOnlineImg" src={o?.profilePicture ? pf + o.profilePicture : pf + "person/noAvatar.png"} alt="" />
                        <div className="chatOnlineBadge"></div>
                    </div>
                    <span className="chatOnlineName">
                        {o?.username}
                    </span>
                </div>
            ))}

        </div>
    )
}

export default ChatOnline
