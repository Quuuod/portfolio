function onSystemThemeChange(button: HTMLButtonElement): void {
  window
    .matchMedia('(prefers-color-scheme: dark)')
    .addEventListener('change', (event) => {
      const newColorScheme = event.matches ? 'dark' : 'light';

      if (newColorScheme === 'dark') {
        button.classList.add('dark-mode-btn--active');
        document.body.classList.add('dark');
        localStorage.setItem('darkMode', 'dark');
      } else {
        button.classList.remove('dark-mode-btn--active');
        document.body.classList.remove('dark');
        localStorage.setItem('darkMode', 'light');
      }
    });
}

export default onSystemThemeChange;
