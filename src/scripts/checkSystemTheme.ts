function checkSystemTheme(button: HTMLButtonElement): void {
  if (
    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches
  ) {
    button.classList.add('dark-mode-btn--active');
    document.body.classList.add('dark');
  }
}

export default checkSystemTheme;
