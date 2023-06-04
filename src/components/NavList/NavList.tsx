import './NavList.css';
import NavListLi from '../NavListLi/NavListLi';

function NavList() {
  return (
    <ul className="nav-list">
      <NavListLi href="/" text="Home" active={true} />
      <NavListLi href="/projects" text="Projects" active={false} />
      <NavListLi href="/contacts" text="Contacts" active={false} />
    </ul>
  );
}

export default NavList;
