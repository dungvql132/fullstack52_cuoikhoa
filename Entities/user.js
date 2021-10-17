const mongoose = require('mongoose');

const user=new mongoose.Schema({
    idUser:{
        type:Number
    },
    email:{
        type:String
    },
    userName:{
        type:String
    },
    password:{
        type:String
    },
    phone:{
        type:String
    },
    age:{
        type:Number
    },
    kindPerson:{
        type:String
    },
    birthday:{
        type:String
    },
})

module.exports = User = mongoose.model('user',user);