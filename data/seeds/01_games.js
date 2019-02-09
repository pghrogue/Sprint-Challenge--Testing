
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('games').del()
    .then(function () {
      // Inserts seed entries
      return knex('games').insert([
        { id: 1, title: 'Pacman', genre: 'Arcade', releaseYear: 1980 },
        { id: 2, title: 'Super Mario Bros', genre: 'Platform', releaseYear: 1985 },
        { id: 3, title: 'Pong', genre: 'Arcade', releaseYear: 1972 }
      ]);
    });
};
