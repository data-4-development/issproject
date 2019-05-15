const express = require('express');
const path = require('path');
const bodyParser = require("body-parser");
const cors = require("cors");
const passport = require("passport");
const mongoose = require("mongoose");
const config = require('./config/database');

//connect to database
mongoose.connect(config.database);

mongoose.connection.on('connected', () => {
  console.log('connected to database' + config.database);
});

//on error check
mongoose.connection.on('error', (err) => {
  console.log('database error' + err);
});


const app = express();
const posts = require('./routes/posts');
const users = require('./routes/users');

const port = 3000;


//connect to database
mongoose.connect(config.database);

app.use(cors()); //cors middleware


app.use(express.static(path.join(__dirname, 'public')));


//body parser middleware
app.use(bodyParser.json());


app.use(passport.initialize());
app.use(passport.session());
app.use(bodyParser.urlencoded({extended : true}));
require('./config/passport')(passport);
//jklm

app.use('/users', users);
app.use('/posts', posts);

app.get('/', (req, res) => {
  res.send('Invalid Endpoint'); //index route
});

app.listen(port, () => {
  console.log('Server started on port' + port);
});

