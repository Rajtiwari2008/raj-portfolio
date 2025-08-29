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

// Check if element is in viewport
function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.bottom >= 0
  );
}

// Handle scroll event to trigger skill bars animation
function handleScroll() {
  const skillsSection = document.getElementById('skills');
  if (skillsSection && isElementInViewport(skillsSection)) {
    animateSkillBars();
    window.removeEventListener('scroll', handleScroll);
  }
}

// Initialize scroll listener for skills animation
window.addEventListener('scroll', handleScroll);

// Smooth scrolling for anchor navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80, // Adjust for fixed header height
        behavior: 'smooth'
      });
    }

    // Close mobile menu if open and on small screen
    if (window.innerWidth < 768) {
      const menuBtn = document.getElementById('menu-btn');
      const navMenu = document.getElementById('nav-menu');
      if (navMenu && menuBtn) {
        menuBtn.setAttribute('aria-expanded', 'false');
        navMenu.classList.add('opacity-0', 'pointer-events-none');
      }
    }
  });
});

// Initialize fade-in animations on page load
document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    document.querySelectorAll('.animate-fade-in').forEach(el => {
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
    });
  }, 100);

  // Trigger skill bars if section visible on load
  handleScroll();
});

// Mobile menu toggle button
const menuBtn = document.getElementById('menu-btn');
const navMenu = document.getElementById('nav-menu');
if (menuBtn && navMenu) {
  menuBtn.addEventListener('click', () => {
    const expanded = menuBtn.getAttribute('aria-expanded') === 'true';
    menuBtn.setAttribute('aria-expanded', (!expanded).toString());
    navMenu.classList.toggle('opacity-0');
    navMenu.classList.toggle('opacity-100');
    navMenu.classList.toggle('pointer-events-none');
    navMenu.classList.toggle('pointer-events-auto');

    if (navMenu.classList.contains('opacity-100')) {
      navMenu.classList.add('animate-slide-down');
    } else {
      navMenu.classList.remove('animate-slide-down');
    }
  });
}
