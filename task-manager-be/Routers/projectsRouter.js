const express = require('express')
const router = express.Router()
const Projects = require('../Model/projects_model')

router.get('/', (req, res) => {
    Projects.getAll()
      .then(projects => res.json(projects))
      .catch(err => console.log(err))
})

router.post('/', (req, res) => {
    Projects.addProject(req.body)
        .then(projects => res.status(201).json(projects))
        .catch(err => console.log(err))
})

router.delete('/', (req, res) => {
    Projects.deleteProject(req.body)
        .then(resp => res.status(200).json({message: 'success'}))
        .catch(err => console.log(err))
})

router.patch('/', (req, res) => {
  console.log(req.body.data)
  Projects.updateProject(req.body.data)
    .then(resp => res.status(200).json({message: 'success'}))
    .catch(err => console.log(err))
})

module.exports = router