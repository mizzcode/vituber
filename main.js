document.addEventListener('DOMContentLoaded', function() {
  const darkModeToggle = document.getElementById('darkmode-toggle');
  const darkModeIcon = darkModeToggle.querySelector('img');
  const darkModeEnabled = localStorage.getItem('darkMode') === 'enabled';
  const menuToggle = document.getElementById('menu-toggle');
  const navUl = document.querySelector('.nav ul');

  window.addEventListener('scroll', function() {
    if (window.scrollY > 0) {
      navUl.style.top = '6rem';
    } else {
      navUl.style.top = '6rem';
    }
  });

  if (darkModeEnabled) {
    document.body.classList.add('dark-mode');
    darkModeIcon.src = './assets/images/sun-svgrepo-com.svg';
  }

  darkModeToggle.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    const darkModeIsActive = document.body.classList.contains('dark-mode');

    if (darkModeIsActive) {
      darkModeIcon.src = './assets/images/sun-svgrepo-com.svg';
      localStorage.setItem('darkMode', 'enabled');
    } else {
      darkModeIcon.src = './assets/images/moon-stars-svgrepo-com.svg';
      localStorage.setItem('darkMode', 'disabled');
    }
  });

  menuToggle.addEventListener('click', function() {
    navUl.classList.toggle('show');
    const menuIcon = menuToggle.querySelector('i');
    if (navUl.classList.contains('show')) {
      menuIcon.classList.remove('fa-bars');
      menuIcon.classList.add('fa-times');
    } else {
      menuIcon.classList.remove('fa-times');
      menuIcon.classList.add('fa-bars');
    }
  });
});