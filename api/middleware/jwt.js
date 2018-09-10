const jsonwebtoken = require('jsonwebtoken');

module.exports = (opts = {}) => {
  const secret = opts.secret;

  function getJwtToken(ctx) {
    if (!ctx.header || !ctx.header.authorization) {
      return
    }
    const parts = ctx.header.authorization.split(' ');
    if (parts.length === 2) {
      const scheme = parts[0];
      const credentials = parts[1];
      if (/^Bearer$/i.test(scheme)) {
        return credentials
      }
    }
    return ctx.throw(401, 'AUTHENTICATION_ERROR')
  }

  return async function jwt(ctx, next) {
    if (!secret) ctx.throw(401, 'INVALID_SECRET')

    const token = getJwtToken(ctx)

    try {
      const decoded = await jsonwebtoken.verify(
        token,
        process.env.JWT_SECRET
      );
      ctx.state.user = decoded.data
    } catch (error) {
      if (error.name === 'TokenExpiredError') {
        ctx.throw(401, 'TOKEN_EXPIRED')
      } else {
        ctx.throw(401, 'AUTHENTICATION_ERROR')
      }
    }

    return next()
  }
};
