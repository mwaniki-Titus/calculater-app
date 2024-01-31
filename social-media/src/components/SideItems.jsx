// UpdatedSideMenu.jsx

import React from 'react';
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
    },
    {
      name: 'Friends',
      icon: friends,
    },
    {
      name: 'Groups',
      icon: groups,
    },
    {
      name: 'Videos',
      icon: video,
    },
    {
      name: 'Photos',
      icon: photos,
    },
    {
      name: 'Events',
      icon: Events,
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
            <div className="menu-item" key={index}>
              <img src={item.icon} alt={item.name} />
              <p>{item.name}</p>
            </div>
          ))}
      </div>
    </div>
  );
}

export default SideItems;

