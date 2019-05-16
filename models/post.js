const mongoose = require('mongoose');
const config = require('../config/database');


const Schema = mongoose.Schema;
//user schema
const PostSchema = new Schema({

    title: String,
    body: String

});



module.exports = mongoose.model('post', PostSchema, 'post');

/*
module.exports.getPostById = function (id, callback) {
    User.findById(id, callback);
}
module.exports.getUserByUsername = function (username, callback) {
    const query = { username: username }
    User.findOne(query, callback);
}
*/


