import React from 'react';
import search from "../assets/images/search-icon.png";
import desin from "../assets/images/Group2.png";
import phone from "../assets/images/Mask Group.png";
import Avatar from "../assets/images/Avatar (9).png";
import shortshort from "../assets/images/shortshort.png";
import './Groupsx.scss'


const Groupsx = () => {
  return (
    <div className="all">
      <div className='above'>
        <h1>Groupsx</h1>
        <img src={search} alt="" />
        <button id='ff' type="button">+Create New Group</button>
      </div>
      <div className="part">
        <h5>Suggested for you</h5>
        <p>Groups you might be interested in</p>
      </div>
      <div className="groprmgs">
      <div className="next1">
        <div className="next">
          <div className="con">
            <img src={desin} alt="" />
            <div className="infonext">
            <h5>UI/UX Designer</h5>
            <p>Bandung. 7 posts a day</p>
            </div>
          </div>
          <div className="imgjoin">
          <img src={phone} alt="" />
        </div>
        <div className='join'>
          <button type="button">Join Group</button>
          <img src={Avatar} alt="" />
          <img src={Avatar} alt="" />
          <img src={Avatar} alt="" />
          <img src={Avatar} alt="" />
        </div>
        </div>
        <div className="next">
          <div className="con">
            <img src={desin} alt="" />
            <div className="infonext">
            <h5>UI/UX Designer</h5>
            <p>Bandung. 7 posts a day</p>
            </div>
          </div>
          <div className="imgjoin">
          <img src={phone} alt="" />
        </div>
        <div className='join'>
          <button type="button">Join Group</button>
          <img src={Avatar} alt="" />
          <img src={Avatar} alt="" />
          <img src={Avatar} alt="" />
          <img src={Avatar} alt="" />
        </div>
        </div>
        </div>
      </div>
      <div className="next3">
        <h5>Recent Activity</h5>
      </div>
      <div className="ee">
        <p>Angela Lee . 56 mins ago</p>
      </div>
      <div className="hh">
        <p>Conduct design process best practices across projects such as gathering insights, validating problems</p>
      </div>
      <div className="botton">
        <img src={shortshort} alt="" />
        <img src={shortshort} alt="" />
      </div>
    </div>
  );
};

export default Groupsx;
