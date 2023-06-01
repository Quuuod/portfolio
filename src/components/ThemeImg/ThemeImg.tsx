import './ThemeImg.css';

interface IThemeImg {
  theme: string;
  text: string;
}

function ThemeImg({ theme, text }: IThemeImg) {
  return (
    <img src={theme} alt={`${text} mode`} className="dark-mode-btn__icon" />
  );
}

export default ThemeImg;
