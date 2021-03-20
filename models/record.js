const { Schema, model } = require('mongoose')

const recordSchema = new Schema({
  name: { type: String, required: true },
  date: { type: String, required: true },
  month: { type: String, required: true },
  category: { type: String, required: true },
  merchant: { type: String, required: true },
  amount: { type: Number, required: true },
  userId: { type: Schema.Types.ObjectId, ref: 'User', index: true, required: true }
})

module.exports = model('Record', recordSchema)
