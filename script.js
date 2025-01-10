const menu-button = document.querySelector('.menu-button');
const menu = document.querySelector('.menu');
menu-button .addEventListener('click', () =>
{
    menu.classList.toggle('show');
});

const ash = [
    (

    )
]
// script.js

document.getElementById('renderButton').addEventListener('click', function() {
    // Define the dynamic HTML content
    const dynamicContent = `
        <div class="bed">
            <img src="./assets/bedroom.png" alt="bedroom">
        </div>
        <div class="point">
            <div class="star">
                <img src="./assets/Star.svg" alt="star">
            </div>
            <p class="number">4.8</p>
        </div>
        <div class="heart">
            <img src="./assets/favorite.svg" alt="heart">
        </div>              
        <p class="wild">Wilderness Club at Big Ceddar</p>
        <p class="date">28 October <span class="dash">-</span> 1 November</p>
        <p class="money">
            <span class="cost">$2016</span>
            <span class="night">/6 night</span>
        </p>`;
    
    // Insert the dynamic content into the div with id 'dynamicContent'
    document.getElementById('dynamicContent').innerHTML = dynamicContent;
});
