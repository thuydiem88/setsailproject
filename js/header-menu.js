// đóng/mở menu header 

const iconMenu = document.querySelector('.icon-menu');
const headerMenu = document.querySelector('.header-menu');
const closeMenu = document.querySelector('.header-menu__close-icon');
function openHeaderMenu() {
    headerMenu.classList.add('header-menu__open')
}

function closeHeaderMenu() {
    headerMenu.classList.remove('header-menu__open')
}
iconMenu.addEventListener('click', openHeaderMenu);
closeMenu.addEventListener('click', closeHeaderMenu);