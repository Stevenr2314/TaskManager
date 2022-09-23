const Users = require('../../Model/users_model')

const checkRegister = (req, res, next) => {
    const {username, password} = req.body.data.form
    if(!username || !password){
        next({status: 401, message:"Both fields required"})
    } else {
        Users.getBy('username', username)
            .then(user => {
                if(user) next({status: 400, message: 'That username is already taken'})
            })
            
        Users.addUser(req.body.data.form)
            .then(user => {
                res.local.user = user
                next()})
    }
}
module.exports = {
    checkRegister
}