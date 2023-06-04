import './ProjectsPage.css';
import ProjectsPageListLi from '../ProjectsPageListLi/ProjectsPageListLi';
import catFashion from '../../images/projects/catFashion.png';
import healthCare from '../../images/projects/healthCare.png';
import gameLand from '../../images/projects/gameLand.png';

function ProjectsPageList() {
  return (
    <>
      <h2 className="title-1">Projects</h2>
      <ul className="projects">
        <ProjectsPageListLi
          href={'https://quuuod.github.io/IT-academy-Project'}
          img={catFashion}
          title={'Cat Fashion'}
        />
        <ProjectsPageListLi
          href={'https://minorio.github.io/MyProject.github.io'}
          img={gameLand}
          title={'Game Land'}
        />
        <ProjectsPageListLi
          href={'https://github.com/Quuuod/HealthCare'}
          img={healthCare}
          title={'Health Care'}
        />
      </ul>
    </>
  );
}

export default ProjectsPageList;
