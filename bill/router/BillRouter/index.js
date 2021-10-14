const express = require("express");
const billMiddlewere = require("./billmiddlewere.js")
const app = express();

app.get("/getAll",billMiddlewere.findAll);

app.post("/find",billMiddlewere.findBy);
app.post("/addItem",billMiddlewere.insertMany);
app.post("/groupBy",billMiddlewere.groupBy);

app.delete("/delete",billMiddlewere.deleteMany);


module.exports = app;