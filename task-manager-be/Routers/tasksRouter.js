const express = require('express')
const router = express.Router()
const Tasks = require('../Model/task_model')

router.get('/:string/:id', (req, res) => {
    Tasks.getBy(req.params.string ,req.params.id)
        .then(tasks => res.json(tasks))
})

router.post('/', (req, res) => {
    Tasks.addTask(req.body)
        .then(task => res.status(201).json(task))
        .catch(err => console.log(err))
})

router.delete('/:id', (req, res) => {
    Tasks.deleteTask(req.params.id)
        .then(resp => res.status(200).json({message: 'success'}))
        .catch(err => console.log(err))
})

router.patch('/', (req, res) => {
  Tasks.updateTask(req.body.data)
    .then(resp => res.status(200).json({message: 'success'}))
    .catch(err => console.log(err))
})

router.put('/:id', (req, res) => {
    Tasks.toggleCompleted(req.params.id)
    .then(resp => res.status(200).json({message: 'success'}))
    .catch(err => console.log(err))
})

module.exports = router