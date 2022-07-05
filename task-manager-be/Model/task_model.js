const db = require('../knex/db')

function getAll() {
    return db('tasks')
}

function addTask(task) {
    return db('tasks').insert(task)
        .then(resp => console.log(resp))
}

function deleteTask(task) {
    return db('tasks').where('title', task.title).first().del()
        .then(resp => console.log(resp))
}

module.exports = {
    getAll,
    addTask,
    deleteTask
}