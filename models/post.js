const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

//user schema
const PostSchema = mongoose.Schema({
    title: {
        type: String,
    },
    body: {
        type: String,

    }

});

const Post = module.exports = mongoose.model('Post', PostSchema);
/*
module.exports.getPostById = function (id, callback) {
    User.findById(id, callback);
}
module.exports.getUserByUsername = function (username, callback) {
    const query = { username: username }
    User.findOne(query, callback);
}
*/



module.exports.comparePassword = function (newPost, callback) {

    newPost.save(callback);
}
