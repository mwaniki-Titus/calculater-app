import React from 'react';
import searh from "../assets/images/search-icon.png";
import mgs from "../assets/images/usesr.png"; 
import nnn from "../assets/images/Mask Group (5).png"
import shortshort from "../assets/images/shortshort.png";

const Videos = () => {
  return (
    <div className="vv">
      <div className='uu'>
        <h1>Video</h1>
        <img src={searh} alt="Search Icon" />
      </div>
      <div className="pp">
        <h5>Categories to explore</h5>
        <button type="button">See all</button>
      </div>

      <div className="v1">
        <div className="qq">
          <img src={nnn} alt="" />
        </div>
        <div className="in">
          <p>Music</p>
          <img src={mgs} alt="Music Icon" />
        </div>
        <div className="see">
          <button type="button">See all</button>
        </div>
        <div className="qq">
          <img src={nnn} alt="" />
        </div>
        <div className="in">
          <p>Music</p>
          <img src={mgs} alt="Music Icon" />
        </div>
        <div className="see">
          <button type="button">See all</button>
        </div>
      </div>

      <div className="hh">
        <p>Conduct design process best practices across projects such as gathering insights, validating problems</p>
      </div>
      <div className="2mms">
        <img src={shortshort} alt="" />
        <img src={shortshort} alt="" />
      </div>
    </div>
  );
};

export default Videos;

