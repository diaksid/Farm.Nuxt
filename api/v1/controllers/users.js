const User = require('../../models/User');

module.exports = {
  users: async (ctx) => {
    ctx.body = await User.all().orderBy('id')
  },


  user: async (ctx) => {
    let id = parseInt(ctx.params.id);
    if (id >= 0) {
      ctx.body = await User.find(id)
    } else {
      ctx.status = 404
    }
  }
};
