const { Pool } = require('pg');

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST || 'localhost',
  database: process.env.DB_DATABASE || 'todo',
  password: process.env.DB_PASSWORD,
  port: (process.env.DB_PORT !== undefined && process.env.DB_PORT !== '')
    ? parseInt(process.env.DB_PORT, 10)
    : 5432,
});

module.exports = pool;
