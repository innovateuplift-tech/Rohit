// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Simple form submission handler (prevent default for demo)
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your message! This is a demo form.');
    this.reset();
});

// Add scroll reveal animation
window.addEventListener('scroll', reveal);

function reveal() {
    var reveals = document.querySelectorAll('.card');

    for(var i = 0; i < reveals.length; i++) {
        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 150;

        if(revealtop < windowheight - revealpoint) {
            reveals[i].classList.add('active');
        }
    }
}

// Trigger reveal on load
reveal();
