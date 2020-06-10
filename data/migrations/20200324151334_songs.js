exports.up = function(knex) {
  return knex.schema.createTable('songs', tbl => {
    tbl.increments();
    tbl.text('name', 128);
    tbl.text('spotify_id', 255);
    // new columns
    tbl.string('artist_name', 128);
    tbl.decimal('popularity', 128);
    tbl.decimal('acousticness', 128);
    tbl.decimal('danceability', 128);
    tbl.decimal('energy', 128);
    tbl.decimal('instrumentalness', 128);
    tbl.decimal('liveness', 128);
    tbl.decimal('loudness', 128);
    tbl.decimal('tempo', 128);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('songs');
};
