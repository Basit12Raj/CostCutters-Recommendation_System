const express = require('express');
const router = express.Router();
const Contact = require('../Models/Contact');

router.post('/', async (req, res) => {
  // Create a new contact document with data from the request body
  const contact = new Contact({
    name: req.body.name,
    email: req.body.email,
    message: req.body.message,
    copy: req.body.copy
  });

  try {
    // Save the contact document to the database
    await contact.save();
    res.status(200).send({ message: 'Your message was sent successfully!' });
  } catch (error) {
    // If an error occurs, send an error message
    res.status(500).send({ message: 'There was a problem sending your message.' });
  }
});

module.exports = router;
