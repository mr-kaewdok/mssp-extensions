$(function () {
    const form = $('#mssp-form');
    const titleInput = $('#mssp-title');
    const descriptionInput = $('#mssp-description');
    const typeSelect = $('#mssp-type');
    const prioritySelect = $('#mssp-priority');
    const dateInput = $('#mssp-date');
    const viewListButton = $('#view-list');
    const submitButton = $('#submit-button');
    const backButton = $('#back-button');

    // $('.error').text('');
    $('#error-container').empty();

    dateInput.datepicker(); // Initialize the datepicker

    $('#mssp-form').on('submit', function (event) {
        event.preventDefault();
        $('#error-container').empty();
        if (titleInput.val() === '') {
            displayError('Please enter your title');
            return;
        }
        if (descriptionInput.val() === '') {
            displayError('Please enter your descript');
            return;
        }

        const messageData = {
            title: titleInput.val().trim(),
            description: descriptionInput.val().trim(),
            priority: prioritySelect.val(),
            type: typeSelect.val(),
            date: dateInput.val()
        };
        console.log('#Data:', messageData)
        if (messageData.title && messageData.description) {
            saveTodoToStorage(messageData);
            titleInput.val('');
            descriptionInput.val('');
            prioritySelect.val('low');
            dateInput.val('');
        }
    });

    viewListButton.on('click', function () {
        window.location.href = 'list.html';
    });

    backButton.on('click', function () {
        window.location.href = 'messages.html';
    });

    function saveTodoToStorage(todo) {
        chrome.storage.sync.get('todos', function (data) {
            const todos = data.todos || [];
            todos.push(todo);
            chrome.storage.sync.set({ todos: todos });
        });
    }

    function displayError(message) {
        const errorIcon = '<img src="assets/mark.png" alt="Error" class="error-icon">';
        $('#error-container').append(`<div class="error-message">${errorIcon} ${message}</div>`);
    }
});
