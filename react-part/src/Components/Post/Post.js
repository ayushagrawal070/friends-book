import './Post.css';
import { MoreVert } from "@material-ui/icons";
import { Users } from '../../dummyData';
import { useState } from 'react';

function Post({ post }) {
    const pf = process.env.REACT_APP_PUBLIC_FOLDER;
    const [like, setlike] = useState(post.like);
    const [isLiked, setisLiked] = useState(false);

    const likeHandler = () => {
        setlike(isLiked ? like - 1 : like + 1);
        setisLiked(!isLiked);
    }

    return (
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img
                            className="postProfileImg"
                            src={pf + Users.filter(u => (u.id === post.userId))[0].profilePicture}
                            alt="" />
                        <span className="postUsername">
                            {Users.filter(u => (
                                u.id === post.userId
                            ))[0].username}
                        </span>
                        <span className="postDate">
                            {post.date}
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
                    <img className="postImg" src={pf + post.photo} alt="" />
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
        </div>
    )
}

export default Post
