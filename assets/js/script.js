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
