document.addEventListener('DOMContentLoaded', function() {
    const navbarToggler = document.querySelector('.navbar-toggler');
    const overlay = document.querySelector('.overlay');
    const burgerCheckbox = document.querySelector('.burger');

    navbarToggler.addEventListener('click', function() {
        overlay.classList.toggle('show');

    });

    // Close menu when clicking overlay
    overlay.addEventListener('click', function() {
        overlay.classList.remove('show');
        
        document.querySelector('.navbar-collapse').classList.remove('show');
        burgerCheckbox.checked = false;
    });

    // Add section observer functionality
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

    const observerOptions = {
        threshold: 0.5,
        rootMargin: '-50px 0px -50px 0px'
    };

    const observerCallback = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Remove active class from all links
                navLinks.forEach(link => link.classList.remove('active'));
                
                // Add active class to corresponding nav link
                const activeLink = document.querySelector(`.navbar-nav .nav-link[href="#${entry.target.id}"]`);
                if (activeLink) {
                    activeLink.classList.add('active');
                }
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    sections.forEach(section => observer.observe(section));
});
