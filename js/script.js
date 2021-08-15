window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.header_nav'),
    menuItem = document.querySelectorAll('.header_list'),
    hamburger = document.querySelector('.burger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('burger_active');
        menu.classList.toggle('header_nav_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('burger_active');
            menu.classList.toggle('header_nav_active');
        })
    })
})