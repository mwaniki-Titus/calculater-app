import React from 'react';
import TalkIcon from '../assets/images/icon.png'
import  BellIcon from '../assets/images/Group.png'
import EllipseIcon from '../assets/images/Ellipse 13.png'
import AvaIcon from '../assets/images/avatar (1).png'
import './Navbar.scss'


const Navbar = () => {
  return (
    <nav className="navbar">
       <input type="text" placeholder="Search..." />
      <div className="cons">
        <img src={TalkIcon} alt="" />
        <img src={BellIcon} alt="" />
        <img src={EllipseIcon} alt="" />
        <img src={AvaIcon} alt="" />
      </div>
      
    </nav>
  );
};

export default Navbar;
