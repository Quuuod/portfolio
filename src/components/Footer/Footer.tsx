import './Footer.css';
import FooterList from '../FooterList/FooterList';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <div className="copyright">
            <FooterList />
            <p>© 2023 frontend-dev.com</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
