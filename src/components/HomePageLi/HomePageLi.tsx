import './HomePageLi.css';

interface IHomePageLi {
  title: string;
  text: string;
}

function HomePageLi({ title, text }: IHomePageLi) {
  return (
    <>
      <li className="content-list__item">
        <h2 className="title-2">{title}</h2>
        <p>{text}</p>
      </li>
    </>
  );
}

export default HomePageLi;
