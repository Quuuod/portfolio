import checkSystemTheme from './checkSystemTheme';
import checkLocalTheme from './checkLocalTheme';
import onSystemThemeChange from './onSystemThemeChange';

function runAllThemeFunctions(): void {
  const btnDarkMode = document.querySelector(
    '.dark-mode-btn'
  ) as HTMLButtonElement;

  checkSystemTheme(btnDarkMode);
  checkLocalTheme(btnDarkMode);
  onSystemThemeChange(btnDarkMode);

  btnDarkMode.onclick = function () {
    btnDarkMode.classList.toggle('dark-mode-btn--active');
    const isDark = document.body.classList.toggle('dark');

    if (isDark) {
      localStorage.setItem('darkMode', 'dark');
    } else {
      localStorage.setItem('darkMode', 'light');
    }
  };
}

export default runAllThemeFunctions;
