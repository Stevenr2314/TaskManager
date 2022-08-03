const db = require('../knex/db')

function getAll() {
    return db('tasks')
}

function addTask(task) {
    return db('tasks').insert(task)
        .then(resp => console.log(resp))
}

function updateTask({form}) {
    return db('tasks').where('id', form.id).first()
        .update(form)
        .then(resp => console.log(resp))
        .catch(err => console.log(err))
}

function deleteTask(task) {
    return db('tasks').where('id', task.id).first().del()
        .then(resp => console.log(resp))
}

module.exports = {
    getAll,
    addTask,
    deleteTask,
    updateTask
}