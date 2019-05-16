const express = require('express');
const router = express.Router();
const passport = require('passport');
const config = require('../config/database');
const Post = require('../models/post');
const mongoose = require('mongoose');



mongoose.Promise = global.Promise;
mongoose.connect(config.database, function (err) {
    if (err) {
        console.error("Error! " + err);
    }
})
//localhost:3000/posts/posts
//find posts
router.get('/posts', function (req, res) {
    console.log("get request for all posts");
    Post.find({})
        .exec(function (err, posts) {
            if (err) {
                console.log("error find posts");
            } else {
                res.json(posts);
            }
        })
});
//localhost:3000/posts/posts/id

///by id
router.get('/posts/:id', function (req, res) {
    console.log("get request for post by id");
    Post.findById(req.params.id)
        .exec(function (err, post) {
            if (err) {
                console.log("error find post by id");
            } else {
                res.json(post);
            }
        })
});

router.post('/insert', function (req, res) {
    console.log('insert a post');
    let newPost = new Post({
        
        title : req.body.title, 
        body : req.body.body
    });
    
    newPost.save(function (err, insertedPost) {
        if (err) {
            console.log('error saving video');
        } else {

            res.json(insertedPost)
        }
    })
})

//PUT : localhost:3000/posts/update/id

router.put('/posts/:id', function (req, res) {
    console.log('update post by id');
    Post.findByIdAndUpdate(req.params.id,
        {
            $set: { title: req.body.title, body: req.body.body }
        },
        {
            new: true
        },
        function(err, updatedPost){
            if(err){
                res.send("Error updating post");

            }else{
                res.json(updatedPost);
            }

        }
    )
})

router.delete('/posts/:id', function(req,res){
    console.log("deleting post");
    Post.findByIdAndRemove(req.params.id, function(err, deletedPost){
        if(err){
            res.send("error deleting post");
        }
    else{
        res.json(deletedPost);
    }
    })

});

module.exports = router;
