const express = require('express')
const { checkLogin } = require('../Middleware/Users/checkLogin')
const router = express.Router()
const Users = require('../Model/users_model')

router.post('/register', (req, res) => {
    Users.addUser(req.body.form)
        .then(users => res.status(201).json(users))
        .catch(err => console.log(err))
})

router.post('/login', checkLogin, (req,res) => {
    res.status(200).json({message: 'Login successful', user: res.locals.user})
})
router.delete('/', (req, res) => {
    Users.deleteUser(req.body)
        .then(resp => res.status(200).json({message: 'success'}))
        .catch(err => console.log(err))
})

router.patch('/', (req, res) => {
  console.log(req.body.data)
  Users.updateUser(req.body.data)
    .then(resp => res.status(200).json({message: 'success'}))
    .catch(err => console.log(err))
})

module.exports = router