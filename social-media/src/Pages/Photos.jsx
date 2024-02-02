import React from 'react';
import Mask from "../assets/images/palbum7  (2).png"; 
import matt from "../assets/images/palbum1.png"; 
import mapp from "../assets/images/palbum2.png"; 
import mopp from "../assets/images/palbum7  (1).png";

 

import './Photos.scss'

const Photos = () => {
  return (
    <div className='photobum'>
      <div className="yourphotos">
      <h1>Your Photos</h1>
      </div>
      <div className="photos-content">
        <h5>Photos About You</h5>
        <p>Your Photos</p>
        <p>Albums</p>
        </div>
        <div className="total">
          <h5>Total Photos</h5>
          <p>42 Total Photos About You</p>
        </div>
      <div className="images">
        <img src={Mask} alt="" />
        <img src={matt} alt="" />
        <img src={mapp} alt="" />
        <img src={mopp} alt="" />
       
      </div>
    </div>
  );
};

export default Photos;
