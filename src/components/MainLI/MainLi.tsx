import './MainLi.css';

interface IMainLi {
  title: string;
  text: string;
}

function MainLi({ title, text }: IMainLi) {
  return (
    <>
      <li className="content-list__item">
        <h2 className="title-2">{title}</h2>
        <p>{text}</p>
      </li>
    </>
  );
}

export default MainLi;
