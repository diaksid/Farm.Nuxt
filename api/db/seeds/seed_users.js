const User = require('../../models/User');
const users = [
  {
    email: 'admin@test.test',
    password: '+1234567',
    name: 'Admin'
  },
  {
    email: 'manager@test.test',
    password: '+1234567',
    name: 'Manager'
  },
  {
    email: 'user@test.test',
    password: '+1234567',
    name: 'User'
  }
];


module.exports = async () => {
  for (data of users) {
    await (new User(data)).insert()
  }
};
