$(function () {
    const todoList = $('#todo-list');
    const backButton = $('#back-button');
    const addButton = $('#add-button');

    // Load saved todos from chrome storage
    chrome.storage.sync.get('todos', function (data) {
        if (data.todos) {
            data.todos.forEach(addTodoToList);
        }
    });

    // Add todo to list
    function addTodoToList(todo) {
        const listItem = $('<li></li>');
        listItem.text(`${todo.title} - ${todo.description} [${todo.priority}] Due: ${todo.date}`);
        todoList.append(listItem);
    }

    // Navigate back to the form
    backButton.on('click', function () {
        window.location.href = 'popup.html';
    });

    // Navigate back to the form
    addButton.on('click', function () {
        window.location.href = 'compose.html';
    });
});
