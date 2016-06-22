
exports.up = function(knex, Promise) {

  return Promise.all([
  	knex.schema.createTableIfNotExists('users', function(table) {
  	  table.increments('id').primary();
  	  table.boolean('admin');
  	  table.string('email')
           .unique();
  	  table.string('password');
  	  table.timestamps();
  	}),

    knex.schema.createTableIfNotExists('tokens', function(table) {
      table.increments('id').primary();
      table.string('token');
      table.timestamps();
    }),

  	knex.schema.createTableIfNotExists('events', function(table) {
  		table.increments('id').primary();
  		table.string('title');
  		table.string('image');
  		table.string('registrationDoc');
  		table.string('registrationInstructions');
  		table.string('price');
  		table.string('startDate');
  		table.string('endDate');
  		table.string('startTime');
  		table.string('endTime');
  		table.boolean('allDay');
  		table.boolean('featured');
  		table.string('location');
  		table.string('description');
  		table.timestamps();
  	}),

  	knex.schema.createTableIfNotExists('eventNotes', function(table) {
  		table.increments('id').primary();
  		table.integer('event_id')
  		     .references('id')
  		     .inTable('events');
  		table.integer('order');
  		table.string('title');
  		table.string('text');
  		table.string('link');
  		table.string('linkDescription');
  	}),

  	knex.schema.createTableIfNotExists('bio', function(table) {
  		table.increments('id').primary();
  		table.string('text');
  		table.integer('order');
  		table.timestamps();
  	}),

  	knex.schema.createTableIfNotExists('cds', function(table) {
  		table.increments('id').primary();
  		table.string('name');
  		table.string('image');
  		table.string('price');
  		table.boolean('available');
  		table.integer('order');
  		table.string('link');
  		table.timestamps();
  	}),

  	knex.schema.createTableIfNotExists('songs', function(table) {
  		table.increments('id').primary();
  		table.string('name');
  		table.string('origin');
  		table.string('artist');
  		table.string('production');
  		table.timestamps();
  	}),

  	knex.schema.createTableIfNotExists('cds_songs', function(table) {
  		table.increments('id').primary();
  		table.integer('cd_id')
  		     .references('id')
  		     .inTable('cds');
  		table.integer('song_id')
  		     .references('id')
  		     .inTable('songs');
  		table.integer('track');
  		table.timestamps();
  	}),

  	knex.schema.createTableIfNotExists('artists', function(table) {
  		table.increments('id').primary();
  		table.string('name');
  		table.timestamps();
  	}),

  	knex.schema.createTableIfNotExists('cds_artists', function(table) {
  		table.increments('id').primary();
  		table.integer('cd_id')
  		     .references('id')
  		     .inTable('cds');
  		table.integer('artist_id')
  		     .references('id')
  		     .inTable('artists');
  		table.integer('order');
  		table.string('role');
  		table.timestamps();
  	}),

  	knex.schema.createTableIfNotExists('lessonsText', function(table) {
  		table.increments('id').primary();
  		table.string('title');
  		table.string('text');
  	}),

  	knex.schema.createTableIfNotExists('lessons', function(table) {
  		table.increments('id').primary();
  		table.integer('minutes');
  		table.decimal('price'); //decimals default to scale of 2
  		table.string('url');
  	}),

  	knex.schema.createTableIfNotExists('contactInfo', function(table) {
  		table.increments('id').primary();
  		table.string('type');
  		table.string('value');
  		table.string('notes');
  	})
  ])

};

exports.down = function(knex, Promise) {
  return Promise.all([
  	knex.schema.dropTable('contactInfo'),
  	knex.schema.dropTable('lessons'),
  	knex.schema.dropTable('lessonsText'),
  	knex.schema.dropTable('cds_artists'),
  	knex.schema.dropTable('artists'),
  	knex.schema.dropTable('cds_songs'),
  	knex.schema.dropTable('songs'),
  	knex.schema.dropTable('cds'),
  	knex.schema.dropTable('bio'),
  	knex.schema.dropTable('eventNotes'),
  	knex.schema.dropTable('events'),
    knex.schema.dropTable('tokens'),
  	knex.schema.dropTable('users')
  ])
};
