if (process.env.NODE_ENV !== 'production') require('dotenv').config()
const db = require('../config/mongoose')
const bcrypt = require('bcryptjs')
const Record = require('../models/record')
const User = require('../models/user')
const record = require('./record.json').results

const USERS_SEEDER = [
  { email: 'user1@example.com', password: '12345678' },
  { email: 'user2@example.com', password: '12345678' }
]

db.once('open', () => {
  console.log('The database is continue')
  USERS_SEEDER.forEach(async (user, index) => {
    try {
      const salt = await bcrypt.genSalt(10)
      const hashPassword = await bcrypt.hash(user.password, salt)
      const userSeeder = await User.create({ email: user.email, password: hashPassword })
      Promise.all(Array.from({ length: 3 }, (v, i) => Record.create({ ...record[(i + (index * 3))], userId: userSeeder._id })))
        .then(() => process.exit())
    } catch (e) {
      console.log(e)
      process.exit()
    }
  })
  console.log('Record and User seeders are done')
})
