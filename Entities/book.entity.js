'use strict'
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const book = new Schema({
    name: {
        type: String,
         
    },
    year:{
        type: Number,
    }
})

// users.index({email: 2}, {unique: true})

const Book = mongoose.model('Book', book)

module.exports = Book;