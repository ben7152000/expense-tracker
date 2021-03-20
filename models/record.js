const { Schema, model } = require('mongoose')

const recordSchema = new Schema({
  name: { type: String, required: true },
  date: { type: String, required: true },
  month: { type: String },
  category: { type: String, required: true },
  merchant: { type: String },
  amount: { type: Number, required: true },
  userId: { type: Schema.Types.ObjectId, ref: 'User', index: true, required: true }
})

module.exports = model('Record', recordSchema)
