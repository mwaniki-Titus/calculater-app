import React from 'react';
import './CenterContent.scss';
import VectorIcon from '../assets/images/Group.png';
import LinkIcon from '../assets/images/link.png';
import RoundVectorIcon from '../assets/images/Vectoround.png';
import UnsplashImage from '../assets/images/photo-image1.png';

const CenterContent = () => {
  return (
    <div className='content'>
      <div className="profile">
        <h5>Complete your profile</h5>
        <div>
          <progress value="80" max="100"></progress>
          <span>80%</span>
        </div>
      </div>
      <div className="description">
        <div className='about'>
          <h4>About</h4>
          <p>I am an experienced joiner with well-developed skills</p>
        </div>
        <div>
          <div className="location">
            <img src={VectorIcon} alt="" />
            <p>29272 Westheimer Rd.</p>
          </div>
          <div className="company">
            <img src={LinkIcon} alt="" />
            <p>Binford Ltd.</p>
          </div>
          <div className="date">
            <img src={RoundVectorIcon} alt="" />
            <p>September 24, 2017</p>
          </div>
          <div className="website">
            <img src={VectorIcon} alt="" />
            <p>drible.com/Angela</p>
          </div>
        </div>
      </div>
      <div className="gallery">
        <div className="all">
          <h4>Gallery</h4>
          <button className='see-all'>
          <p>See-all</p>
        </button>
          
        </div>
        <div className="images">
          <img src={UnsplashImage} alt="" />
          <img src={UnsplashImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default CenterContent;
