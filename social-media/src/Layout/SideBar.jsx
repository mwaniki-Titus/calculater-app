import './SideBar.scss';
import SideItems from '../components/SideItems';
import ShortCuts from '../components/ShortCuts';
import SideProfile from '../components/SideProfile';

const SideBar=()=>{
    return (
        <div className='sidenav'>
         <div className="SideProfile">
        <SideProfile />
         </div>
        <div className="menu">
            <SideItems/>
        </div>
        <div className="shortCuts">
        <ShortCuts />
      </div>
        </div>
    )
};

export default SideBar;