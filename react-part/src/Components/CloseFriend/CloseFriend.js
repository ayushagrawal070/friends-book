import './CloseFriend.css'

function CloseFriend({ user }) {
    const pf = "/assets/";
    return (
        <li className="sidebarFriend">
            <img className="sidebarFriendImg" src={pf + user.profilePicture} alt="" />
            <span className="sidebarFriendName">{user.username}</span>
        </li>
    )
}

export default CloseFriend
