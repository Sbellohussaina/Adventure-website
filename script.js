const hamburger = document.getElementById('hamburger');

const nav = document.getElementById('menu-box');



hamburger.addEventListener('click', () => {
  nav.classList.toggle('active');
});


document.addEventListener('click', (event) => {
    if (!nav.contains(event.target) &&!hamburger.contains(event.target)) {
        nav.classList.remove('active');
    }
})