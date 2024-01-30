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
import Person12DesignIcon from '../assets/images/avatar (1).png';
import Person13DesignIcon from '../assets/images/video.png';
import Person14DesignIcon from '../assets/images/image.png';
import Person15DesignIcon from '../assets/images/star.png';
import Person16DesignIcon from '../assets/images/avatar (1).png';
import Person17DesignIcon from '../assets/images/unsplash_c1rOy44wuts.png';
import Person18DesignIcon from '../assets/images/unsplash_XeYx043QD5U.png';
import Person19DesignIcon from '../assets/images/heart.png';
import Person20DesignIcon from '../assets/images/icon.png';
import Person21DesignIcon from '../assets/images/share.png';

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
    { icon: Person10DesignIcon, label: '' },
    { icon: Person11DesignIcon, label: '' },
  ];

  const avatar = [
    { icon: Person12DesignIcon, label: '' },
  ];

  const bottom = [
    { icon: Person13DesignIcon, label: '' },
    { icon: Person14DesignIcon, label: '' },
    { icon: Person15DesignIcon, label: '' },
  ];

  const para2 = [
    { icon: Person16DesignIcon, label: '' },
    { icon: Person17DesignIcon, label: '' },
    { icon: Person18DesignIcon, label: '' },
    { icon: Person19DesignIcon, label: '' },
    { icon: Person20DesignIcon, label: '' },
    { icon: Person21DesignIcon, label: '' },
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
                {/* Your "complete your profile" section goes here */}
              </div>
              <div className="intro">
                <div className="range">
                  {/* Your range input goes here */}
                </div>
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
              <div className="av">
                {avatar.map((item, index) => (
                  <div key={index}>
                    <img src={item.icon} alt={item.label} />
                    <input type="text" placeholder={item.label} />
                  </div>
                ))}
                <div className="below">
                  {bottom.map((item, index) => (
                    <div key={index}>
                      <img src={item.icon} alt={item.label} />
                    </div>
                  ))}
                </div>
                <div className="down">
                  {para2.map((item, index) => (
                    <div key={index}>
                      <img src={item.icon} alt={item.label} />
                    </div>
                  ))}
                </div>
                <form>
                  <input type="text" placeholder="Write your message" />
                  <button type="submit">Send</button>
                </form>
              </div>
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



