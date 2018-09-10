module.exports = async (ctx, next) => {
  if (ctx.request.get('X-Requested-With') === 'XMLHttpRequest') {
    await next()
  }else {
    ctx.throw(400)
  }
};
