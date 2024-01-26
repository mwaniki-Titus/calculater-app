import React from 'react';
import MenuIcon from '../assets/images/menu.png';
import LogoIcon from '../assets/images/logo.png';
import AvaterIcon from  '../assets/images/Avatar.png'
// import TimeICon from  '../assets/images/layout-grid.png'
// import FriendsIcon from '../assets/images/users.png'
// import GroupsIcon from '../assets/images/star.png'
// import VideosIcon from '../assets/images/video.png '
// import PhotosIcon from '../assets/images/photo.png'
// import EventsIcon from '../assets/images/calendar.png'
import './Sidebar.scss'

const Sidebar = () => {
  return (
    <aside className="sidebar">
     <div className="logo">
        <img src={MenuIcon}alt="" />
        <img src={LogoIcon} alt="" />
     </div>

     <div className='avater'>
        <img src={AvaterIcon} alt="" />
        <div className="cont">
        <h2>Angela Lee</h2>
        <p>@anglee</p>
     </div>
     </div>

        <div className='manu'>
        <h3>MENU</h3> 
        </div>

        {/* <img src={TimeICon} alt="" />
        <img src={FriendsIcon}alt="" />
        <img src= {GroupsIcon}alt="" />
        <img src= {VideosIcon} alt="" />
        <img src= {PhotosIcon} alt="" />
        <img src= {EventsIcon} alt="" /> */}

        

     {/* </div> */}
    </aside>
  );
};

export default Sidebar;
