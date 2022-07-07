const db = require('../knex/db')

function getAll() {
    return db('tasks')
}

function addTask(task) {
    return db('tasks').insert(task)
        .then(resp => console.log(resp))
}

function updateTask(id, data) {
    return db('tasks').where('id', id).first()
        .update()
}

function deleteTask(task) {
    return db('tasks').where('id', task.id).first().del()
        .then(resp => console.log(resp))
}

module.exports = {
    getAll,
    addTask,
    deleteTask
}