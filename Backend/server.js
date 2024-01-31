// <=========== app.js =========>
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors')

const search = require('./Routes/Search');
const amazon = require('./Routes/Amazon')
const flipkart = require('./Routes/Flipkart')
const eBay = require('./Routes/eBay')
const Contact = require('./Routes/Contact')
const User = require('./Routes/Users')
const Compare = require('./Routes/Compare')
const Product = require('./Routes/TopDeals.route')


//<========= Middleware =============>
const app = express();
// Enable CORS
app.use(cors());
app.use(bodyParser.json());

//<========= Connect to MongoDB ===========>
mongoose.connect('mongodb://127.0.0.1:27017/costcutters', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));



    // app.get('/admin/data', async (req, res) => {
    //     try {
    //       const data = await Contact.find();
    //       res.json(data);
    //     } catch (error) {
    //       console.error(error);
    //       res.status(500).json({ message: 'Error fetching data.' });
    //     }
    //   });


//<============= Routes ============>
app.use('/api/search', search)
app.use('/api/amazon', amazon)
app.use('/api/flipkart', flipkart)
app.use('/api/ebay', eBay)
app.use('/contact', Contact)
app.use('/users', User)
app.use('/compare', Compare)
app.use('/api', Product)

//<=============== PORT Listen ==============>
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
