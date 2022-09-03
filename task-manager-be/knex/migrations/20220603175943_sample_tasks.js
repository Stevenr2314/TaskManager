/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema
  .createTable('users', table => {
    table.increments('id')
    table.string('username').unique().notNullable()
    table.string('email').unique().notNullable()
    table.string('password').notNullable()
    table.timestamp('created_at').defaultTo(knex.raw('CURRENT_TIMESTAMP'));
  })
  .createTable('projects', table => {
    table.increments('id')
    table.string('name').notNullable()
    table.string('description')
    table.timestamp('created_at').defaultTo(knex.raw('CURRENT_TIMESTAMP'));
    table.integer('user_id')
      .references('users.id').onDelete('CASCADE')
    table.boolean('archived').defaultTo('false')
  })
  .createTable('tasks', table => {
    table.increments('id')
    table.string('title').notNullable()
    table.string('description')
    table.string('dueDate')
    table.timestamp('created_at').defaultTo(knex.raw('CURRENT_TIMESTAMP'));
    table.integer('project_id')
      .references('projects.id').onDelete('CASCADE')
    table.boolean('completed').defaultTo(false)
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema
    .dropTable('tasks')
    .dropTable('projects')
    .dropTable('users')
};
