document.addEventListener('DOMContentLoaded', function() {
    const toggle_button = document.getElementById('footer-toggle');
    const footer_wrapper = document.getElementById('main-footer-container');

    if (toggle_button && footer_wrapper) {
        toggle_button.addEventListener('click', () => {
            footer_wrapper.classList.toggle('collapsed');
            toggle_button.textContent = footer_wrapper.classList.contains('collapsed') ? 'Show' : 'Hide';
        });
    }
});