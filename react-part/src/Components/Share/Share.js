import './Share.css';
import {
    PermMedia,
    Label,
    Room,
    EmojiEmotions,
} from "@material-ui/icons";
import { useContext, useRef, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import axios from 'axios';

function Share() {
    const desc = useRef();
    const pf = process.env.REACT_APP_PUBLIC_FOLDER;
    const { user } = useContext(AuthContext);
    const [file, setfile] = useState(null);

    const submitHandler = async (e) => {
        e.preventDefault();
        const newPost = {
            userId: user._id,
            desc: desc.current.value,
        }
        if (file) {
            const
                data = new FormData();
            const fileName = file.name;
            data.append("file", file);
            data.append("name", fileName);
            newPost.img = data.get("name");
            try {
                await axios.post("/upload", data);
            }
            catch (err) {
                console.log(err);
            }
        }
        try {
            await axios.post("/posts", newPost);
        }
        catch (err) {
            console.log(err);
        }
    };

    return (
        <div className="share">
            <div className="shareWrapper">
                <div className="sharetTop">
                    <img className="shareProfileImg"
                        src={
                            user.profilePicture
                                ? pf + user.profilePicture
                                : pf + "person/noAvatar.png"
                        }
                        alt="">

                    </img>
                    <input
                        ref={desc}
                        placeholder={"What's in your mind " + user.username + "?"}
                        className="shareInput"
                    />
                </div>
                <hr className="shareHr" />
                <form className="shareBottom" enctype="multipart/form-data" onSubmit={submitHandler} >
                    <div className="shareOptions">
                        <label htmlFor="file" className="shareOption">
                            <PermMedia htmlColor="tomato" className="shareIcon" />
                            <span className="shareOptionText">
                                Photo or Video
                            </span>
                            <input
                                style={{ display: "none" }}
                                type="file"
                                id="file"
                                accept=".png,.jpeg,.jpg"
                                onChange={(e) => setfile(e.target.files[0])}
                            />
                        </label>
                        <div className="shareOption">
                            <Label htmlColor="blue" className="shareIcon" />
                            <span className="shareOptionText">Tag</span>
                        </div>
                        <div className="shareOption">
                            <Room htmlColor="green" className="shareIcon" />
                            <span className="shareOptionText">Location</span>
                        </div>
                        <div className="shareOption">
                            <EmojiEmotions htmlColor="goldenrod" className="shareIcon" />
                            <span className="shareOptionText">Feelings</span>
                        </div>
                    </div>
                    <button className="shareButton" type="submit">Share</button>
                </form>
            </div>
        </div>
    )
}

export default Share
