import { useEffect, useState } from 'react';
import Feed from '../../Components/Feed/Feed';
import Header from '../../Components/Header/Header'
import Rightbar from '../../Components/Rightbar/Rightbar';
import Sidebar from '../../Components/Sidebar/Sidebar'
import './Profile.css'
import axios from 'axios'
import { useParams } from 'react-router'
function Profile() {
    const pf = process.env.REACT_APP_PUBLIC_FOLDER;
    const [user, setuser] = useState({});
    const username = useParams().username;
    useEffect(() => {
        const fetchUser = async () => {
            const res = await axios.get(`/users?username=${username}`);
            setuser(res.data);
        }
        fetchUser();
    }, [username]);


    return (
        <>
            <Header />
            <div className="profile">
                <Sidebar />
                <div className="profileRight">
                    <div className="profileRightTop">
                        <div className="profileCover">
                            <img
                                className="profileCoverImg"
                                src={user.coverPicture || pf + "person/noCover.png"}
                                alt=""
                            />
                            <img
                                className="profileUserImg"
                                src={user.profilePicture || pf + "person/noAvatar.png"}
                                alt=""
                            />
                        </div>
                        <div className="profileInfo">
                            <h4 className="profileInfoName">{user.username}</h4>
                            <span className="profileInfoDesc">{user.desc}</span>
                        </div>
                    </div>
                    <div className="profileRightBottom">
                        <Feed username={username} />
                        <Rightbar user={user} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Profile
