const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors')

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/costcutters', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));


// Create a schema for the contact message
const messageSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
  copy: Boolean
});

// Create a model from the schema
const Message = mongoose.model('Message', messageSchema);

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.post('/contact', async (req, res) => {
  // Create a new message document with data from the request body
  const message = new Message({
    name: req.body.name,
    email: req.body.email,
    message: req.body.message,
    copy: req.body.copy
  });

  try {
    // Save the message document to the database
    await message.save();
    res.status(200).send({ message: 'Your message was sent successfully!' });
  } catch (error) {
    // If an error occurs, send an error message
    res.status(500).send({ message: 'There was a problem sending your message.' });
  }
});

const PORT = 3005;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
