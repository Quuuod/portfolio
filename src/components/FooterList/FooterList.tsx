import './FooterList.css';
import FooterListLi from '../FooterListLi/FooterListLi';
import vk from '../../images/icons/vk.svg';
import instagram from '../../images/icons/instagram.svg';
import twitter from '../../images/icons/twitter.svg';
import gitHub from '../../images/icons/gitHub.svg';
import linkedIn from '../../images/icons/linkedIn.svg';

function FooterList() {
  return (
    <ul className="social">
      <FooterListLi href="#!" img={vk} />
      <FooterListLi href="#!" img={instagram} />
      <FooterListLi href="#!" img={twitter} />
      <FooterListLi href="#!" img={gitHub} />
      <FooterListLi href="#!" img={linkedIn} />
    </ul>
  );
}

export default FooterList;
