interface IFooterListLi {
  href: string;
  img: string;
}

function FooterListLi({ href, img }: IFooterListLi) {
  return (
    <li className="social__item">
      <a href={href}>
        <img src={img} alt="Link" />
      </a>
    </li>
  );
}

export default FooterListLi;
