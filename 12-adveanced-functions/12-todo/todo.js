let todoList = JSON.parse(localStorage.getItem('TodoList')) || []; //где сохраняються todo листы 
 renderTodo();

function renderTodo() {
  let todoListHTML = ''; //нужно для сохранения html кода 

  todoList.forEach(function(todoObject, index) {   
    const {name, dueDate} = todoObject;

      const html = `
        <div class="todo-item">${name}</div>
        <div>${dueDate}</div>
        <button
        class="del-btn"
        onclick= "
        todoList.splice(${index},1);
        renderTodo();
        ">del</button> 
        `;
        todoListHTML += html;       //добавление html в переменную при помощи конкатанации
  })

  localStorage.setItem('TodoList',JSON.stringify(todoList));

  document.querySelector('.js-todo-list')
  .innerHTML = todoListHTML;
}



function addTodo() {
  
  let inputNameElement = document.querySelector('.js-input');
  let inputDateElement = document.querySelector('.js-date');
  const name = inputNameElement.value;
  const dueDate = inputDateElement.value

  todoList.push({
     name,
     dueDate
    })

    renderTodo();
    
    inputNameElement.value = '';
    inputDateElement.value = ''; 

  localStorage.setItem('TodoList',JSON.stringify(todoList))
}