const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
const dummyData = require('./dummyData')

const server = express()
server.use(helmet())
server.use(express.json())
server.use(
  cors({
    origin: '*',
  })
)
server.use(express.urlencoded({ extended: false }))

server.listen(5001, () =>
  console.log('Server running on http://localhost:5001')
)

server.get('/tasks', (req, res) => {
    return  res.json(dummyData)
})

server.post('/tasks', (req, res) => {
  console.log(req.body)
})