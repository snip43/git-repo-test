const getHamburger = document.querySelector('.hamburger'),
    getTopMenu = document.querySelector('.nav__top-menu');



getHamburger.addEventListener('click', showTopMenu);

function showTopMenu() {
    getTopMenu.style.display = 'flex';
    getHamburger.removeEventListener('click', showTopMenu);
    getHamburger.addEventListener('click', hideTopMenu);
}

function hideTopMenu() {
    getTopMenu.style.display = 'none';
    getHamburger.removeEventListener('click', hideTopMenu);
    getHamburger.addEventListener('click', showTopMenu);
}