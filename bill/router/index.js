const express = require("express");
const app = express();
const bodyparser = require("body-parser");
const billRouter = require("./BillRouter");
const cors = require("cors");

app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());
app.use(cors());

app.use("/bill",billRouter);

app.get("/",(req,res)=>{
    res.send("main get")
})

app.listen(1302,()=>{
    console.log("server running");
})