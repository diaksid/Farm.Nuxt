const options = env => {return {
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    tableName: 'schema_migrations',
    directory: './api/db/migrations'
  },
  seeds: {
    directory: `./api/db/seeds`,
  }
}};

/*
client: 'postgresql',
  connection: {
  host : '127.0.0.1',
    database: '...',
    user: '...',
    password: '...'
},
*/

module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: './api/db/stage.sqlite3'
    },
    useNullAsDefault: true,
    ...options('development')
  },
  production: {
    client: 'sqlite3',
    connection: {
      filename: './api/db/stage.sqlite3'
    },
    useNullAsDefault: true,
    ...options('production')
  }
};
