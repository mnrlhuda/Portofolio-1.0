let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });
};

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

document.addEventListener('DOMContentLoaded', function() {
    AOS.init();
    updateAOS();
});

window.addEventListener('resize', updateAOS);

function updateAOS() {
    var elements = document.querySelectorAll('.animated-element');
    elements.forEach(function(element) {
        if (window.innerWidth <= 768) {
            element.setAttribute('data-aos', 'fade-left');
            element.style.display = 'block'; // Tampilkan elemen di mobile
        } else {
            element.setAttribute('data-aos', 'fade-right');
            element.style.display = 'block'; // Tampilkan elemen di desktop
        }
    });
    // Reinitialize AOS to apply the new settings
    AOS.refresh();
}
