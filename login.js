$(function () {
    $('#login-button').click(function () {
        const username = $('#username').val().trim();
        const password = $('#password').val().trim();

alert('Hello Exx');
        // Simple validation (you can expand this with actual authentication)
        if (username === 'user' && password === 'password') {
            
            // chrome.storage.sync.set({ loggedIn: true }, function () {
            //     window.location.href = 'messages.html';
            // });
            chrome.storage.sync.set({ loggedIn: true }, function() {
                chrome.action.setPopup({ popup: 'popup/messages.html' });
                window.location.href = 'popup/messages.html';
            });
        } else {
            alert('Invalid username or password');
        }
    });
});
