function checkLocalTheme(button: HTMLButtonElement) {
  if (localStorage.getItem('darkMode') === 'dark') {
    button.classList.add('dark-mode-btn--active');
    document.body.classList.add('dark');
  } else if (localStorage.getItem('darkMode') === 'light') {
    button.classList.remove('dark-mode-btn--active');
    document.body.classList.remove('dark');
  }
}

export default checkLocalTheme;
