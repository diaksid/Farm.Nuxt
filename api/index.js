const Koa = require('koa');
const logger = require('koa-logger');
const koaBody = require('koa-body');
const error = require('./middleware/error');
const xhr = require('./middleware/xhr');
const routing = require('./v1/routes');

const app = new Koa();

app
  .use(logger())
  .use(koaBody({
    jsonLimit: '1kb'
  }));

app
  .use(error)
  .use(xhr)
  .use(routing.routes())
  .use(routing.allowedMethods());

module.exports = {
  path: '/api/v1',
  handler: app.callback()
};
