// 1. Mobile Menu Toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    // Animate hamburger icon change
    const icon = hamburger.querySelector('i');
    if (navLinks.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
});

// Function to close menu when a link is clicked
function closeMenu() {
    navLinks.classList.remove('active');
    const icon = hamburger.querySelector('i');
    icon.classList.remove('fa-times');
    icon.classList.add('fa-bars');
}

// 2. Scroll Animation (Intersection Observer)
const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target); // Only animate once
        }
    });
}, observerOptions);

document.querySelectorAll('.reveal').forEach(el => {
    observer.observe(el);
});

// 3. FAQ Accordion
const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
        const item = question.parentElement;
        const isActive = item.classList.contains('active');
        
        // Close all others
        document.querySelectorAll('.faq-item').forEach(i => {
            i.classList.remove('active');
        });

        // Toggle current
        if (!isActive) {
            item.classList.add('active');
        }
    });
});

// 4. Navbar Background on Scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.boxShadow = "0 4px 20px rgba(0,0,0,0.1)";
    } else {
        header.style.boxShadow = "0 2px 20px rgba(0,0,0,0.05)";
    }
});