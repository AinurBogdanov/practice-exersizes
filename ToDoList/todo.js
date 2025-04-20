let todoList = JSON.parse(localStorage.getItem('TodoList')) || []; //где сохраняються todo листы 
 renderTodo();

function renderTodo() {
  let todoListHTML = ''; //нужно для сохранения html кода 

for(let i = 0;i < todoList.length; i++) {
  const todoName = todoList[i].name;
  const todoDate = todoList[i].date;

  const html = `
    <div class="todo-item">${todoName}</div>
    <div>${todoDate}</div>
    <button
    class="del-btn"
    onclick= "
    todoList.splice(${i},1);
    renderTodo();
    ">del</button> 
    `;
    todoListHTML += html;       //добавление html в переменную при помощи конкатанации
  }
  localStorage.setItem('TodoList',JSON.stringify(todoList));

  document.querySelector('.js-todo-list')
  .innerHTML = todoListHTML;
}

function addTodo() {
  
  let inputNameElement = document.querySelector('.js-input');
  let inputDateElement = document.querySelector('.js-date');
  const name = inputNameElement.value;
  const date = inputDateElement.value

  todoList.push({
     name,
     date
    })

    renderTodo();
    
    inputNameElement.value = '';
    inputDateElement.value = ''; 

  localStorage.setItem('TodoList',JSON.stringify(todoList))
}