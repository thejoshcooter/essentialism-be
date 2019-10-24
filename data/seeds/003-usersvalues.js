
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users_values').del().truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users_values').insert([
        {
          user_id: 1,
          value_id: 11
        },{
          user_id: 1,
          value_id: 10
        },
        {
          user_id: 1,
          value_id: 9
        },
        {
          user_id: 1,
          value_id: 8
        },
        {
          user_id: 1,
          value_id: 7
        },
        {
          user_id: 2,
          value_id: 11
        },
        {
          user_id: 2,
          value_id: 11
        },
        {
          user_id: 2,
          value_id: 11
        },
        {
          user_id: 2,
          value_id: 11
        },
        {
          user_id: 3,
          value_id: 1
        },
        {
          user_id: 3,
          value_id: 2
        },
        {
          user_id: 3,
          value_id: 3
        },
        {
          user_id: 3,
          value_id: 4
        },
        {
          user_id: 3,
          value_id: 5
        },

      ]);
    });
};
