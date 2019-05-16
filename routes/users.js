const express = require('express');
const router = express.Router();
const passport = require ('passport');
const jwt = require ('jsonwebtoken');
const config = require('../config/database');
const User = require('../models/user');

//register
router.post('/register',  (req, res) => {  // /users/register automatically in users
  let newUser= new User({
    username: req.body.username, //get the data submitted
    email: req.body.email,
    phonenumber: req.body.phonenumber,
    password: req.body.password
  });

  User.addUser(newUser, (err, user)=> {
    if (err){
      res.json({success:false, msg:'failed to register user !'});
    } else {
      res.json({success:true, msg:'user registered !'});
    }
  });
});

//authenticate
router.post('/authenticate',  (req, res, next) => {
    const username = req.body.username;
    const password = req.body.password;

  User.getUserByUsername(username, (err, user) => {
    if (err) throw err;
    if (!user){
      return res.json({success: false, msg:'user not found !'});
    }
      // compare the actual password to the hached one

    User.comparePassword(password, user.password, (err, isMatch) =>{
      if(err) throw err;
      if(isMatch){
        const token = jwt.sign(user.toJSON(), config.secret, {
          expiresIn: 604800 // 1 week
        });
        //const token= jwt.sign(user, config.secret, {
          //expiresIn: 604800 //one week in sec //the user has to log in in every certain amount of time

        //});
//profile data in the front end (when the password is correct send this response)
        res.json({
          success:true,
          token:'JWT '+ token,
          user: {
            id: user._id,
            username:user.username,
            email: user.email,
            phonenumber: user.phonenumber
          }
        });
      } else { //compared passwords are not the same
          return res.json({success: false, msg:'wrong password !'});
      }
    });
  });
});

//profile

router.get('/profile', passport.authenticate('jwt', {session:false}), (req, res, next) => {
  res.json({user: req.user});
});




module.exports = router;
