import React from 'react';
import MenuIcon from '../assets/images/menu.png';
import LogoIcon from '../assets/images/logo.png';
import AvatarIcon from '../assets/images/Avatar.png';
import TimeIcon from '../assets/images/layout-grid.png';
import FriendsIcon from '../assets/images/users.png';
import GroupsIcon from '../assets/images/star.png';
import VideosIcon from '../assets/images/video.png';
import PhotosIcon from '../assets/images/photo.png';
import EventsIcon from '../assets/images/calendar.png';
import WebsiteDesignIcon from '../assets/images/Rectangle 556 (1).png';
import MobileDesignIcon from '../assets/images/Rectangle 556 (2).png';
import ProductDesignIcon from '../assets/images/Rectangle 556.png';
import './Sidebar.scss';

const Sidebar = () => {
  const menuItems = [
    { icon: TimeIcon, label: 'Time' },
    { icon: FriendsIcon, label: 'Friends' },
    { icon: GroupsIcon, label: 'Groups' },
    { icon: VideosIcon, label: 'Videos' },
    { icon: PhotosIcon, label: 'Photos' },
    { icon: EventsIcon, label: 'Events', value: 10 },
  ];

  const shortcuts = [
    { icon: WebsiteDesignIcon, label: 'Website Design' },
    { icon: MobileDesignIcon, label: 'Mobile Design' },
    { icon: ProductDesignIcon, label: 'Product Design' },
  ];

  return (
    <aside className="sidebar">
      <div className="logo">
        <img src={MenuIcon} alt="Menu Icon" />
        <img src={LogoIcon} alt="Logo" />
      </div>

      <div className='avatar'>
        <img src={AvatarIcon} alt="Avatar" />
        <div className="content">
          <h2>Angela Lee</h2>
          <p>@anglee</p>
        </div>
      </div>

      <div className='menu'>
        <h3>MENU</h3>
        {/* Render menu items dynamically */}
        {menuItems.map((item, index) => (
          <div key={index} className="menu-item">
            <img src={item.icon} alt={item.label} />
            <span>{item.label}</span>
            {item.value !== undefined && <span>{item.value}</span>}
          </div>
        ))}
      </div>

      <div className='shortcuts'>
        <h3>SHORTCUTS</h3>
        {/* Render shortcut items dynamically */}
        {shortcuts.map((shortcut, index) => (
          <div key={index} className="shortcut-item">
            <img src={shortcut.icon} alt={shortcut.label} />
            <span>{shortcut.label}</span>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;


