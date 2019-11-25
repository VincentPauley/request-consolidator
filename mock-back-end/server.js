const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())

app.get('/api/product', (req, res) => {
  const stagger = Math.round(Math.random() * 5) * 1000
  console.log('> Called')

  setTimeout(() => {
    res.json({
      message: 'Here is the response'
    })
  }, stagger)
})

app.listen(3000, () => {
  console.log('server running on *3000')
})