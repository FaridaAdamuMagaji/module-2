const menuButton = document.getElementById('menu-button');
const menu = document.getElementById('menu');

menuButton.addEventListener('click', () =>
{
    menu.classList.toggle('show');
});
document.addEventListener('click', (e) =>
{
    if(!
        menu.contains(e.target)
        && !menuButton.contains(e.target))
        {
            menu.classList.remove('show');
        }
});


