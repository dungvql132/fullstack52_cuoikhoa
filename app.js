require('dotenv').config();
const bodyParser = require('body-parser');
// local module
// const {connect} = require('./config/dbConnect');
const Router = require('./router');

const express = require('express');
const connectDB = require('./config/dbConnect');
const app = express()

const POST = process.env.POST || 5001

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

connectDB();

app.use('/', Router);

app.listen(POST, () => console.log("run with mongoose on post " + POST))