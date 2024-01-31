const express = require('express');
const User = require('../Models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const router = express.Router();

// Register Endpoint
router.post('/register', async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).send({ message: 'User registered successfully' });
  } catch (err) {
    res.status(400).send({ error: 'Registration failed' });
  }
});

// Login Endpoint
router.post('/login', async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user || !(await bcrypt.compare(req.body.password, user.password))) {
      throw new Error();
    }
    
    const token = jwt.sign({ userId: user.id }, 'SECRET_KEY', { expiresIn: '7d' }); // Use a secure key in production

    res.status(200).send({ token, userId: user.id });
  } catch (err) {
    res.status(400).send({ error: 'Login failed' });
  }
});

// User Logout and Delete
router.post('/logout', async (req, res) => {
  try {
      await User.deleteOne({ username: req.body.username });
      res.json({ message: 'User deleted and logged out successfully!' });
  } catch (error) {
      res.status(500).json({ message: 'Error logging out user.' });
  }
});

module.exports = router;
