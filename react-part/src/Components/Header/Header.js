import './Header.css';
import { Search, Person, Chat, Notifications } from '@material-ui/icons'
function Header() {
    return (
        <div className="header">
            <div className="headerleft">
                <span className="logo">FriendsBook</span>
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
                <img src="/assets/person/1.jpeg" alt="" className="headerImg" />
            </div>
        </div>
    )
}

export default Header