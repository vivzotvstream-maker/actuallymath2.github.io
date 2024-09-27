// script.js

document.addEventListener('DOMContentLoaded', function() {
    // Load saved values from localStorage
    const savedTabName = localStorage.getItem('tabName');
    const savedIconURL = localStorage.getItem('iconURL');
    const savedPanicKey = localStorage.getItem('panicKey');
    const savedPanicURL = localStorage.getItem('panicURL');

    // Update the document title
    if (savedTabName) {
        document.title = savedTabName;
    }

    // Update the favicon if URL is saved
    if (savedIconURL) {
        document.getElementById('dynamic-favicon').href = savedIconURL;
    }

    // Panic Key Detection
    document.addEventListener('keydown', function(event) {
        if (event.key === savedPanicKey) {
            // Redirect to the panic URL if set
            if (savedPanicURL) {
                window.location.href = savedPanicURL; // Redirect to the panic URL
            } else {
                alert('Panic URL is not set!'); // Alert if the URL is not set
            }
        }
    });
});
