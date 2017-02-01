const pg        = require("pg");
const settings  = require("./settings"); // settings.json
const knex      = require('knex')({
  client: 'pg',
  connection: {
  user     : settings.user,
  password : settings.password,
  database : settings.database,
  host     : settings.hostname,
  port     : settings.port,
  ssl      : settings.ssl
  }
});

const first_name  = process.argv[2];
const last_name   = process.argv[3];

knex('famous_people').insert({first_name: 'first_name', last_name: 'last_name', birthdate: new Date()})
.asCallback(function(err, rows) {
  if (err) return console.error(err);
      console.log(rows);
      return rows;
    });
