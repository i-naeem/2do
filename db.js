let categoryDatabase = [
  {
    id: 0,
    name: 'No Category',
  },
  {
    id: 1,
    name: 'Twimm',
  },
  {
    id: 2,
    name: 'Dabtype',
  },
  {
    id: 3,
    name: 'Bubbletube',
  },
  {
    id: 4,
    name: 'Mita',
  },
];

let todoDatabase = [
  {
    id: 1,
    text: 'Phasellus sit amet erat.',
    categoryIds: [1, 2, 4],
  },
  {
    id: 2,
    text: 'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa.',
    categoryIds: [2, 3],
  },
];

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

// Getters
const getAllTodo = () => todoDatabase;
const getAllCategories = () => categoryDatabase;
const getTodoById = id => todoDatabase.find(t => t.id === id);
const getCategoryById = id => categoryDatabase.find(c => c.id === id);
const getAllTodoByCategory = cid => todoDatabase.filter(t => t.categoriesIds.contains(cid));

export default {
  getAllTodoByCategory,
  getAllCategories,
  getCategoryById,
  createCategory,
  removeCategory,
  updateCategory,
  getTodoById,
  createTodo,
  removeTodo,
  updateTodo,
  getAllTodo,
};
