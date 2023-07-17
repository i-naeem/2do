import db from './db.js';

const taskForm = document.getElementById('task-form');
const categoryForm = document.getElementById('category-form');
const taskUpdateForm = document.getElementById('task-update-form');

const taskInput = document.getElementById('task-input');
const allTodoList = document.getElementById('all-todo-list');

const categoryNameInput = document.getElementById('cid');
const categorySelector = document.getElementById('category-selector');

const taskUpdateInput = document.getElementById('task-update-input');

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
    
  `;

  const btnGroup = document.createElement('div');
  btnGroup.className = 'group';
  const editBtn = document.createElement('button');
  const doneBtn = document.createElement('button');
  const removeBtn = document.createElement('button');

  editBtn.innerText = 'Edit';
  editBtn.onclick = () => {
    onTaskEdit(todo.id);
  };

  doneBtn.innerText = 'Done';
  doneBtn.onclick = () => {
    onTaskDone(todo.id);
  };

  removeBtn.innerText = 'Remove';
  removeBtn.onclick = () => {
    onTaskRemove(todo.id);
  };

  [editBtn, doneBtn, removeBtn].forEach(b => btnGroup.appendChild(b));

  liItem.innerHTML = t;
  liItem.appendChild(btnGroup);
  allTodoList.appendChild(liItem);
}

function renderCategory(ct) {
  let option = document.createElement('option');
  option.value = ct.id;
  option.innerText = ct.name;
  categorySelector.appendChild(option);
}

function onTaskAdd(event) {
  event.preventDefault();
  const text = taskInput.value;
  const cid = categorySelector.value;
  const taskId = todoIdCounter++;

  db.createTodo({ text: text, id: taskId, categoryIds: [Number(cid)] });

  renderTodo({ text: text, id: taskId, categoryIds: [Number(cid)] });

  taskInput.value = '';
  categorySelector.value = '0';
}

function onTaskEdit(id) {
  const task = db.getTodoById(Number(id));
  taskForm.hidden = true;
  taskUpdateForm.hidden = false;

  taskUpdateInput.value = task.text;
  categorySelector.value = task.categoryIds[0];

  taskUpdateForm.onsubmit = event => {
    event.preventDefault();
    const text = taskUpdateInput.value;
    const cid = Number(categorySelector.value);
    db.updateTodo({ id: task.id, text: text, categoryIds: [cid] });
    allTodoList.innerHTML = '';
    const todoArray = db.getAllTodo();
    todoArray.forEach(renderTodo);
  };
}

function onCategoryAdd(event) {
  event.preventDefault();
  const cname = categoryNameInput.value;
  const cid = categoryIdCounter++;

  db.createCategory({ name: cname, id: cid });
  renderCategory({ name: cname, id: cid });

  categoryNameInput.value = '';
}

categoryForm.addEventListener('submit', onCategoryAdd);
taskForm.addEventListener('submit', onTaskAdd);
