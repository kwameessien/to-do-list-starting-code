const formidable = require('formidable');
const { create: createTodo, get, remove } = require('../model/todo');

const create = (req, res) => {
  const form = formidable.IncomingForm();
  form.parse(req, async (err, fields) => {
    if (err) {
      res.statusCode = 500;
      res.end(JSON.stringify({ error: 'Failed to parse form' }));
      return;
    }
    const raw = fields.description;
    const description = Array.isArray(raw) ? raw[0] : raw;
    const isEmpty = !description
      || (typeof description === 'string' && !description.trim());
    if (isEmpty) {
      res.statusCode = 400;
      res.end(JSON.stringify({ error: 'Description is required' }));
      return;
    }
    try {
      await createTodo(description.trim());
      res.statusCode = 201;
      res.end(JSON.stringify({ message: 'Todo added successfully' }));
    } catch (e) {
      res.statusCode = 500;
      res.end(JSON.stringify({ error: 'Failed to add todo' }));
    }
  });
};

const read = async (req, res) => {
  try {
    const result = await get();
    res.statusCode = 200;
    res.end(JSON.stringify({ data: result.rows }));
  } catch (e) {
    res.statusCode = 500;
    res.end(JSON.stringify({ error: 'Failed to fetch todos' }));
  }
};

module.exports = {
  create, read, get, remove,
};
