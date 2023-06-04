import './HomePageSkillList.css';
import HomePageLi from '../HomePageLi/HomePageLi';

function HomePageSkillList() {
  return (
    <ul className="content-list">
      <HomePageLi
        title="Frontend"
        text={` JavaScript, TypeScript, ReactJS, TSX, ES6, FireBase, git(GitHub), HTML5, CSS3, NPM, TailwindCSS, 
        SASS/SCSS, local/session storages, asyncronous js, promise, fetch, async/await, WEB-API`}
      />
      <HomePageLi
        title="Languages"
        text={`English - B1,
               Russian - native,
               Ukraine - C1`}
      />
    </ul>
  );
}

export default HomePageSkillList;
