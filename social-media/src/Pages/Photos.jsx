import React from 'react';
import Mask from "../assets/images/Mask Group (1).png"; 
import matt from "../assets/images/unsplash_QRKJwE6yfJo.png"; 
import mapp from "../assets/images/unsplash_X3ijISYzlM4.png"; 
import mopp from "../assets/images/unsplash_X3ijISYzlM4.png"; 

const Photos = () => {
  return (
    <div>
      <h1>Photos</h1>
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
