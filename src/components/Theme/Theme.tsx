import './Theme.css';
import ThemeImg from '../ThemeImg/ThemeImg';
import sun from '../../images/icons/sun.svg';
import moon from '../../images/icons/moon.svg';

function Theme() {
  return (
    <button className="dark-mode-btn">
      <ThemeImg theme={sun} text="Light" />
      <ThemeImg theme={moon} text="Dark" />
    </button>
  );
}

export default Theme;
