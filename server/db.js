const Pool = require("pg").Pool;
const pool = new Pool({
  user: "postgres",
  password: "25061991",
  host: "localhost",
  port: 5432,
  database: "test1_db"
});


module.exports = pool;
