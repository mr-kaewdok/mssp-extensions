chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.set({ loggedIn: false });
});

chrome.action.onClicked.addListener(() => {
    chrome.storage.sync.get('loggedIn', ({ loggedIn }) => {
        if (loggedIn) {
            chrome.action.setPopup({ popup: 'messages.html' });
        } else {
            chrome.action.setPopup({ popup: 'login.html' });
        }
    });
});