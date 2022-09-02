const express = require('express')
const cors = require('cors')
const helmet = require('helmet')

const server = express()
const tasksRouter = require('./Routers/tasksRouter')
const projectsRouter = require('./Routers/projectsRouter')
const usersRouter = require('./Routers/usersRouter')

server.use(helmet())
server.use(express.json())
server.use(
  cors({
    origin: '*',
  })
)
server.use(express.urlencoded({ extended: false }))

server.use('/tasks', tasksRouter)
server.use('/projects', projectsRouter)
server.use('/users', usersRouter)

server.listen(5001, () =>
  console.log('Server running on http://localhost:5001')
)

