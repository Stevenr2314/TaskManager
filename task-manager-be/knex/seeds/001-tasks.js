/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('tasks').del()
  await knex('tasks').insert([
    {title: 'Seeded Task 1', description: 'The first seeded task'},
    {title: 'Seeded Task 2'},
    {title: 'Seeded Task 3', dueDate: 'Yesterday'}
  ]);
};
