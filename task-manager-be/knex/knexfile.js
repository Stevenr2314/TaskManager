require('dotenv').config()

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

  development: {
    client: 'pg',
    connection: 'postgresql://postgres:Paperz421@localhost:5433/task_manager',
    pool: {
      min: 2,
      max: 10
    },
    seeds: {
      directory: './seeds'
    }
  },
};
