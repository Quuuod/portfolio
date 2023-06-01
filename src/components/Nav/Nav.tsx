import './Nav.css';
import Theme from '../Theme/Theme';
import NavList from '../NavList/NavList';

function Nav() {
  return (
    <nav className="nav">
      <div className="container">
        <div className="nav-row">
          <a href="./index.html" className="logo">
            <strong>Freelancer</strong> portfolio
          </a>
          <Theme />
          <NavList />
        </div>
      </div>
    </nav>
  );
}

export default Nav;
