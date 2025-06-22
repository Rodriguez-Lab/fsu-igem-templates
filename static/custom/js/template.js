/* this makes the sidebar go to the middle of the vertical height of the screen
window.addEventListener('scroll', () => {
    const sidebar = document.querySelector('.sidebar');
    const container = document.querySelector('#left-column');

    const containerRect = container.getBoundingClientRect();
    const sidebarHeight = sidebar.offsetHeight;
    const viewportHeight = window.innerHeight;

    const scrollTop = window.scrollY;
    const containerTop = container.offsetTop;
    const containerBottom = containerTop + container.offsetHeight;

    const scrollInsideContainer = scrollTop - containerTop;
    const centerOffset = (viewportHeight - sidebarHeight)/2;

    if (scrollTop < containerTop + centerOffset) {
        // sidebar still near top - then let it scroll normally
        sidebar.style.position = 'relative';
        sidebar.style.top = '0';
        sidebar.style.transform = 'translateY(0)'
    }
    else if (scrollTop + centerOffset + sidebarHeight / 2 < containerBottom) {
        // sidebar should stick to the center
        sidebar.style.position = 'fixed';
        sidebar.style.top = '50%';
        sidebar.style.transform = 'translateY(-50%)';
    }
    else {
        // sidebar hes reached the bottom of teh container - stops moving
        sidebar.style.positon = 'absolute';
        sidebar.style.top = 'auto';
        sidebar.style.bottom = '0';
        sidebar.style.transform = 'translateY(0)';
    }
});
*/