// Notification.jsx

import React from 'react';
import xicon from '../assets/images/close.close.png';
import wade from '../assets/images/Avatar.png';
import jane from '../assets/images/Avatar1.png';
import esther from '../assets/images/Avatar2.png';
import cameron from '../assets/images/Avatar3.png';
import brooklyn from '../assets/images/Avatar4.png';
import './Notification.scss';

const friends = [
  {
    icon: wade,
    name: 'Angela Lee',
  },
  {
    icon: jane,
    name: 'Jane Cooper',
  },
  {
    icon: esther,
    name: 'Esther Howard',
  },
  {
    icon: cameron,
    name: 'Cameron Williamson',
  },
  {
    icon: brooklyn,
    name: 'Brooklyn Simmons',
  },
];

const Notifications = ({ onClose }) => {
  return (
    <div className="bigmain">
      <div className="notification">
        <div className="noti">
          <h4>Notification</h4>
          <button onClick={onClose}>
            <img src={xicon} alt="X Icon" />
          </button>
        </div>
        <div className="allnote">
          <button type="button">All Notification</button>
          <button type="button">Unread</button>
        </div>
        <div className="tod">
          <h4>Today</h4>
        </div>
        <div className="people">
          {friends.map((friend, index) => (
            <div key={index} className="friend">
              <img src={friend.icon} alt={friend.name} />
              <p>{friend.name}</p>
            </div>
          ))}
        </div>
        <div className="yesterday">
          <h4>YESTERDAY</h4>
        </div>
      </div>
    </div>
  );
};

export default Notifications;


