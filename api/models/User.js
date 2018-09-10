const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const moment = require('moment');
const config = require('config');
const knex = require('../db');


class User {
  constructor (data) {
    for (let key in data) {
      if (data.hasOwnProperty(key)) {
        this[key] = data[key]
      }
    }
  }

  async encrypt () {
    if (this.password) {
      await bcrypt.hash(this.password, 10)
        .then(hash => {
          this.encrypted_password = hash;
          delete this.password
        })
    }
    return this
  }

  async validate () {
    this.access_token = this.access_token || jwt.sign({
      exp: moment().utc().add({days: 7}).unix(),
      email: this.email
    }, config.get('jwt.secret'));
    await this.encrypt()
      .then(async () =>
        await User.info()
          .then(info => {
            for (let key in this) {
              if (this.hasOwnProperty(key) && !info.hasOwnProperty(key)) {
                delete this[key]
              }
            }
          })
      );
    return this
  }


  async insert () {
    await this.validate()
      .then(async () =>
        await knex('users').insert(this)
          .then(res => this.id = Array.isArray(res) ? res[0] : res)
      );
    return this
  }


  async read (id) {
    await User.find(id, '*')
      .then(([model]) => {
        if (model) {
          for (let key in model) {
            if (model.hasOwnProperty(key)) {
              this[key] = model[key]
            }
          }
        } else {
          throw `USER: id[${id}] not found`
        }
      });
    return this
  }


  async save () {
    await this.validate()
      .then(async () =>
        await User.find(this.id).update(this)
      );
    return this
  }


  async update (data) {
    for (let key in data) {
      if (data.hasOwnProperty(key)) {
        this[key] = data[key]
      }
    }
    return await this.validate()
  }


  async delete () {
    await User.find(this.id).del();
    return this
  }


  static get selection () {
    return ['id', 'email', 'name', 'is_admin', 'in_staff']
  }


  static info () {
    return knex('users').columnInfo()
  }


  static delete () {
    return knex('users').del()
  }


  static all (...selection) {
    selection = selection.length && selection || this.selection;
    return knex('users').select(...selection)
  }


  static find (id, ...selection) {
    selection = selection.length && selection || this.selection;
    return knex('users')
      .select(...selection)
      .where({id: id})
  }


  static find_by (conditions, ...selection) {
    selection = selection.length && selection || this.selection;
    return knex('users')
      .select(...selection)
      .where(conditions)
  }
}


module.exports = User;
