import React from 'react';
import wade from "../assets/images/Avatar.png";
import jane from "../assets/images/Avatar1.png";
import esther from "../assets/images/Avatar2.png";
import cameron from "../assets/images/Avatar3.png";
import brooklyn from "../assets/images/Avatar4.png";
import './Friendsx.scss';

const Friendsx = () => {
  const friends = [
    {
      icon: wade,
      name: 'Angela Lee',
      email: '@anglee',
    },
    {
      icon: jane,
      name: 'Jane Cooper',
    },
    {
      icon: esther,
      name: 'Esther Howard',
      email: '@anglee',
    },
    {
      icon: cameron,
      name: 'Camerron Williamson',
      email: '@anglee',
    },
    {
      icon: brooklyn,
      name: 'Brooklyn Simmons',
      email: '@anglee',
    },
    {
      icon: wade,
      name: 'Angela Lee',
      email: '@anglee',
    },
    {
      icon: jane,
      name: 'Jane Cooper',
      email: '@anglee',
    },
    {
      icon: esther,
      name: 'Esther Howard',
      email: '@anglee',
    },
    {
      icon: cameron,
      name: 'Camerron Williamson',
      email: '@anglee',
    },
    {
      icon: brooklyn,
      name: 'Brooklyn Simmons',
      email: '@anglee',
    },
  ];

  return (
    <div className="FriendsMenux">
      {friends &&
        friends.map((item, index) => (
          <div className="FriendsContainerx" key={index}>
            <div className="ContactItemx">
              <img src={item.icon} alt={item.name} />
              <div className="chec">
              <p>{item.name}</p>
              <p>{item.email}</p> 
              </div>
            </div>
            <div className="btn">
              <button type="button">Message</button>
            </div>
          </div>
        ))}
    </div>
  );
}

export default Friendsx;


