const express = require('express');
const router = express.Router();
const passport = require('passport');
const config = require('../config/database');
const Post = require('../models/post');
router.post('/dashboard/addpost', (req, res, next) => {  // /users/register automatically in users
    let newPost = new Post({
        title: req.body.title, //get the data submitted
        body: req.body.body
    });

    Post.addPost(newPost, (err, post) => {
        if (err) {
            res.json({ success: false, msg: 'failed to register Post !' });
        } else {
            res.json({ success: true, msg: 'Post registered !' });
        }
    });
});

module.exports = router;