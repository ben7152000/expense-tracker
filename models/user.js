const { Schema, model } = require('mongoose')

const userSchema = new Schema({
  name: String,
  email: { type: String, required: true },
  password: { type: String, required: true },
  createAt: { type: Date, default: Date.now },
  from: { type: String }
})

const User = model('User', userSchema)

module.exports = User
