const express = require("express");
const router = express.Router();
const bcrypt = require('bcrypt');
const User = require("../models/User");

// update user
router.put("/:id", async (req, res) => {
    if (req.body.userId === req.params.id || req.body.isAdmin) {
        if (req.body.passwod) {
            try {
                const salt = await bcrypt.genSalt(10);
                req.body.password = await bcrypt.hash(req.body.password, salt);

            }
            catch (err) {
                return res.status(500).json(err);
            }
        }
        try {
            const user = await User.findByIdAndUpdate(req.params.id, {
                $set: req.body,
            });
            res.status(200).json("account updated");
        }
        catch (err) {
            return res.status(500).json(err);
        }
    } else {
        return res.status(403).json("you can only update your account");
    }
});

// delete user
router.delete("/:id", async (req, res) => {
    if (req.body.userId === req.params.id || req.body.isAdmin) {
        try {
            const user = await User.findByIdAndDelete(req.params.id);
            res.status(200).json("account deleted");
        }
        catch (err) {
            return res.status(500).json(err);
        }
    } else {
        return res.status(403).json("you can only delete your account");
    }
});


// get a user
router.get('/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        const { password, updatedAt, ...other } = user._doc;
        res.status(200).json(other);
    }
    catch (err) {
        res.status(500).json(err);
    }
});

// follow a user
router.put('/:id/follow', async (req, res) => {
    if (req.body.userId !== req.params.id) {
        try {
            const user = await User.findById(req.params.id);
            const currUser = await User.findById(req.body.userId);
            if (!user.followers.includes(req.body.userId)) {
                await user.updateOne({ $push: { followers: req.body.userId } });
                await currUser.updateOne({ $push: { following: req.params.id } });
                res.status(200).json("user followed");
            } else {
                res.status(403).json("you already follow this user");
            }

        } catch (err) {
            res.status(500).json(err);
        }
    } else {
        return res.status(403).json("you cant follow yourself");
    }
});


// unfollow a user
router.put('/:id/unfollow', async (req, res) => {
    if (req.body.userId !== req.params.id) {
        try {
            const user = await User.findById(req.params.id);
            const currUser = await User.findById(req.body.userId);
            if (user.followers.includes(req.body.userId)) {
                await user.updateOne({ $pull: { followers: req.body.userId } });
                await currUser.updateOne({ $pull: { following: req.params.id } });
                res.status(200).json("user unfollowed");
            } else {
                res.status(403).json("you are not following this user");
            }

        } catch (err) {
            res.status(500).json(err);
        }
    } else {
        return res.status(403).json("you cant unfollow yourself");
    }
});

module.exports = router;