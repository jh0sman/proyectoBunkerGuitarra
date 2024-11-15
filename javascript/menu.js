// Seleccionamos el botón de hamburguesa y el menú de navegación
const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu-navegacion');

// Agregamos el evento de clic al botón de hamburguesa
hamburger.addEventListener('click', () => {
    // Alterna la clase 'spread' en el menú
    menu.classList.toggle('spread');
});

window.addEventListener('click', e => {
    if(menu.classList.contains('spread') && e.target != menu && e.target != hamburger) {
        menu.classList.toggle('spread');
    }
})