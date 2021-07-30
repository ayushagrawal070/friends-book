import './Rightbar.css'
import { Users } from '../../dummyData';
import Online from '../Online/Online';

function Rightbar({ profile }) {

    const pf = process.env.REACT_APP_PUBLIC_FOLDER;
    const HomeRightbar = () => {
        return (
            <>
                <div className="birthdayContainer">
                    <img className="birthdayImg" src={pf + "gift.png"} alt="" />
                    <span className="birthdayText">
                        <b>Shekhar Gautam</b> and <b>3 other friends</b> have birthday today
                    </span>
                </div>
                <img className="rightbarAd" src={pf + "ad.png"} alt="" />
                <h4 className="rightbarTitle">
                    Online Friends
                </h4>
                <ul className="rightbarFriendList">
                    {Users.map(u => (
                        <Online key={u.id} user={u} />
                    ))}
                </ul>
            </>
        );
    };

    const ProfileRightBar = () => {
        return (
            <>
                <h4 className="rightbarTitle">User information</h4>
                <div className="rightbarInfo">
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">City:</span>
                        <span className="rightbarInfoValue">Aligarh</span>
                    </div>
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">From:</span>
                        <span className="rightbarInfoValue">Uttar Pradesh</span>
                    </div>
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">Relationship:</span>
                        <span className="rightbarInfoValue">
                            Single
            </span>
                    </div>
                </div>
                <h4 className="rightbarTitle">User friends</h4>
                <div className="rightbarFollowings">
                    <div className="rightbarFollowing">
                        <img
                            src={pf + "person/1.jpeg"}
                            alt=""
                            className="rightbarFollowingImg"
                        />
                        <span className="rightbarFollowingName">Sabhy Sharma</span>
                    </div>
                </div>
            </>
        );
    }

    return (
        <div className="rightbar">
            <div className="rightbarWrapper">

                {(profile) ? <ProfileRightBar /> : <HomeRightbar />}
            </div>
        </div>
    )
}

export default Rightbar
