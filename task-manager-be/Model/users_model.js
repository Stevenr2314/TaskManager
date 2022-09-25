const db = require('../knex/db')

function getBy (string, value) {
    return db('users').where(`${string}`, value).first()
        .then(user => user )
}

function addUser(user) {
    return db('users').insert(user, ['id', 'username', 'email', 'created_at'])
        .then(resp => resp)
}

function updateUser({form}) {
    return db('users').where('id', form.id).first()
        .update(form)
        .then(resp => console.log(resp))
        .catch(err => console.log(err))
}

function deleteUser(user) {
    return db('users').where('id', user.id).first().del()
        .then(resp => console.log(resp))
}

module.exports = {
    getBy,
    addUser,
    deleteUser,
    updateUser
}