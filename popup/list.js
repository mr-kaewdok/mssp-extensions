$(function () {
    chrome.storage.sync.get(['loggedIn'], function (result) {
        if (!result.loggedIn) {
            window.location.href = 'popup/login.html';
        }
    });

    const todoList = $('#todo-list');
    const backButton = $('#back-button');
    const addButton = $('#add-button');

    const messageList = $('#table-list')
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
        // todoList.append(listItem);

        const rowItem = `<tr><td>${todo.priority}</td><td>${todo.title}</td><td>-</td><td>${todo.date}</td></tr>`;
        messageList.append(rowItem);
        // $('#table-list').append(`<tr><td>${todo.priority}</td><td>${todo.title}</td></tr>`);
        // $('#table-list tr:last').after(rowItem);
    }

    // Remove todo from Chrome storage
    function removeTodoFromStorage(todoText) {
        chrome.storage.sync.get(['todos'], function (result) {
            let todos = result.todos || [];
            todos = todos.filter(todo => todo.text !== todoText);
            chrome.storage.sync.set({ todos: todos });
        });
    }

    // Navigate back to the form
    backButton.on('click', function () {
        window.location.href = 'messages.html';
    });

    // Navigate back to the form
    addButton.on('click', function () {
        window.location.href = 'compose.html';
    });
});
