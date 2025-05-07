
document.addEventListener('DOMContentLoaded', function() {
// Mobile Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');
const menuBars = document.querySelector('.fa-bars');
const menuTimes = document.querySelector('.fa-times');

// Initialize - make sure only bars is visible initially
menuTimes.style.display = 'none';

menuToggle.addEventListener('click', function() {
    navMenu.classList.toggle('active');
    
    // Toggle visibility
    if (menuBars.style.display === 'none') {
        menuBars.style.display = 'block';
        menuTimes.style.display = 'none';
    } else {
        menuBars.style.display = 'none';
        menuTimes.style.display = 'block';
    }
});
    // Mobile Dropdown Toggle
    const dropdowns = document.querySelectorAll('.dropdown');
    
    dropdowns.forEach(function(dropdown) {
        dropdown.addEventListener('click', function(e) {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                this.classList.toggle('active');
            }
        });
    });
    
    // Resize Event
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            navMenu.classList.remove('active');
            menuBars.style.display = 'block';
            menuTimes.style.display = 'none';
            dropdowns.forEach(function(dropdown) {
                dropdown.classList.remove('active');
            });
        }
    });
    
    // Scroll to top button
    function scrollFunction() {
        const scrollTopBtn = document.getElementById('scrollTopBtn');
        if (scrollTopBtn) {
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                scrollTopBtn.style.display = 'block';
            } else {
                scrollTopBtn.style.display = 'none';
            }
        }
    }
    
 
    // Initialize gallery lightbox if on factory page
    const lightbox = document.getElementById('lightbox');
    if (lightbox) {
        const galleryItems = document.querySelectorAll('.gallery-grid img');
        const lightboxImg = document.getElementById('lightbox-img');
        const close = document.querySelector('.close');
        
        galleryItems.forEach(function(item) {
            item.addEventListener('click', function() {
                lightbox.style.display = 'flex';
                lightboxImg.src = this.src;
            });
        });
        
        close.addEventListener('click', function() {
            lightbox.style.display = 'none';
        });
        
        lightbox.addEventListener('click', function(e) {
            if (e.target === lightbox) {
                lightbox.style.display = 'none';
            }
        });
    }
    
    // Product filter on products page
    const filterButtons = document.querySelectorAll('.filter-btn');
    if (filterButtons.length > 0) {
        filterButtons.forEach(function(button) {
            button.addEventListener('click', function() {
                // Remove active class from all buttons
                filterButtons.forEach(function(btn) {
                    btn.classList.remove('active');
                });
                
                // Add active class to clicked button
                this.classList.add('active');
                
                const filter = this.getAttribute('data-filter');
                const products = document.querySelectorAll('.product-item');
                
                products.forEach(function(product) {
                    if (filter === 'all' || product.classList.contains(filter)) {
                        product.style.display = 'block';
                    } else {
                        product.style.display = 'none';
                    }
                });
            });
        });
    }
    
    // Animate elements on scroll
    function animateOnScroll() {
        const elements = document.querySelectorAll('.animate-on-scroll');
        
        elements.forEach(function(element) {
            const position = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.2;
            
            if (position < screenPosition) {
                element.classList.add('animate');
            }
        });
    }
    
    // Initialize animations
    window.addEventListener('scroll', function() {
        scrollFunction();
        animateOnScroll();
    });
    
    // Initialize animations on page load
    animateOnScroll();
});
