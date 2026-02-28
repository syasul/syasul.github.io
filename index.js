document.addEventListener('DOMContentLoaded', function() {
    
    // Inisialisasi Typed.js disesuaikan dengan profesi di CV
    var typed = new Typed('.typed-text', {
        strings: [
            "UI/UX Designer", 
            "Fullstack Developer", 
            "Mobile Developer",
            "IoT Engineer"
        ],
        typeSpeed: 60,
        backSpeed: 40,
        backDelay: 2000,
        loop: true,
        showCursor: false 
    });

    // Inisialisasi AOS (Animasi saat scroll)
    AOS.init({
        once: true,
        offset: 50,
        duration: 900,
        easing: 'ease-out-cubic'
    });

    // Efek blur navbar saat di-scroll
    const nav = document.querySelector('nav');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.style.background = 'rgba(10, 14, 23, 0.85)';
            nav.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.5)';
        } else {
            nav.style.background = 'rgba(10, 14, 23, 0.7)';
            nav.style.boxShadow = 'none';
        }
    });
});