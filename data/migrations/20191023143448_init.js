
exports.up = function(knex) {
  return knex.schema
    .createTable('users', tbl => {
        tbl.increments();

        tbl.string('first_name', 128)
            .notNullable();

        tbl.string('last_name', 128)
            .notNullable();

        tbl.string('email', 128)
            .unique()
            .notNullable();

        tbl.string('password', 128)
            .notNullable();

    })
    .createTable('values', tbl => {
        tbl.increments();

        tbl.string('name', 256)
            .notNullable();
    })
    .createTable('users_values', tbl => {
        tbl.integer('user_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('users')
            .onUpdate('CASCADE')
            .onDelete('CASCADE')

        tbl.integer('value_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('values')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
    })
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('users_values')
        .dropTableIfExists('values')
        .dropTableIfExists('users')
};
