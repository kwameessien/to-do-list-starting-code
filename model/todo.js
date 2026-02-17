const pool = require('./database');

const create = (description) => pool.query(
  'INSERT INTO todo (description) VALUES ($1) RETURNING *',
  [description],
);

const get = () => pool.query('SELECT * FROM todo');

module.exports = { create, get };
