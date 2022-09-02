/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('users').del()
  await knex('users').insert([
    {username: 'TestUser1', email: 'testingUser1@email.com', password: 'password'},
    {username: 'TestUser2', email: 'testingUser2@email.com', password: 'password2'}
  ]);
};
