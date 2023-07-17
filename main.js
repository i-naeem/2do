import db from './db.js';

const categoryList = document.getElementById('ctl');
const taskForm = document.getElementById('task-form');
const allTodoList = document.getElementById('all-todo-list');
const categoryForm = document.getElementById('category-form');
const categorySelector = document.getElementById('category-selector');

const allTodo = db.getAllTodo();
const allCategories = db.getAllCategories();

function renderCategories(categories) {
  categories.forEach(ct => {
    let option = document.createElement('option');
    option.value = ct.id;
    option.innerText = ct.name;
    categorySelector.appendChild(option);
  });
}

function renderTodo(todoArray) {
  todoArray.forEach(todo => {
    const cts = todo.categoryIds.map(cid => {
      const ct = db.getCategoryById(cid);
      return `<span>${ct}</span>`;
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
  });
}

renderCategories(allCategories);
renderTodo(allTodo);
