// Mobile menu toggle
        const mobileMenuButton = document.querySelector('.mobile-menu-button');
        // Would normally toggle a mobile menu here

        // Animate skill bars on scroll
        function animateSkillBars() {
            const skillBars = document.querySelectorAll('.skill-bar');
            skillBars.forEach(bar => {
                const width = bar.style.width;
                bar.style.width = '0';
                setTimeout(() => {
                    bar.style.width = width;
                }, 100);
            });
        }

        // Check if skill section is in view
        function isElementInViewport(el) {
            const rect = el.getBoundingClientRect();
            return (
                rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
                rect.bottom >= 0
            );
        }

        // Handle scroll events to trigger animations
        function handleScroll() {
            const skillsSection = document.getElementById('skills');
            if (isElementInViewport(skillsSection)) {
                animateSkillBars();
                window.removeEventListener('scroll', handleScroll);
            }
        }

        // Initialize scroll listener
        window.addEventListener('scroll', handleScroll);

        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);

                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }

                // Close mobile menu if open
                // Would normally close mobile menu here
            });
        });

        // Initialize animations on page load
        document.addEventListener('DOMContentLoaded', () => {
            setTimeout(() => {
                document.querySelectorAll('.animate-fade-in').forEach(el => {
                    el.style.opacity = '1';
                    el.style.transform = 'translateY(0)';
                });
            }, 100);

            // Check if skills section is already visible on load
            handleScroll();
        });
    const toggleBtn = document.getElementById('mobile-menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');

    toggleBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });
  const menuBtn = document.getElementById('menu-btn');
  const navMenu = document.getElementById('nav-menu');

  menuBtn.addEventListener('click', () => {
    const expanded = menuBtn.getAttribute('aria-expanded') === 'true';
    menuBtn.setAttribute('aria-expanded', !expanded);
    navMenu.classList.toggle('opacity-0');
    navMenu.classList.toggle('pointer-events-none');
  });

  // Optional: close menu when a nav link is clicked (mobile)
  navMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      if(window.innerWidth < 768){
        menuBtn.setAttribute('aria-expanded', false);
        navMenu.classList.add('opacity-0', 'pointer-events-none');
      }
    });
  });
const toggleBtn = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

toggleBtn.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});





