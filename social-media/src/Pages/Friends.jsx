import React from 'react';
import wade from "../assets/images/Avatar.png";
import jane from "../assets/images/Avatar1.png";
import esther from "../assets/images/Avatar2.png";
import cameron from "../assets/images/Avatar3.png";
import brooklyn from "../assets/images/Avatar4.png";

const Friends = () => {
  const friends = [
    {
      icon: wade,
      name: 'Angela Lee'
    },
    {
      icon: jane,
      name: 'Jane Cooper'
    },
    {
      icon: esther,
      name: 'Esther Howard'
    },
    {
      icon: cameron,
      name: 'Camerron Williamson'
    },
    {
      icon: brooklyn,
      name: 'Brooklyn Simmons'
    },
    {
      icon: wade,
      name: 'Angela Lee'
    },
    {
      icon: jane,
      name: 'Jane Cooper'
    },
    {
      icon: esther,
      name: 'Esther Howard'
    },
    {
      icon: cameron,
      name: 'Camerron Williamson'
    },
    {
      icon: brooklyn,
      name: 'Brooklyn Simmons'
    }
  ];

  return (
      <div className="FriendsMenu">
        {friends &&
          friends.map((item, index) => (
            <div className='FriendsContainer' key={index}>
              <div className="ContactItem">
                <img src={item.icon} alt={item.name} />
                <p>{item.name}</p>
              </div>
            </div>
          ))}
      </div>
     );
}

export default Friends;
