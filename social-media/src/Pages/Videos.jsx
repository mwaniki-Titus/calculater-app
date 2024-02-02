import React from 'react';
import searh from "../assets/images/search-icon.png";
import mgs from "../assets/images/usesr.png"; 
import uiux from "../assets/images/Group1.png"; 
import uxui from "../assets/images/Group3.png"; 
import nnn from "../assets/images/Mask Group (5).png"
import avatar from "../assets/images/Avatar (9).png"; 
import shortshort from "../assets/images/shortshort.png";
import './Videos.scss'

const Videos = () => {
  return (
    <div className="vid">
      <div className='vidoe'>
        <h1>Video</h1>
        <img src={searh} alt="Search Icon" />
      </div>
      <div className="catego">
        <h5>Categories to explore</h5>
        <button type="button">See all</button>
      </div>

      <div className="mag">
        <div className="musicc">
        <div className="imgtop">
            <img src={uxui} alt="" />
            <div className="inimg">
            <h5>UI/UX Designer</h5>
           <p>Bundang.7 post a day</p> 
            </div>
          </div>
          <div className="magge">
            <img id='vids' src={nnn} alt="" />
          </div>
          <div className="contentinside">
            <button type="button">Join group</button>
            <img src={mgs} alt="Music Icon" />
          </div>
        </div>

        <div className="musicc">
          <div className="imgtop">
            <img src={uiux} alt="" />
            <div className="inimg">
            <h5>UI/UX Designer</h5>
           <p>Bundang.7 post a day</p> 
            </div>
          </div>
          <div className="imagg">
            <img id='vids' src={nnn} alt="" /> 
          </div>
          <div className="contentinside">
            <button type="button">Join Group</button>
            <img src={mgs} alt="Music Icon" />
          </div>
        </div>
      </div>

      <div className="recent">
        <h4>Recent Activity</h4>
      </div>
      <div className="topof">
        <img src={avatar} alt="" />
        <div className="leftt">
        <h5>Design Ethusiast</h5>
        <p>Angela lee.56 mins ago</p>
        </div>
      </div>

      <div className="para">
        <p>Conduct design process best practices across projects such as gathering insights, validating problems</p>
      </div>
      <div className="check">
        <img src={shortshort} alt="" />
        <img src={shortshort} alt="" />
      </div>
    </div>
  );
};

export default Videos;


