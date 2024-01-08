const todoList = document.getElementById('todo-list');
const newTodoInput = document.getElementById('new-todo');

function addTodo() {
    const todoText = newTodoInput.value.trim();

    if (todoText == ''){
        alert("khali tahu naxoda!!!!!!");
    } else{
        const listItem = document.createElement('li');
        listItem.className = 'todo-item';
        listItem.innerHTML = `
            <span contenteditable="true">${todoText}</span>
            <div>
                <button class="edit-btn" onclick="editTodo(this)">Edit</button>
                <button class="delete-btn" onclick="removeTodo(this)">Delete</button>
            </div>
        `;
        todoList.appendChild(listItem);
        newTodoInput.value = '';
    }
}

function removeTodo(button) {
    const listItem = button.parentElement.parentElement;
    todoList.removeChild(listItem);
}

function editTodo(button) {
    const listItem = button.parentElement.parentElement;
    const todoTextElement = listItem.querySelector('span');
    const newText = prompt('Edit todo:', todoTextElement.textContent);

    if (newText !== null) {
        todoTextElement.textContent = newText;
    }
}
