const toggleButton = document.getElementById('theme-toggle');
const body = document.body;
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('main section[id], main article[id]');

toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark');
});

const setActiveLink = () => {
    let currentId = 'home';

    sections.forEach((section) => {
        const sectionTop = section.offsetTop - 140;
        if (window.scrollY >= sectionTop) {
            currentId = section.id;
        }
    });

    navLinks.forEach((link) => {
        const isActive = link.getAttribute('href') === `#${currentId}`;
        link.classList.toggle('active', isActive);
    });
};

window.addEventListener('scroll', setActiveLink);
window.addEventListener('load', setActiveLink);
