import React, { useState } from 'react';
import './Navbar.scss';
import LogoIcon from '../assets/images/logo.png';
import Responsive from '../assets/images/responsive.png';
import NavIcon from '../components/NavIcon';
import ActiveNotification from '../assets/images/active-notification.png';
import Profile from '../assets/images/Avatar.png';
import Chevron from '../assets/images/chevron-down.png';
import Message from '../assets/images/message-circle.png';
import MenuIcon from '../assets/images/menu.png'; 
import SearchForm from '../components/SearchForm';
import Notifications from '../Pages/Notification';

const Navbar = () => {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const handleNotificationsClick = () => {
    setShowNotifications(!showNotifications);
  };

  const handleMenuClick = () => {
    setShowMenu(!showMenu); 
  };

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={LogoIcon} alt="Logo" />
      </div>
      <div className="right-nav">
      <img src={MenuIcon} className="menu-icon" alt="Menu" onClick={handleMenuClick} />
        <div className="nav-input">
          <SearchForm />
        </div>
        <div>
          <div className="nav-icons">
            <NavIcon url={Message} />
            <div className="notification-icon" onClick={handleNotificationsClick}>
              <NavIcon url={ActiveNotification} />
              {showNotifications && <Notifications />}
            </div>
            <img className="profile" width={80} src={Profile} alt="Profile" />
            <NavIcon url={Chevron} />
             
          </div>
          <img src={Responsive} alt="Responsive" />
        </div>
      </div>
     {showMenu && <div className="menu-content">Menu Content Here</div>}
    </div>
  );
};

export default Navbar;

