import React from 'react';
import { NavLink } from 'react-router-dom'; // Import NavLink
import timeline from '../assets/images/layout-grid.png';
import friends from '../assets/images/users.png';
import groups from '../assets/images/star.png';
import video from '../assets/images/video.png';
import photos from '../assets/images/image.png';
import Events from '../assets/images/calendar.png';
import './SideItems.scss';

function SideItems() {
  const items = [
    {
      name: 'Timeline',
      icon: timeline,
      path: '/timeline', 
    },
    {
      name: 'Friends',
      icon: friends,
      path: '/friends', 
    },
    {
      name: 'Groups',
      icon: groups,
      path: '/groupsx', 
    },
    {
      name: 'Videos',
      icon: video,
      path: '/Videos', 
    },
    {
      name: 'Photos',
      icon: photos,
      path: '/photos', 
    },
    {
      name: 'Events',
      icon: Events,
      path: '/events', 
    },
  ];

  return (
    <div className="side-menu">
      <div className="menu-heading">
        <h3>Menu</h3>
      </div>
      <div className="menu-list">
        {items &&
          items.map((item, index) => (
            <NavLink
              to={item.path}
              className="menu-item"
              activeClassName="active" 
              key={index}
            >
              <img src={item.icon} alt={item.name} />
              <p>{item.name}</p>
            </NavLink>
          ))}
      </div>
    </div>
  );
}

export default SideItems;

