
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('values').del().truncate()
    .then(function () {
      // Inserts seed entries
      return knex('values').insert([
        {
          name: "Athletic Ability"
        },
        {
          name: "Art & Literature"
        },
        {
          name: "Creativity, discovering, or inventing"
        },
        {
          name: "Independence"
        },
        {
          name: "Kindness & generosity"
        },
        {
          name: "Living in the moment"
        },
        {
          name: "Membership in a social group"
        },
        {
          name: "Music"
        },
        {
          name: "My community"
        },
        {
          name: "My moral principles"
        },
        {
          name: "Nature and environment"
        }
      ]);
    });
};
