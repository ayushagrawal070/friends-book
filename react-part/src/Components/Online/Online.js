import './Online.css'

function Online({ user }) {
    const pf = "/assets/"
    return (
        <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
                <img className="rightbarProfileImg" src={pf + user.profilePicture} alt="" />
                <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">{user.username}</span>
        </li>
    )
}

export default Online
