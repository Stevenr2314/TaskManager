/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
require('dotenv').config()

module.exports = {

  development: {
    client: 'pg',
    connection: process.env.DATABASE_PATH,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: './knex/migrations'
    },
    seeds: {
      directory: './knex/seeds'
    }
  },
};
