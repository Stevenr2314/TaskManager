const knex = require('knex')

const config = {
    client: 'sqlite3',
    connection: {
      filename: '',
    },
    useNullAsDefault: true,
  };
  
  module.exports = knex(config);