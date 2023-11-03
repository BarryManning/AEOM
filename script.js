const menuButton = document.getElementById('menuButton');
const slideInMenu = document.getElementById('slideInMenu');

menuButton.addEventListener('click', () => {
    if (slideInMenu.style.width == '200px') {
        slideInMenu.style.width = '0px';
    } else {
        slideInMenu.style.transition = '0.6s';
        slideInMenu.style.width = '200px';
    }
});