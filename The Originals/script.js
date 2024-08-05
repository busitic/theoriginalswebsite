document.addEventListener("DOMContentLoaded", function() {
    const menuIcon = document.getElementById("menu-icon");
    const cancelIcon = document.getElementById("cancel-icon");
    const navLinks = document.querySelector("nav ul");

    menuIcon.addEventListener("click", function() {
        navLinks.classList.add("show");
        menuIcon.style.display = "none";
        cancelIcon.style.display = "block";
    });

    cancelIcon.addEventListener("click", function() {
        navLinks.classList.remove("show");
        menuIcon.style.display = "block";
        cancelIcon.style.display = "none";
    });

    // Smooth scrolling for the About link
    document.querySelector('a[href="#about-section"]').addEventListener('click', function(e) {
        e.preventDefault();
        document.getElementById('about-section').scrollIntoView({ behavior: 'smooth' });
        navLinks.classList.remove("show");
        menuIcon.style.display = "block";
        cancelIcon.style.display = "none";
    });
    document.querySelector('a[href="#footer-side"]').addEventListener('click', function(e) {
        e.preventDefault();
        document.getElementById('footer-side').scrollIntoView({ behavior: 'smooth' });
        navLinks.classList.remove("show");
        menuIcon.style.display = "block";
        cancelIcon.style.display = "none";
    });
});
