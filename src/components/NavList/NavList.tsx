import './NavList.css';
import NavListLi from '../NavListLi/NavListLi';

function NavList() {
  return (
    <ul className="nav-list">
      <NavListLi href="./index.html" text="Home" active={true} />
      <NavListLi href="./projects.html" text="Projects" active={false} />
      <NavListLi href="./contacts.html" text="Contacts" active={false} />
    </ul>
  );
}

export default NavList;
