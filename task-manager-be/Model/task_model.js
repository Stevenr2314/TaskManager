const db = require('../knex/db')

const getAll = () => {
    return db('tasks')
}

module.exports = {
    getAll
}