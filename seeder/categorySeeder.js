if (process.env.NODE_ENV !== 'production') require('dotenv').config()
const db = require('../config/mongoose')
const Category = require('../models/category')
const category = require('./category.json').results

db.once('open', () => {
  console.log('mongodb connected !!')
  Category.create(category).then(() => process.exit())
  console.log('Category seeder is done')
})
