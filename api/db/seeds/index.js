const config = require('config');
const seed_users = require('./seed_users.js');

process.env.NODE_ENV = process.env.NODE_ENV || config.util.initParam('NODE_ENV', 'development');

(async () => {
  await seed_users()
    .then(() => process.exit())
})();
