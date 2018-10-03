const sequelize = require('sequelize');
const user = process.env.pguser || 'Kevin';
const pass = process.env.pgpass || '';
const host = process.env.pghost || 'localhost';


const db = new sequelize('yelp', user, pass, {
  host: host,
  dialect: 'postgres',
})

db.authenticate()
.then(() => {
  console.log('Database has been established successfully');
  // const schema = require('./sql/schema'); //create tables
})
.catch(err => {
  console.log('Unable to connect to database: ', err);
})

module.exports = {
  db
}

