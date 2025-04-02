const todoList = [{
    name: 'make diner',
    dueDate: '20-21-12-22'
  }, {
    name: 'wash dishes',
    dueDate: '20-21-12-22'
  }
];
  

renderTodoList();

  function renderTodoList() {
    let todoListHTML = ""

      for (let i = 0; i < todoList.length; i++) {
        const todoObject = todoList[i];
        const { name , dueDate } = todoObject;
        const html = `
          <div>${name}</div>
          <div>${dueDate}</div>
          <button 
          class="delete-button"
          onclick="
            todoList.splice(${i},1);
            renderTodoList();
          " 
          >Delete</button>`;

        todoListHTML += html;
      }

      document.querySelector('.js-todo-list')
        .innerHTML = todoListHTML;
  }

  function addTodo() {

    const inputEl = document.querySelector('.js-name-input')
    const dateInputElement = document.querySelector('.js-due-date-input')
    
    const name = inputEl.value;
    const dueDate = dateInputElement.value;

    todoList.push({
      name,   // short hend 
      dueDate
    });

    inputEl.value = "";

    renderTodoList();
  }

