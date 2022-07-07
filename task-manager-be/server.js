const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
const dummyData = require('./dummyData')
const Tasks = require('./Model/task_model')

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
    Tasks.getAll()
      .then(tasks => res.json(tasks))
      .catch(err => console.log(err))
})

server.post('/tasks', (req, res) => {
    Tasks.addTask(req.body)
        .then(task => res.status(201).json(task))
        .catch(err => console.log(err))
})

server.delete('/tasks', (req, res) => {
    Tasks.deleteTask(req.body)
        .then(resp => res.status(200).json({message: 'DELETE Successful'}))
        .catch(err => console.log(err))
})