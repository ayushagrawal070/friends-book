import './Header.css';
import { Search, Person, Chat, Notifications } from '@material-ui/icons'
import { Link } from 'react-router-dom'


function Header() {

    const pf = process.env.REACT_APP_PUBLIC_FOLDER;
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
                <img src={pf + "person/1.jpeg"} alt="" className="headerImg" />
            </div>
        </div>
    )
}

export default Header
