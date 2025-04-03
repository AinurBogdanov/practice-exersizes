let todoList = JSON.parse(localStorage.getItem('TodoList')) || []; //где сохраняються todo листы 
 renderTodo();

function renderTodo() {
  let todoListHTML = ''; //нужно для сохранения html кода 

  todoList.forEach((todoObject, index) => {   
    const {name, dueDate} = todoObject;

      const html = `
        <div class="todo-item">${name}</div>
        <div>${dueDate}</div>
        <button
        class="del-btn js-del-btn"
        >del</button> 
        `;
        todoListHTML += html;       //добавление html в переменную при помощи конкатанации
  })

  localStorage.setItem('TodoList',JSON.stringify(todoList));

  document.querySelector('.js-todo-list')
  .innerHTML = todoListHTML;


   document.querySelectorAll('.js-del-btn')
    .forEach((deleteButton, index) => {
      deleteButton.addEventListener('click', () => {
        todoList.splice(index,1);
        renderTodo();
      })
    });
    
  }

document.querySelector('.js-add-todo-button')
.addEventListener('click',() => addTodo())



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