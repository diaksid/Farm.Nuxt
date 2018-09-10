const Router = require('koa-router');
const auth = require('./auth');
const contact = require('./contact');
const users = require('./users');

const router = new Router();

module.exports = router
  .get('/', (ctx) => {
    ctx.body = 'DAkS API'
  })
  .use('/auth', auth.routes(), auth.allowedMethods())
  .use('/contact', contact.routes(), contact.allowedMethods())
  .use('/users', users.routes(), users.allowedMethods());
