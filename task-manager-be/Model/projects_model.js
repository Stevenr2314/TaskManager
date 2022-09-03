const db = require('../knex/db')

function getAllFromUserID(id) {
    return db('projects').where('user_id', id)
}

function addProject(project) {
    return db('projects').insert(project)
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
    getAllFromUserID,
    addProject,
    deleteProject,
    updateProject
}