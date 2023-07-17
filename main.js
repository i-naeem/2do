import db from './db.js';

const categoryList = document.getElementById('ctl');
const taskForm = document.getElementById('task-form');
const allTodoList = document.getElementById('all-todo-list');

const categoryNameInput = document.getElementById('cid');
const categoryForm = document.getElementById('category-form');
const categorySelector = document.getElementById('category-selector');

const allTodo = db.getAllTodo();
const allCategories = db.getAllCategories();

let todoIdCounter = allTodo.length + 1;
let categoryIdCounter = allCategories.length + 1;

allCategories.forEach(renderCategory);
allTodo.forEach(renderTodo);

function renderTodo(todo) {
  const cts = todo.categoryIds.map(cid => {
    const ct = db.getCategoryById(cid);
    return `<span>${ct.name}</span> `;
  });

  const liItem = document.createElement('li');
  liItem.id = todo.id;
  const t = `
    <p>${todo.text}</p>
    <div class="group">${cts.join(' ')}</div>
    <div class="group">
      <button id="done-btn">Done</button>
      <button id="edit-btn">Edit</button>
      <button id="remove-btn">Remove</button>
    </div>
  `;

  liItem.innerHTML = t;
  allTodoList.appendChild(liItem);
}
function renderCategory(ct) {
  let option = document.createElement('option');
  option.value = ct.id;
  option.innerText = ct.name;
  categorySelector.appendChild(option);
}

const onTaskAdd = event => {
  event.preventDefault();
  const fd = new FormData(taskForm);
  const text = fd.get('task-input');
  const cid = fd.get('category-selector');
  const taskId = todoIdCounter++;

  db.createTodo({ text: text, id: taskId, categoryIds: [Number(cid)] });

  renderTodo({ text: text, id: taskId, categoryIds: [Number(cid)] });
};

const onTaskRemove = () => {};
const onTaskUpdated = () => {};

const onCategoryAdd = event => {
  event.preventDefault();
  const cname = categoryNameInput.value;
  const cid = categoryIdCounter++;

  db.createCategory({ name: cname, id: cid });
  renderCategory({ name: cname, id: cid });

  categoryNameInput.value = '';
};

categoryForm.addEventListener('submit', onCategoryAdd);
taskForm.addEventListener('submit', onTaskAdd);
