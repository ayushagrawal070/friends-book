import './Header.css';
import { Search, Person, Chat, Notifications } from '@material-ui/icons'
import { Link } from 'react-router-dom'
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext'

function Header() {
    const pf = process.env.REACT_APP_PUBLIC_FOLDER;
    const { user } = useContext(AuthContext);

    return (
        <div className="header">
            <div className="headerleft">
                <Link to="/" style={{ textDecoration: "none" }}>
                    <span className="logo">FriendsBook</span>
                </Link>
            </div>
            <div className="headercenter">
                <div className="searchbar">
                    <Search className="searchIcon" />
                    <input placeholder="Search for friends, posts or videos" className="searchInput" />
                </div>
            </div>
            <div className="headerright">
                <div className="headerLinks">
                    <span className="headerLink">Home</span>
                    <span className="headerLink">Timeline</span>
                </div>
                <div className="headerIcons">
                    <div className="headerIconItem">
                        <Person />
                        <span className="headerIconBadge">
                            1
                        </span>
                    </div>

                    <div className="headerIconItem">
                        <Chat />
                        <span className="headerIconBadge">
                            2
                        </span>
                    </div>

                    <div className="headerIconItem">
                        <Notifications />
                        <span className="headerIconBadge">
                            3
                        </span>
                    </div>
                </div>
                <Link to={`profile/${user.username}`}>
                    <img src={user.profilePicture ? pf + user.profilePicture : pf + "person/noAvatar.png"} alt="" className="headerImg" />
                </Link>
            </div>
        </div>
    )
}

export default Header
