require('dotenv').config();
const mongoose = require('mongoose');
function connectDB() {
    // Database connection 🥳

    mongoose.connect(process.env.MONGO_CONNECTION_URL, {  useUnifiedTopology: true });
    //console.log(process.env.MONGO_CONNECTION_URL);
    const connection = mongoose.connection;
   // const connection = mongoose.connection;
    // console.log(connection.once); 
    connection.once('open', () => {
        console.log('Database connected');
    }).on('error',(err) => {
        console.log(err);
    });
}

// mIAY0a6u1ByJsWWZ 

module.exports = connectDB;