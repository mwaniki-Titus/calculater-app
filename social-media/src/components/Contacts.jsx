import React from 'react';
import './Contacts.scss';
import wade from "../assets/images/Avatar.png";
import jane from "../assets/images/Avatar1.png";
import esther from "../assets/images/Avatar2.png";
import cameron from "../assets/images/Avatar3.png";
import brooklyn from "../assets/images/Avatar4.png";

function Contacts() {
  const contacts = [
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
    <div className="Contacts">
      <div className="Heading">
        <p style={{ textTransform: "uppercase" }}>Contacts</p>
        <p style={{ color: "#2563EB" }}>See all</p>
      </div>
      <div className="ContactsMenu">
        {contacts &&
          contacts.map((item, index) => (
            <div className='ContactContainer' key={index}>
              <div className="ContactItem">
                <img src={item.icon} alt={item.name} />
                <p>{item.name}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Contacts;
