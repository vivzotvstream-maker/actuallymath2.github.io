document.addEventListener('DOMContentLoaded', function() {
    const savedPanicKey = localStorage.getItem('panicKey');
    const savedPanicURL = localStorage.getItem('panicURL');

    // Check for panic key on keydown
    document.addEventListener('keydown', function(event) {
        if (event.key === savedPanicKey) {
            if (savedPanicURL) {
                window.location.href = savedPanicURL; // Redirect to the panic URL
            } else {
                console.log('Panic URL not set');
            }
        }
    });
});
