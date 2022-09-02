const db = require('../knex/db')

function getAll() {
    return db('projects')
}

function addProject(project) {
    return db('projects').insert(project)
        .then(resp => console.log(resp))
}

function updateProject({form}) {
    return db('projects').where('id', form.id).first()
        .update(form)
        .then(resp => console.log(resp))
        .catch(err => console.log(err))
}

function deleteProject(project) {
    return db('projects').where('id', project.id).first().del()
        .then(resp => console.log(resp))
}

module.exports = {
    getAll,
    addProject,
    deleteProject,
    updateProject
}