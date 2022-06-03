// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      database: 'task_manager',
      user:     'postgres',
      password: 'Paperz421'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_task_migrations'
    }
  },
};
