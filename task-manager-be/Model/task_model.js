const db = require('../knex/db')

function getAll() {
    return db('tasks')
}

function getByProjectId(id) {
    return db('tasks').where('project_id', id)
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

function toggleCompleted(id) {
    return db('tasks').where('id', id).first()
        .then(resp => {
            const current = resp.completed
            return db('tasks').where('id', id).first().update({completed: !current})
        })
}

module.exports = {
    getAll,
    getByProjectId,
    addTask,
    deleteTask,
    updateTask,
    toggleCompleted
}