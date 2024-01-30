import React from 'react';
import SplashPhoto from '../assets/images/unsplash__nWaeTF6qo0 (1).png';
import AvatarIcon from '../assets/images/Avatar.png';
import WebsiteDesignIcon from '../assets/images/Rectangle 556 (1).png';
import MobileDesignIcon from '../assets/images/Rectangle 556 (2).png';
import ProductDesignIcon from '../assets/images/Rectangle 556.png';
import Person1DesignIcon from '../assets/images/Avatar (2).png';
import Person2DesignIcon from '../assets/images/Avatar (2).png';
import Person3DesignIcon from '../assets/images/Avatar (3).png';
import Person4DesignIcon from '../assets/images/Avatar (4).png';
import Person5DesignIcon from '../assets/images/Avatar (5).png';
import Product1DesignIcon from '../assets/images/Avatar (6).png';
import Product2DesignIcon from '../assets/images/Avatar (7).png';
import Product3DesignIcon from '../assets/images/Avatar (8).png';
import Person6DesignIcon from '../assets/images/map-pin.png';
import Person7DesignIcon from '../assets/images/briefcase.png';
import Person8DesignIcon from '../assets/images/calendar (1).png';
import Person9DesignIcon from '../assets/images/ink.png';
import Person10DesignIcon from '../assets/images/unsplash_c1rOy44wuts (1).png';
import Person11DesignIcon from '../assets/images/unsplash_XeYx043QD5U (1).png';
import './Body.scss';

const Body = () => {
  const yourPages = [
    { icon: WebsiteDesignIcon, label: 'Website Design' },
    { icon: MobileDesignIcon, label: 'Mobile Design' },
    { icon: ProductDesignIcon, label: 'Product Design' },
  ];

  const contacts = [
    { icon: Person1DesignIcon, label: 'Wade Warren' },
    { icon: Person2DesignIcon, label: 'Jane Cooper' },
    { icon: Person3DesignIcon, label: 'Esther Howard' },
    { icon: Person4DesignIcon, label: 'Cameron Williamson' },
    { icon: Person5DesignIcon, label: 'Brooklyn Simmons' },
  ];

  const groups = [
    { icon: Product1DesignIcon, label: 'Group 1' },
    { icon: Product2DesignIcon, label: 'Group 2' },
    { icon: Product3DesignIcon, label: 'Group 3' },
  ];

  const intro = [
    { icon: Person6DesignIcon, label: 'Jane Cooper' },
    { icon: Person7DesignIcon, label: 'Esther Howard' },
    { icon: Person8DesignIcon, label: 'Cameron Williamson' },
    { icon: Person9DesignIcon, label: 'Brooklyn Simmons' },
  ];

  const photos = [
    { icon: Person10DesignIcon, label: 'Photo 1' },
    { icon: Person11DesignIcon, label: 'Photo 2' },
  ];

  return (
    <main className="body">
      <div className="left">
        <div className="info">
          <img src={SplashPhoto} alt="Splash Image" />
          <div className="avatar">
            <img id="hh" src={AvatarIcon} alt="Avatar" />
            <div className="con">
              <h3>Angela Lee <br />@angle</h3>
              <div className="flex-column">
                <h5>Posts</h5>
                <p id='1'>683</p>
                <h5>Friends</h5>
                <p id='2'>5.7k</p>
                <h5>Photos</h5>
                <p id='3'>296</p>
                <h5>Likes</h5>
                <p id='4'>10.7k</p>
              </div>
            </div>
          </div>
          <div className="remaining-space">
            <div className="one">
            <div className="completeProf">
               
               </div>
               <div className="intro">
                <p>i am an experienced joiner with <br />well developed skills</p>
                 {intro.map((item, index) => (
                   <div key={index}>
                     <img src={item.icon} alt={item.label} />
                     <p>{item.label}</p>
                   </div>
                 ))}
               </div>
               <div>
                 <h2>Photos</h2>
                 <div className="ph">
                   {photos.map((photo, index) => (
                     <div key={index}>
                       <img src={photo.icon} alt={photo.label} />
                       <p>{photo.label}</p>
                     </div>
                   ))}
                 </div>
               </div>
                        </div>
            <div className="two">
             
            </div>
          </div>
        </div>
      </div>
      <div className="right">
        <div className="shortcuts">
          <h3>Your Pages</h3>
          {yourPages.map((shortcut, index) => (
            <div key={index} className="shortcut-item">
              <img src={shortcut.icon} alt={shortcut.label} />
              <span>{shortcut.label}</span>
            </div>
          ))}
        </div>

        <div className="contacts">
          <h3>Contacts</h3>
          {contacts.map((contact, index) => (
            <div key={index} className="contact-item">
              <img src={contact.icon} alt={contact.label} />
              <span>{contact.label}</span>
            </div>
          ))}
        </div>

        <div className="groups">
          <h3>Groups</h3>
          {groups.map((group, index) => (
            <div key={index} className="group-item">
              <img src={group.icon} alt={group.label} />
              <span>{group.label}</span>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Body;


