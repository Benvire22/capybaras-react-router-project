import {Outlet} from 'react-router-dom';
import LinkCard from '../../components/LinkCard/LinkCard';
import findItemImg from '../../assets/img/find-item-game.png';
import modalsImg from '../../assets/img/modals.png';
import usersListImg from '../../assets/img/users-list.png';

const Portfolio = () => {
  return (
    <div className="row mb-5">
      <h1 className="text-warning my-4 mb-5">Мои прошлые работы</h1>
      <div className="col-12 d-flex justify-content-center gap-4 mb-5">
        <LinkCard path="find-item-game" info="Find item game" img={findItemImg}/>
        <LinkCard path="modals" info="Custom Modals and alerts components" img={modalsImg}/>
        <LinkCard path="users-list" info="Add users container" img={usersListImg}/>
      </div>
      <Outlet/>
    </div>
  );
};

export default Portfolio;