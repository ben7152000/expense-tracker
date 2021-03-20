const express = require('express')
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const app = express()
const PORT = process.env.PORT

app.get('/', (req, res) => {
  res.send('hello')
})

app.listen(PORT, () => {
  console.log(`The server is working on the localhost:${PORT}`)
})