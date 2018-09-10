exports.up = async knex => {
  return await knex.schema.createTable('users', table => {
    table.increments();
    table
      .string('email')
      .notNullable()
      .unique();
    table
      .string('encrypted_password')
      .notNullable();
    table
      .string('access_token')
      .notNullable()
      .unique();
    table
      .string('name')
      .defaultTo('');
    table
      .boolean('is_admin')
      .defaultTo(false);
    table
      .boolean('in_staff')
      .defaultTo(false);
    table
      .integer('sign_in_count')
      .defaultTo(0)
  })
};

exports.down = async knex => {
  return await knex.schema.dropTable('users')
};
