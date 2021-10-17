const express = require("express");
const Controller = require("../controllers/book.test");
const Router = express.Router();
// get all book 
Router.get('/',async (req,res)=>{
    const name = req.query.name;
    // res.send(`name ${name}`)
    const {status,data} = await Controller.Book.getAllBook({name});
    res.status(status).json(data);
})
// get book By Name
Router.get('/:name', async (req,res)=>{
    const {name} = req.params;
    const {status,data} = await Controller.Book.getBookByName({name})
    res.status(status).json(data);
})
// tạo mới
Router.post('/',async(req,res)=>{
    try{
        const result = await Controller.Book.creatNewBook(req.body);
        console.log('result: ',result,req.body);
        res.send("add thành công");
    }catch(err){
        res.status(500).json({
            msg: 'errors sever'
        })
    }
})
// chỉnh sửa
Router.patch('/',async(req,res)=>{
    try{
        const { name } = req.params;
        const result = await Controller.User.editBook({ name, data: req.body });
        console.log('result', result, req.body);
        res.json(result);
    }catch(err){
        res.status(500).json({
            msg: 'errors sever'
        })
    }
})
module.exports = Router;