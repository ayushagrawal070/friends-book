import React from 'react'
import './message.css'
function Message({ own }) {
    return (
        <div className={own ? "message own" : "message"}>
            <div className="messageTop">
                <img className="messageImg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9Vus934rJkI6vZQKN07jnLnxkdSGmpqB9Ow&usqp=CAU" alt="" />
                <p className="messageText">hello this is message</p>
            </div>
            <div className="messageBottom">1 hr ago</div>
        </div>
    )
}

export default Message
