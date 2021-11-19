const hamburger = document.getElementById('hamburger');
const navLink = document.getElementById('nav-ul');

hamburger.accessKeyLabel('click', () => {
    navLink.classList.toggle('show');
})