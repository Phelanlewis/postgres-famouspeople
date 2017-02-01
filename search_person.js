const pg        = require("pg");
const settings  = require("./settings"); // settings.json
const selector  = process.argv[2];
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

knex.select().from('famous_people')
.asCallback(function(err, rows) {
  if (err) return console.error(err);
      console.log(rows);
    });



// client.connect((err) => {
//   if (err) {
//     return console.error("Connection Error", err);
//   }
//   client.query("SELECT * FROM famous_people WHERE last_name='" + selector + "'", (err, result) => {
//     if (err) {
//       return console.error("error running query", err);
//     }
//     const person = result.rows[0];
//     output(person.first_name, person.last_name, person.birthdate);
//     client.end();
//   });
// });
