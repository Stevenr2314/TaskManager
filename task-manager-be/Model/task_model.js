const db = require('../knex/db')

function getAll() {
    return db('tasks')
}

function getBy(string, id) {
    return db('tasks').where(`${string}`, id)
}

function addTask(task) {
    return db('tasks').insert(task)
        .then(resp => resp)
}

function updateTask({form}) {
    return db('tasks').where('id', form.id).first()
        .update(form)
        .then(resp => resp)
        .catch(err => err)
}

function deleteTask(id) {
    return db('tasks').where('id', id).first().del()
        .then(resp => resp)
}

function toggleCompleted(id) {
    return db('tasks').where('id', id).first()
        .then(resp => {
            const current = resp.completed
            return db('tasks').where('id', id).first().update({completed: !current})
        })
}

module.exports = {
    getAll,
    getBy,
    addTask,
    deleteTask,
    updateTask,
    toggleCompleted
}