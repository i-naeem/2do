const todoDatabase = [];
const categoryDatabase = [];

const createTodo = todo => todoDatabase.push(todo);

const removeTodo = id => {
  todoDatabase = todoDatabase.filter(t => t.id !== id);
};

const updateTodo = todo => {
  const todoIndex = todoDatabase.findIndex(t => t.id === todo.id);
  todoDatabase[todoIndex] = todo;
};

const createCategory = ct => categoryDatabase.push(ct);

const removeCategory = id => {
  todoDatabase = todoDatabase.filter(c => c.id == id);
};

const updateCategory = (id, ct) => {
  const ctIndex = categoryDatabase.findIndex(c => c.id === id);
  categoryDatabase[ctIndex] = ct;
};

const getAllTodo = () => {};
const getAllCategories = () => {};
const getCategoryById = () => {};
const getTodoById = () => {};
