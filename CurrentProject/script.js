const addMessage = document.querySelector('.message'),
    addButton = document.querySelector('.add'),
    todo = document.querySelector('.todo');

let todoList = [];



let displayToDo = () => {
    let displayMessage = '';

    todoList.forEach(function(item, i) {

        let checked = item.checked ? 'checked' : '';

        displayMessage += `
				<li>
					<input type='checkbox' id='item_${i}' ${checked}>
					<label for='item_${i}'>${item.todo}</label>
				</li>
				`;
    });
    todo.innerHTML = displayMessage;
};

if (localStorage.getItem('todo')) {
    todoList = JSON.parse(localStorage.getItem('todo'));
    displayToDo();
}

addButton.addEventListener('click', function() {
    let newTodo = {
        todo: addMessage.value,
        checked: false
    };
    todoList.push(newTodo);
    displayToDo();
    localStorage.setItem('todo', JSON.stringify(todoList));
});

todo.addEventListener('change', (event) => {
    console.log(event);
});