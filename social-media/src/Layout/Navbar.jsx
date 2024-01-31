import './Navbar.scss';
import LogoIcon from '../assets/images/logo.png'
import Responsive from '../assets/images/responsive.png'
import NavIcon from '../components/NavIcon';
import ActiveNotification from '../assets/images/active-notification.png'
import Profile from '../assets/images/Avatar1.png'
import Chevron from '../assets/images/chevron-down.png'
import Message from '../assets/images/message-circle.png'
import SearchForm from '../components/SearchForm';

const Navbar=()=>{
    return (
       <div className="navbar">
        <div className="nav-logo">
        <img src={Responsive} alt={Responsive} />
        <img src={LogoIcon} alt={LogoIcon} />
            
        </div>
        <div className="right-nav">
            <div className="nav-input">
                <SearchForm/>
            </div>
            <div>
            <div className="nav-icons">
            <NavIcon url={Message}/>
            <NavIcon url={ActiveNotification}/>
            <img className="profile" width={80} src={Profile} alt="profile"/>
            <NavIcon url={Chevron}/>
            </div>
            </div>
        </div>
       </div>
    )
};

export default Navbar;