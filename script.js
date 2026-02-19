// Ziva Multispeciality Hospital - Premium Website Scripts

document.addEventListener('DOMContentLoaded', () => {
    // Header scroll effect
    const header = document.querySelector('.header');
    
    function updateHeader() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }
    
    window.addEventListener('scroll', updateHeader, { passive: true });
    updateHeader();

    // Mobile navigation toggle
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');

    navToggle?.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        navToggle.setAttribute('aria-expanded', 
            navLinks.classList.contains('active') ? 'true' : 'false'
        );
    });

    // Close mobile menu when clicking a link
    navLinks?.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });

    // Smooth scroll for anchor links (fallback for older browsers)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            e.preventDefault();
            const target = document.querySelector(href);
            target?.scrollIntoView({ behavior: 'smooth' });
        });
    });
});
