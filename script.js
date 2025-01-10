<script>
    // Mengatur navigasi aktif berdasarkan scroll
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

    // Mengubah ikon menu dan navbar aktif
    let menuIcon = document.querySelector('#menu-icon');
    let navbar = document.querySelector('.navbar');
    menuIcon.onclick = () => {
        menuIcon.classList.toggle('bx-x');
        navbar.classList.toggle('active');
    };

    // Inisialisasi AOS (Animate on Scroll)
    document.addEventListener('DOMContentLoaded', function() {
        AOS.init(); // Inisialisasi efek animasi
        updateAOS(); // Memperbarui animasi (opsional)
    });

    // Fungsi untuk menangani klik tombol unduh CV
    function handleClick() {
        alert('CV download is currently unavailable.');
        // Mengatur lokasi ke id contact
        window.location.hash = "#contact";
    }

    // Menangani pengiriman formulir kontak
    document.getElementById("contactForm").addEventListener("submit", function(event) {
        event.preventDefault(); // Mencegah pengiriman formulir secara default
        alert("Your message has been sent successfully!");
        // Reset form setelah pengiriman
        this.reset();
    });
</script>
