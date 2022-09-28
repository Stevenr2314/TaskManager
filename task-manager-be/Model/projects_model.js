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

function deleteProject(id) {
    return db('projects').where('id', id).first().del()
        .then(resp => console.log(resp))
}

function toggleArchived(id) {
    return db('projects').where('id', id).first()
        .then(resp => {
            const current = resp.archived
            return db('projects').where('id', id).first().update({archived: !current})
    })
}

module.exports = {
    getAllFromUserID,
    addProject,
    deleteProject,
    updateProject,
    toggleArchived
}