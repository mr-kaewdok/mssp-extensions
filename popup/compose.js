$function(){
    alert('aaa');
}
// document.addEventListener('DOMContentLoaded', function () {
//     const form = document.getElementById('compose-form');
//     const input = document.getElementById('msg-title');
//     const todoList = document.getElementById('notification-list');

//     // Load saved todos from chrome storage
//     chrome.storage.sync.get('todos', function (data) {
//         if (data.todos) {
//             data.todos.forEach(addTodoToList);
//         }
//     });

//     form.addEventListener('submit', function (event) {
//         event.preventDefault();
//         const todoText = input.value.trim();
//         if (todoText) {
//             addTodoToList(todoText);
//             saveTodoToStorage(todoText);
//             input.value = '';
//         }
//     });

//     function addTodoToList(todoText) {
//         const li = document.createElement('li');
//         li.textContent = todoText;
//         const removeButton = document.createElement('button');
//         removeButton.textContent = 'Remove';
//         removeButton.addEventListener('click', function () {
//             todoList.removeChild(li);
//             removeTodoFromStorage(todoText);
//         });
//         li.appendChild(removeButton);
//         todoList.appendChild(li);
//     }

//     function saveTodoToStorage(todoText) {
//         chrome.storage.sync.get('todos', function (data) {
//             const todos = data.todos || [];
//             todos.push(todoText);
//             chrome.storage.sync.set({ todos: todos });
//         });
//     }

//     function removeTodoFromStorage(todoText) {
//         chrome.storage.sync.get('todos', function (data) {
//             const todos = data.todos || [];
//             const updatedTodos = todos.filter(todo => todo !== todoText);
//             chrome.storage.sync.set({ todos: updatedTodos });
//         });
//     }
// });
