const express = require('express');
const User = require('./user.route');
const Login = require('./login.route');
// 
const app = express();

app.use('/user', User)
app.use('/login',Login);
module.exports = app;