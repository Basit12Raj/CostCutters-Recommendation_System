const mongoose = require('mongoose');

//<========= Connect to MongoDB ===========>
const connectDB = mongoose.connect('mongodb://127.0.0.1:27017/costcutters', 
   { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
   })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

module.exports = connectDB;