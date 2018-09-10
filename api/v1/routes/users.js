const Router = require('koa-router');
const controller = require('../controllers/users');

const router = new Router();

module.exports = router
  .get('/', controller.users)
  .get('/:id', controller.user);
