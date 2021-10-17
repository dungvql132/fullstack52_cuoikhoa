const express = require('express')
const Controller = require('../controllers')

let loginRouter = express.Router();

loginRouter.get('/', async (req, res) => {
    const name = req.query.name;
    const pass = req.query.pass;
    console.log(name);
    const { status, data } = await Controller.Login.getUser({ name,pass });
    // console.log('result', result);
    res.status(status).json(data);
});
loginRouter.post('/', async(req,res)=>{
    try {
        const result = await Controller.Login.createNewUser(req.body);
        console.log('result', result, req.body);
        res.json(result);
    } catch (err) {
        res.status(500).json({
            msg: 'errors server'
        })
    }
})
module.exports = loginRouter;