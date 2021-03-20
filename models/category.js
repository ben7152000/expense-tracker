const { Schema, model } = require('mongoose')

const categorySchema = new Schema({
  name: { type: String, required: true },
  icon: { type: String, required: true }
})

module.exports = model('Category', categorySchema)
