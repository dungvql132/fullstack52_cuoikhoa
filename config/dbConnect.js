const mongoose = require('mongoose');
// mongoose.set('useFindAndModify', false);
const mongoUrl = process.env.DB_HOST;

const  connectDB=()=> {
    mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true })
    console.log("Connect mongodb database!")
    mongoose.connection.on('error', error => console.log('error connect db', error))
    mongoose.connection.once('open', () => console.log(`Connect to saving DB successfully!!!`))
}

module.exports = connectDB;