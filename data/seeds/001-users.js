
// dependencies
const bcrypt = require('bcrypt');

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del().truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          first_name: "Bob",
          last_name: "Bobberton",
          email: "bob@gmail.com",
          password: bcrypt.hashSync('password', 12)
        },
        {
          first_name: "Tom",
          last_name: "Tommerton",
          email: "tom@gmail.com",
          password: bcrypt.hashSync('password', 12)
        },
        {
          first_name: "Steve",
          last_name: "Steverrton",
          email: "steve@gmail.com",
          password: bcrypt.hashSync('password', 12)
        }
      ]);
    });
};

