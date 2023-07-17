const todoDatabase = [];
const categoryDatabase = [];

const createTodo = todo => todoDatabase.push(todo);
const updateTodo = todo => {
  const todoIndex = todoDatabase.findIndex(t => t.id === todo.id);
  todoDatabase[todoIndex] = todo;
};

const removeTodo = id => {};
const addTodo = todo => {};

const createCategory = () => {};
const removeCategory = () => {};
const addCategory = category => {};
const updateCategory = (id, category) => {};

const getAllTodo = () => {};
const getAllCategories = () => {};
const getCategoryById = () => {};
const getTodoById = () => {};
