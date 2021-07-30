import './Post.css';
import { MoreVert } from "@material-ui/icons";
import { useEffect, useState } from 'react';
import axios from 'axios';
import { format } from 'timeago.js'
import { Link } from 'react-router-dom';

function Post({ post }) {
    const pf = process.env.REACT_APP_PUBLIC_FOLDER;
    const [like, setlike] = useState(post.likes.length);
    const [isLiked, setisLiked] = useState(false);
    const [user, setuser] = useState({});

    useEffect(() => {
        const fetchUser = async () => {
            const res = await axios.get(`/users?userId=${post.userId}`);
            setuser(res.data);
        }
        fetchUser();
    }, [post.userId]);

    const likeHandler = () => {
        setlike(isLiked ? like - 1 : like + 1);
        setisLiked(!isLiked);
    }

    return (
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <Link to={`profile/${user.username}`}>
                            <img
                                className="postProfileImg"
                                src={user.profilePicture || pf + "person/noAvatar.png"}
                                alt="" />

                        </Link>
                        <span className="postUsername">
                            {user.username}
                        </span>
                        <span className="postDate">
                            {format(post.createdAt)}
                        </span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert />
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">
                        {post?.desc}
                    </span>
                    <img className="postImg" src={pf + post.img} alt="" />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img
                            className="likeIcon"
                            src={pf + "like.png"}
                            alt=""
                            onClick={likeHandler}
                        />
                        <img
                            className="likeIcon"
                            src={pf + "heart.png"}
                            alt=""
                            onClick={likeHandler}
                        />
                        <span className="postLikeCounter">{like} people like it</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText">{post.comment} comments</span>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Post
