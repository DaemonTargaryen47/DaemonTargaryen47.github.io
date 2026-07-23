/* ============================================================
   PORTFOLIO SCRIPT
   Features wired up here:
   1. Mobile nav toggle (hamburger menu)
   2. Close mobile menu when a link is clicked
   3. Highlight active nav link on scroll
   ============================================================

   ➕ To add a new feature: write a new section below
   ➖ To remove a feature: delete that section
   Each feature is self-contained and clearly labeled.
============================================================ */


/* ============================================================
   1. MOBILE NAV TOGGLE
   Toggles the .open class on .nav-links when hamburger is clicked
============================================================ */
const navToggle = document.querySelector('.nav-toggle');
const navLinks  = document.querySelector('.nav-links');

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
}


/* ============================================================
   2. CLOSE MOBILE MENU ON LINK CLICK
   When a nav link is tapped on mobile, close the menu
============================================================ */
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
  });
});


/* ============================================================
   3. ACTIVE NAV LINK ON SCROLL
   Adds .active class to the nav link matching the visible section
   ✏️  No config needed — it reads section IDs automatically
============================================================ */
const sections = document.querySelectorAll('section[id]');
const allNavLinks = document.querySelectorAll('.nav-links a');

function setActiveLink() {
  let currentSection = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (window.scrollY >= sectionTop) {
      currentSection = section.getAttribute('id');
    }
  });

  allNavLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${currentSection}`) {
      link.classList.add('active');
    }
  });
}

window.addEventListener('scroll', setActiveLink);
setActiveLink(); // run once on load


/* ============================================================
   ➕ ADD NEW FEATURES BELOW THIS LINE

   Examples you might want to add:
   - Dark mode toggle
   - Scroll-triggered fade-in animations
   - Copy email to clipboard on click
   - Back-to-top button
   Each feature is just a new self-contained block.
============================================================ */