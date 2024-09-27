document.addEventListener('DOMContentLoaded', function() {
    const savedTabName = localStorage.getItem('tabName');
    const savedIconURL = localStorage.getItem('iconURL');
    const savedPanicKey = localStorage.getItem('panicKey');
    const savedPanicURL = localStorage.getItem('panicURL');

    if (savedTabName) {
        document.getElementById('tab-name-input').value = savedTabName;
        document.title = savedTabName; // Update the document title
    }
    if (savedIconURL) {
        document.getElementById('icon-url-input').value = savedIconURL;
        document.getElementById('dynamic-favicon').href = savedIconURL; // Update the favicon
    }
    if (savedPanicKey) {
        document.querySelector('.set-panic-key-box').value = savedPanicKey;
    }
    if (savedPanicURL) {
        document.querySelector('.set-panic-url-box').value = savedPanicURL;
    }

    // Set panic key functionality
    document.getElementById('set-panic-key').addEventListener('click', function(event) {
        event.preventDefault();
        const panicKey = document.querySelector('.set-panic-key-box').value;
        localStorage.setItem('panicKey', panicKey); // Save to localStorage
        console.log('Panic Key Set:', panicKey);
    });

    document.addEventListener('keydown', function(event) {
        const panicKey = localStorage.getItem('panicKey');
        if (event.key === panicKey) {
            const panicURL = localStorage.getItem('panicURL');
            if (panicURL) {
                window.location.href = panicURL; // Redirect to panic URL
            }
        }
    });

    document.getElementById('ab-cloak').addEventListener('click', function() {
        window.open('about:blank'); // Open a new blank tab
    });
});
