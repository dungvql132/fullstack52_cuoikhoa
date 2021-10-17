const express = require('express')
const Controller = require('../controllers')

const Router = express.Router();
// get all user
Router.get('/', async (req, res) => {
    const name = req.query.name;
    console.log(name);
    const { status, data } = await Controller.User.getAllUser({ name });
    // console.log('result', result);
    res.status(status).json(data);
})
// get user By id
Router.get('/id/:userId', async (req, res) => {
    const { userId } = req.params;
    const { status, data } = await Controller.User.getUserById({ userId });
    // console.log('result', result);
    res.status(status).json(data);
})
Router.get('/email/:userEmail', async (req, res) => {
    const { userEmail } = req.params;
    const { status, data } = await Controller.User.getUserByEmail({ userEmail });
    // console.log('result', result);
    res.status(status).json(data);
})
Router.get('/phone/:userPhone', async (req, res) => {
    const { userPhone } = req.params;
    const { status, data } = await Controller.User.getUserByPhone({ userPhone });
    // console.log('result', result);
    res.status(status).json(data);
})
Router.get('/kindPerson/:userKind', async (req, res) => {
    const { userKind } = req.params;
    const { status, data } = await Controller.User.getUserByKindPerson({ userKind });
    // console.log('result', result);
    res.status(status).json(data);
})
// tạo mới
Router.post('/', async (req, res) => {
    // console.log("duoc r");
    try {
        if(/\D/.test(req.body.phone)){
            res.status(500).json({
                msg: 'errors phone'
            })
        }
        else{
            const result = await Controller.User.createNewUser(req.body);
            console.log('result', result, req.body);
            res.json(result);
        }
    } catch (err) {
        res.status(500).json({
            msg: 'errors server'
        })
    }
})

//chinh sua 
Router.patch('/:userId', async (req, res) => {
    try {
        const { userId } = req.params;
        const result = await Controller.User.editUser({ userId, data: req.body });
        console.log('result', result, req.body);
        res.json(result);
    } catch (err) {
        res.status(500).json({
            msg: 'errors server'
        })
    }
})

//chinh sua 
Router.delete('/:userId', async (req, res) => {
    try {
        const { userId } = req.params;
        const result = await Controller.User.deleteUser({ userId });
        console.log('result', result, req.body);
        res.json(result);
    } catch (err) {
        res.status(500).json({
            msg: 'errors server'
        })
    }
})


module.exports = Router;