const menu-button = document.querySelector('.menu-button');
const menu = document.querySelector('.menu');
menu-button .addEventListener('click', () =>
{
    menu.classList.toggle('show');
});