const path = require('path');

module.exports = {
  // For the sake of the example only, please use env vars
  storage: path.join(__dirname,'../db/db/database.sqlite'),
  dialect: 'sqlite',
  dialectOptions: {
    ssl: false,
  },
  pool: {
    max: 15,
    min: 0,
    acquire: 10000,
    idle: 1000,
  },
}
