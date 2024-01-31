const mongoose = require('mongoose');
// const { isEmail } = require('validator');
const bcrypt = require('bcryptjs');

// const userSchema = new mongoose.Schema({
//   username: {
//     type: String,
//     required: [true, 'Please enter a username'],
//     unique: true,
//   },
//   email: {
//     type: String,
//     required: [true, 'Please enter an email'],
//     unique: true,
//     lowercase: true,
//     validate: [isEmail, 'Please enter a valid email'],
//   },
//   password: {
//     type: String,
//     required: [true, 'Please enter a password'],
//     minlength: [6, 'Minimum password length is 6 characters'],
//   },
// });

const userSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String,
  });

// Pre-save middleware to hash the password
userSchema.pre('save', async function (next) {
  if (this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, 12);
  }
  next();
});

const User = mongoose.model('User', userSchema);

module.exports = User;
