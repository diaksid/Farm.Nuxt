const Router = require('koa-router');
const controller = require('../controllers/auth');

const router = new Router();

module.exports = router
  .post('/login', controller.login)
  .post('/logout', controller.logout)
  .get('/user', controller.user);
