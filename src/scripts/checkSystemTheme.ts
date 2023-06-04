function checkSystemTheme(button: HTMLButtonElement) {
  if (
    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches
  ) {
    button.classList.add('dark-mode-btn--active');
    document.body.classList.add('dark');
  }
}

export default checkSystemTheme;
