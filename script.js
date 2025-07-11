document.addEventListener('DOMContentLoaded', () => {
  const navbar = document.querySelector('.navbar');
  const navLinks = document.querySelectorAll('.nav-links a');
  const sections = document.querySelectorAll('section');
  const themeToggle = document.querySelector('.toggle-theme');
  const hamburger = document.querySelector('.hamburger');
  const navList = document.querySelector('.nav-links');
  const scrollTopBtn = document.querySelector('.scroll-top');

  // Set initial theme based on user preference
  const setInitialTheme = () => {
    if (window.matchMedia('(prefers-color-scheme: light)').matches) {
      document.body.dataset.theme = 'light';
      themeToggle.textContent = '☀️';
    } else {
      document.body.dataset.theme = 'dark';
      themeToggle.textContent = '🌙';
    }
  };

  // Handle scroll events
  const handleScroll = () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
      scrollTopBtn.style.display = 'block';
    } else {
      navbar.classList.remove('scrolled');
      scrollTopBtn.style.display = 'none';
    }

    // Highlight active section in the navbar
    let index = sections.length;
    while (--index && window.scrollY + 60 < sections[index].offsetTop) {}
    navLinks.forEach(link => link.classList.remove('active'));
    if (navLinks[index]) {
      navLinks[index].classList.add('active');
    }
  };

  // Toggle navigation menu
  const toggleNavMenu = () => {
    navList.classList.toggle('open');
    hamburger.classList.toggle('open');
  };

  // Close navigation menu on link click
  const closeNavMenu = () => {
    navList.classList.remove('open');
    hamburger.classList.remove('open');
  };

  // Toggle theme
  const toggleTheme = () => {
    if (document.body.dataset.theme === 'light') {
      document.body.dataset.theme = 'dark';
      themeToggle.textContent = '🌙';
    } else {
      document.body.dataset.theme = 'light';
      themeToggle.textContent = '☀️';
    }
  };

  // Scroll to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Initialize theme
  setInitialTheme();

  // Event listeners
  window.addEventListener('scroll', handleScroll);
  hamburger.addEventListener('click', toggleNavMenu);
  navLinks.forEach(link => link.addEventListener('click', closeNavMenu));
  themeToggle.addEventListener('click', toggleTheme);
  scrollTopBtn.addEventListener('click', scrollToTop);
});
