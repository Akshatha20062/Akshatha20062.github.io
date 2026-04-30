// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {

    // 1. Navigation Bar Scroll Effect
    const navbar = document.getElementById('navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // 2. Scroll Reveal Animations
    const reveals = document.querySelectorAll('.reveal');

    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        const elementVisible = 100; // The threshold in pixels

        reveals.forEach(reveal => {
            const elementTop = reveal.getBoundingClientRect().top;
            
            // If element is within viewport threshold, add active class
            if (elementTop < windowHeight - elementVisible) {
                reveal.classList.add('active');
            }
        });
    };

    // Trigger on initial load and on scroll
    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Call once on load

    // 3. Dynamic Orb Following (Subtle Mouse Parallax)
    const orbs = document.querySelectorAll('.orb');
    
    document.addEventListener('mousemove', (e) => {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;

        orbs.forEach((orb, index) => {
            // Give each orb a slightly different speed multiplier
            const speed = (index + 1) * 30;
            const moveX = (x - 0.5) * speed;
            const moveY = (y - 0.5) * speed;
            
            orb.style.transform = `translate(${moveX}px, ${moveY}px)`;
        });
    });

});
