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

function handleClick() {
    alert('CV download is currently unavailable.');
    // Mengatur lokasi ke id contact
    window.location.hash = "#contact";
}

document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Mencegah pengiriman formulir secara default
    alert("Your message has been sent successfully!");
    // Reset form setelah pengiriman
    this.reset();
});
document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault(); // Mencegah perilaku default (mengubah URL)
        const targetId = this.getAttribute('href').substring(1); // Ambil ID tujuan
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth', // Gulir halus
                block: 'start'
            });
        }
    });
});
