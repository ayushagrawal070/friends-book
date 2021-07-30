import { useEffect, useState } from 'react';
import Post from '../Post/Post'
import Share from '../Share/Share'
import './Feed.css'
import axios from 'axios'
function Feed({ username }) {
    const [posts, setposts] = useState([]);
    useEffect(() => {
        const fetchPosts = async () => {
            const res = username ? await axios.get("/posts/profile/" + username) : await axios.get("posts/timeline/60ff9c340f233a13d432fe54");
            setposts(res.data);
        }
        fetchPosts();
    }, [username])
    return (
        <div className="feed">
            <div className="feedWrapper">
                <Share />
                {posts.map(p => (
                    <Post key={p._id} post={p} />
                ))}
            </div>
        </div>
    )
}

export default Feed
