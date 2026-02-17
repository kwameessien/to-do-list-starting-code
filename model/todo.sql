-- Run against todo database: psql -U postgres -d todo -f model/todo.sql
-- Or execute programmatically after connecting to the todo database
CREATE TABLE todo(
    todo_id SERIAL PRIMARY KEY,
    description VARCHAR(255) NOT NULL
);
