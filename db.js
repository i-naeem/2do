const categoryDatabase = [
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
  {
    id: 5,
    name: 'Voonte',
  },
  {
    id: 6,
    name: 'Trunyx',
  },
  {
    id: 7,
    name: 'Wikido',
  },
  {
    id: 8,
    name: 'Thoughtmix',
  },
  {
    id: 9,
    name: 'Brightbean',
  },
  {
    id: 10,
    name: 'Buzzbean',
  },
];
const todoDatabase = [
  {
    id: 1,
    text: 'Phasellus sit amet erat.',
    categoryIds: [7, 9, 5],
  },
  {
    id: 2,
    text: 'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa.',
    categoryIds: [],
  },
  {
    id: 3,
    text: 'Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat.',
    categoryIds: [10, 6],
  },
  {
    id: 4,
    text: 'Suspendisse potenti.',
    categoryIds: [8, 10],
  },
  {
    id: 5,
    text: 'Quisque ut erat.',
    categoryIds: [2, 1, 9],
  },
  {
    id: 6,
    text: 'Aliquam erat volutpat.',
    categoryIds: [3],
  },
  {
    id: 7,
    text: 'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst.',
    categoryIds: [6, 8, 9],
  },
  {
    id: 8,
    text: 'Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula.',
    categoryIds: [10, 9],
  },
  {
    id: 9,
    text: 'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl.',
    categoryIds: [],
  },
  {
    id: 10,
    text: 'Donec posuere metus vitae ipsum. Aliquam non mauris.',
    categoryIds: [3],
  },
  {
    id: 11,
    text: 'Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.',
    categoryIds: [5],
  },
  {
    id: 12,
    text: 'Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti.',
    categoryIds: [2, 8, 1],
  },
  {
    id: 13,
    text: 'Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl.',
    categoryIds: [2],
  },
  {
    id: 14,
    text: 'Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo.',
    categoryIds: [1, 4],
  },
  {
    id: 15,
    text: 'In quis justo. Maecenas rhoncus aliquam lacus.',
    categoryIds: [2],
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
