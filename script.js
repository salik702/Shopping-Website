document.addEventListener('DOMContentLoaded', () => {
  const list = document.querySelector('.navlist');
  const hamburger = document.querySelector('.fa-bars');

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('fa-x');
    list.classList.toggle('navlist-active');
  });

  const darkModeToggle = document.getElementById('dark-mode-toggle');
  const darkModeIcon = document.getElementById('dark-mode-icon');
  const body = document.body;

  if (localStorage.getItem('darkMode') === 'enabled') {
    enableDarkMode();
  } else {
    disableDarkMode();
  }

  function enableDarkMode() {
    body.classList.add('dark-mode');
    darkModeIcon.classList.remove('fa-moon');
    darkModeIcon.classList.add('fa-sun');
    localStorage.setItem('darkMode', 'enabled');
  }

  function disableDarkMode() {
    body.classList.remove('dark-mode');
    darkModeIcon.classList.remove('fa-sun');
    darkModeIcon.classList.add('fa-moon');
    localStorage.setItem('darkMode', 'disabled');
  }

  darkModeToggle.addEventListener('click', () => {
    if (body.classList.contains('dark-mode')) {
      disableDarkMode();
    } else {
      enableDarkMode();
    }
  });
});
