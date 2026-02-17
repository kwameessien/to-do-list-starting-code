export const createTodo = async (todo) => {
  const formData = new FormData();
  formData.append('description', todo.description);

  const response = await fetch('/api/todo/create', {
    method: 'POST',
    body: formData,
  });

  return response;
};
