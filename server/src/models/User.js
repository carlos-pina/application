const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const config = require('../config/config')

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true,
    minLength: 8
  },
  tokens: [{
    token: {
      type: String,
      required: true
    }
  }]
})

// Hash the password before saving the user model
userSchema.pre('save', async function (next) {
  const user = this
  if (user.isModified('password')) {
    user.password = await bcrypt.hash(user.password, 8)
  }
  next()
})

// Generate an auth token for the user
userSchema.methods.generateAuthToken = async function () {
  const user = this
  const token = jwt.sign({ _id: user._id }, config.jwtkey)
  user.tokens = user.tokens.concat({ token })
  await user.save()
  return token
}

// Search for a user by email and password.
userSchema.statics.findByCredentials = async (email, password) => {
  let error = null
  const user = await User.findOne({ email })
  if (!user) {
    error = 'Invalid login credentials'
  }
  const isPasswordMatch = await bcrypt.compare(password, user.password)
  if (!isPasswordMatch) {
    error = 'Invalid login credentials'
  }
  return { error, user }
}

const User = mongoose.model('User', userSchema)

module.exports = User
