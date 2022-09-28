const express = require('express')
const router = express.Router()
const Projects = require('../Model/projects_model')

router.get('/', (req, res) => {
    Projects.getAllFromUserID(req.query.id)
      .then(projects => {
        console.log(projects)
        res.json(projects) })
      .catch(err => console.log(err))
})

router.post('/', (req, res) => {
    Projects.addProject(req.body)
        .then(resp => res.status(201).json({message:'success'}))
        .catch(err => console.log(err))
})

router.delete('/:id', (req, res) => {
    Projects.deleteProject(req.params.id)
        .then(resp => res.status(200).json({message: 'success'}))
        .catch(err => console.log(err))
})

router.patch('/', (req, res) => {
  Projects.updateProject(req.body.data)
    .then(resp => res.status(200).json({message: 'success'}))
    .catch(err => console.log(err))
})

router.put('/:id', (req, res) => {
    Projects.toggleArchived(req.params.id)
        .then(resp => res.status(200).json({message: 'success'}))
        .catch(err => console.log(err))
})

module.exports = router