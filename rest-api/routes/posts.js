const express = require("express");
const router = express.Router();
const Post = require('../models/Post');
const User = require('../models/User');

// create 
router.post('/', async (req, res) => {
    const newPost = new Post(req.body);
    try {
        const savedPost = await newPost.save();
        res.status(200).json(savedPost);
    }
    catch (err) {
        res.status(500).json(err);
    }
});

// update a post
router.put('/:id', async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (post.userId === req.body.userId) {
            await post.updateOne({ $set: req.body });
            res.status(200).json("post updated");
        } else {
            res.status(403).json("you can update your post only");
        }
    }
    catch (err) {
        res.status(500).json(err);
    }
});

// delete a post
router.delete('/:id', async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (post.userId === req.body.userId) {
            await post.deleteOne();
            res.status(200).json("post deleted");
        } else {
            res.status(403).json("you can delete your post only");
        }
    }
    catch (err) {
        res.status(500).json(err);
    }
});

// like a post
router.put('/:id/like', async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (!post.likes.includes(req.body.userId)) {
            await post.updateOne({ $push: { likes: req.body.userId } });
            res.status(200).json("post liked");
        } else {
            await post.updateOne({ $pull: { likes: req.body.userId } });
            res.status(200).json("post disliked");
        }
    }
    catch (err) {
        res.status(500).json(err);
    }
});

// get a post
router.get('/:id', async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        res.status(200).json(post);
    }
    catch (err) {
        res.status(500).json(err);
    }
});

// get all timeline posts
router.get('/timeline/all', async (req, res) => {
    try {
        const currUser = await User.findById(req.body.userId);
        const userPosts = await Post.find({ userId: currUser._id });
        const friendsPosts = await Promise.all(
            currUser.following.map(friendId => {
                return Post.find({ userId: friendId });
            })
        );
        res.status(200).json(userPosts.concat(...friendsPosts));
    }
    catch (err) {
        res.status(500).json(err);
    }
})

module.exports = router;