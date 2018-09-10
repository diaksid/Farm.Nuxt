const bcrypt = require('bcrypt');
const User = require('../../models/User');


module.exports = {
  login: async ctx => {
    const body = ctx.request.body;
    await User.find_by({email: body.email}, 'encrypted_password', 'access_token')
      .then(async ([user]) =>
        await bcrypt.compare(
          body.password,
          user.encrypted_password
        )
          .then(res => {
            if (res) {
              ctx.body = {token: user.access_token}
            } else {
              ctx.throw(404)
            }
          })
      )
  },


  logout: ctx => {
    ctx.body = {
      action: 'logout'
    }
  },


  user: async ctx => {
    if (!ctx.header || !ctx.header.authorization) {
      return
    }
    const parts = ctx.header.authorization.split(' ');
    if (parts.length === 2) {
      const scheme = parts[0];
      const credentials = parts[1];
      if (/^Bearer$/i.test(scheme)) {
        return await User.find_by({access_token: credentials})
          .then(([user]) => ctx.body = {user: user})
      }
    }
    ctx.throw(401, 'AUTHENTICATION_ERROR')
  }
};
