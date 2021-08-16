import React from 'react'
import './ChatOnline.css'

function ChatOnline() {
    return (
        <div className="chatOnline">
            <div className="chatOnlineFriend">
                <div className="chatOnlineImgContainer">
                    <img className="chatOnlineImg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9Vus934rJkI6vZQKN07jnLnxkdSGmpqB9Ow&usqp=CAU" alt="" />
                    <div className="chatOnlineBadge"></div>
                </div>
                <span className="chatOnlineName">
                    Kalua Ram
                </span>
            </div>
        </div>
    )
}

export default ChatOnline
