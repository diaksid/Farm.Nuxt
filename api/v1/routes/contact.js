const Router = require('koa-router');
const controller = require('../controllers/contact');

const router = new Router();

module.exports = router
  .get('/', controller.test)
  .put('/', controller.deliver);
