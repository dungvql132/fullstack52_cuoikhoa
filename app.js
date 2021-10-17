const express = require("express");
const bodyParser = require("body-parser");
const Router = require("./router");
const app = express();
const {connect}  = require("./config/dbconnect");
const port = 5005;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/",Router);
connect();
app.listen(port,()=>{
    console.log(`Example app listening at http://localhost:${port}`);
})