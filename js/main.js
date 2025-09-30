// ===================================
// Portfolio Website - Main JavaScript
// ===================================

document.addEventListener('DOMContentLoaded', function() {

    // ===================================
    // Smooth Scroll with Offset for Fixed Nav
    // ===================================
    const navLinks = document.querySelectorAll('.nav-link');
    const navHeight = document.querySelector('.nav').offsetHeight;

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                const targetPosition = targetSection.offsetTop - navHeight;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ===================================
    // Project Cards
    // ===================================
    const projectCards = document.querySelectorAll('.project-card');

    // ===================================
    // Active Navigation Link on Scroll
    // ===================================
    const sections = document.querySelectorAll('section[id]');

    function activateNavLink() {
        const scrollY = window.pageYOffset;

        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - navHeight - 100;
            const sectionId = section.getAttribute('id');
            const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLinks.forEach(link => link.classList.remove('active'));
                if (navLink) {
                    navLink.classList.add('active');
                }
            }
        });
    }

    window.addEventListener('scroll', activateNavLink);

    // ===================================
    // Navigation Background on Scroll
    // ===================================
    const nav = document.querySelector('.nav');
    let lastScroll = 0;

    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 60) {
            nav.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.04)';
        } else {
            nav.style.boxShadow = 'none';
        }

        lastScroll = currentScroll;
    });


    // ===================================
    // CTA Button Click Tracking (Optional)
    // ===================================
    const ctaButton = document.querySelector('.cta-button');

    if (ctaButton) {
        ctaButton.addEventListener('click', function(e) {
            // Add analytics tracking here if needed
            console.log('CTA button clicked');
        });
    }

    // ===================================
    // Keyboard Accessibility Enhancement
    // ===================================
    document.addEventListener('keydown', function(e) {
        // Allow tab navigation through projects
        if (e.key === 'Tab') {
            const focusedElement = document.activeElement;
            if (focusedElement.classList.contains('project-card')) {
                focusedElement.style.outline = '2px solid #0a0a0a';
                focusedElement.style.outlineOffset = '4px';
            }
        }
    });

    // Remove outline on click (but keep for keyboard users)
    document.addEventListener('mousedown', function() {
        projectCards.forEach(card => {
            card.style.outline = 'none';
        });
    });

    // ===================================
    // Performance: Lazy Load Images
    // ===================================
    const images = document.querySelectorAll('img[loading="lazy"]');

    if ('loading' in HTMLImageElement.prototype) {
        // Browser supports native lazy loading
        // Images will load automatically
    } else {
        // Fallback for browsers that don't support lazy loading
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src || img.src;
                    imageObserver.unobserve(img);
                }
            });
        });

        images.forEach(img => imageObserver.observe(img));
    }


    // ===================================
    // Enhanced Hover Animation for Project Cards
    // ===================================
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            const projectImage = card.querySelector('.project-image img');
            if (projectImage) {
                projectImage.style.transform = 'scale(1.08)';
            }
        });

        card.addEventListener('mouseleave', () => {
            const projectImage = card.querySelector('.project-image img');
            if (projectImage) {
                projectImage.style.transform = 'scale(1)';
            }
        });
    });

    // ===================================
    // Console Message (Optional - Remove in Production)
    // ===================================
    console.log('%cPortfolio Website', 'font-size: 20px; font-weight: 300; color: #0a0a0a;');
    console.log('%cCrafted with precision and clarity', 'font-size: 12px; color: #505050;');

});

// ===================================
// Utility Functions
// ===================================

// Debounce function for performance optimization
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Check if element is in viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}