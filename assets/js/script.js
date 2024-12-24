// Function to set active nav link based on current page
function setActiveNavLink() {
    // Get current page filename
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    // Remove active class from all nav links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
    });
    
    // Add active class to current page's nav link
    const activeLink = document.querySelector(`.nav-link[href="${currentPage}"]`);
    if (activeLink) {
        activeLink.classList.add('active');
    } else {
        // If no match found, set Home as active for index.html
        document.querySelector('.nav-link[href="index.html"]').classList.add('active');
    }
}

// Call the function when the DOM is loaded
document.addEventListener('DOMContentLoaded', setActiveNavLink);

// Add these new functions
document.addEventListener('DOMContentLoaded', function() {
    const navbarToggler = document.querySelector('.navbar-toggler');
    const overlay = document.querySelector('.overlay');
    const burgerCheckbox = document.querySelector('.burger');

    navbarToggler.addEventListener('click', function() {
        overlay.classList.add('show');

    });

    // Close menu when clicking overlay
    overlay.addEventListener('click', function() {
        overlay.classList.remove('show');
        
        document.querySelector('.navbar-collapse').classList.remove('show');
        burgerCheckbox.checked = false;
    });
});
