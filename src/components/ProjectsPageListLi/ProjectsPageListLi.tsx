import './ProjectsPageListLi.css';

interface IProjectsPageListLi {
  href: string;
  img: string;
  title: string;
}

function ProjectsPageListLi({ href, img, title }: IProjectsPageListLi) {
  return (
    <li className="project">
      <a href={href}>
        <img src={img} alt="Project img" className="project__img" />
        <h3 className="project__title">{title}</h3>
      </a>
    </li>
  );
}

export default ProjectsPageListLi;
