const db = require('../knex/db')

function getAll() {
    return db('tasks')
}

function addTask(task) {
    return db('tasks').insert(task)
        .then(resp => console.log(resp))
}

module.exports = {
    getAll,
    addTask
}