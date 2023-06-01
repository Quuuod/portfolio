import './NavListLi.css';

interface INavListLi {
  href: string;
  text: string;
  active: boolean;
}

function NavListLi({ href, text, active }: INavListLi) {
  const activeClass: string = active ? 'nav-list__link--active' : '';

  return (
    <li className="nav-list__item">
      <a href={href} className={`nav-list__link ${activeClass}`}>
        {text}
      </a>
    </li>
  );
}

export default NavListLi;
