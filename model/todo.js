const pool = require('./database');

const create = (description) => pool.query(
  'INSERT INTO todo (description) VALUES ($1) RETURNING *',
  [description],
);

module.exports = { create };
