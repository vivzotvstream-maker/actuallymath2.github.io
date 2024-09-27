document.addEventListener('DOMContentLoaded', function() {
    const savedTabName = localStorage.getItem('tabName');
    const savedIconURL = localStorage.getItem('iconURL');

    if (savedTabName) {
        document.title = savedTabName; // Update the document title
    }
    if (savedIconURL) {
        document.getElementById('dynamic-favicon').href = savedIconURL; // Update the favicon
    }
});

document.addEventListener('keydown', function(event) {
    const panicKey = localStorage.getItem('panicKey');
    const panicURL = localStorage.getItem('panicURL');

    if (event.key === panicKey) {
        if (panicURL) {
            window.location.href = panicURL; // Redirect to the panic URL
        } else {
            console.log('Panic URL not set');
        }
    }
});
