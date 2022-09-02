const Users = require('../../Model/users_model')

const checkLogin = (req, res, next) => {
    const {username, password} = req.body.data.form
    if(!username || !password){
        next({status: 401, message:"Both fields required"})
    } else {
        Users.getBy('username', username)
            .then(user => {
                if(!user){
                    next({status: 400, message: 'No user with this username exists'})
                } else {
                    //TODO: Replace with authenticated passwords

                    if(password === user.password){
                        const {password, ...userInfo} = user
                        res.locals.user = userInfo
                    }
                    next()
                }
            })
    }
}
module.exports = {
    checkLogin
}