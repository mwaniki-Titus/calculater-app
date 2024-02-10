import React from 'react';
import './RightContent.scss';
import AvatarImg from '../assets/images/Avatar.png';
import VideoIcon from '../assets/images/video.png';
import StarIcon from '../assets/images/star.png';
import ImageIcon from '../assets/images/image.png';
import PostImage1 from '../assets/images/post-image1.png';
import PostImage2 from '../assets/images/post-image2.png';
import HeartIcon from '../assets/images/heart.png';
import SmileIcon from '../assets/images/mood-smile.png';
import LinkIcon from '../assets/images/link.png';
import MessageIcon from '../assets/images/message-circle.png';
import ShareIcon from '../assets/images/share.png';

const RightContent = () => {
  return (
    <div className='content-right'>
      <div className="top-section">
        <div className="profile">
          <img src={AvatarImg} alt="" />
        </div>
        <div className="user-input">
          <input className='input-text' type="text" placeholder='Whats on your mind ?' />
        </div>
      </div>
      <div className="bottom-section">
        <div className="img">
          <img src={VideoIcon} alt="" />
          <p>Live Video</p>
        </div>
        <div className="img">
          <img src={ImageIcon} alt="" />
          <p>Image/Video</p>
        </div>
        <div className="img">
          <img src={StarIcon} alt="" />
          <p>Activity</p>
        </div>
      </div>
      <div className="post-info">
        <div className="user">
          <img src={AvatarImg} alt="" />
          <div className="info">
            <p>Angela Lee</p>
            <p>56 mins</p>
          </div>

          
        </div>
        <div className="post-text">
          <p>Here are some photography works that I made on the weekend with some of my friends, happy for that!</p>
        </div>
        <div className="post-images">
          <img src={PostImage1} alt="" />
          <img src={PostImage2} alt="" />
        </div>
        <div className="post-actions">
          <div className="likes">
            <img src={HeartIcon} alt="" />
            <p>2.6k <span>Likes</span></p>
          </div>
          <div className="comments">
            <img src={MessageIcon} alt="" />
            <p>297 <span>comments</span></p>
          </div>
          <div className="shares">
            <img src={ShareIcon} alt="" />
            <p>201 <span>Share</span></p>
          </div>
        </div>
        <div className="message-input">
          <input type="text" placeholder='Write your message...' />
          <div className="icons">
            <img src={SmileIcon} alt="" />
            <img src={LinkIcon} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightContent;
