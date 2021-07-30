import Feed from '../../Components/Feed/Feed';
import Header from '../../Components/Header/Header'
import Rightbar from '../../Components/Rightbar/Rightbar';
import Sidebar from '../../Components/Sidebar/Sidebar'
import './Profile.css'

function Profile() {

    const pf = process.env.REACT_APP_PUBLIC_FOLDER;
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
                                src={pf + "post/3.jpeg"}
                                alt=""
                            />
                            <img
                                className="profileUserImg"
                                src={pf + "person/6.jpeg"}
                                alt=""
                            />
                        </div>
                        <div className="profileInfo">
                            <h4 className="profileInfoName">ayush agrawal</h4>
                            <span className="profileInfoDesc">your godfather</span>
                        </div>
                    </div>
                    <div className="profileRightBottom">
                        <Feed />
                        <Rightbar profile />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Profile
