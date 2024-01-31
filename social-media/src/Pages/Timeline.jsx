import React from 'react';
import wade from "../assets/images/Avatar.png";
import jane from "../assets/images/Avatar1.png";
import esther from "../assets/images/Avatar2.png";
import cameron from "../assets/images/Avatar3.png";
import brooklyn from "../assets/images/Avatar4.png";
import AvatarImg from "../assets/images/Avatar.png";
import VideoIcon from "../assets/images/video.png";
import StarIcon from "../assets/images/star.png";
import HeartIcon from "../assets/images/heart.png";
import MessageIcon from "../assets/images/message-circle.png";
import ShareIcon from "../assets/images/share.png";
import SmileIcon from "../assets/images/mood-smile.png";
import LinkIcon from "../assets/images/link.png";
import PostImage1 from "../assets/images/photo-image1.png";
import PostImage2 from "../assets/images/photos-image2.png";

const Timeline = () => {
  const friends = [
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
    },
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
    <div className="Timeline">
      <h3>Your Timeline</h3>
      <div className="FriendsMenu">
        {friends &&
          friends.map((item, index) => (
            <div className='FriendsContainer' key={index}>
              <div className="ContactItem">
                <img src={item.icon} alt={item.name} />
                <p>{item.name}</p>
              </div>
            </div>
          ))}
      </div>
      <div className='content-right'>
        <div className="top-section">
          <div className="profile">
            <img src={AvatarImg} alt="" />
          </div>
          <div className="user-input">
            <input className='input-text' type="text" placeholder='Whats on your mind ?'/>
          </div>
        </div>
        <div className="bottom-section">
          <div className="img">
            <img src={VideoIcon} alt="" />
            <p>Live Video</p>
          </div>
          <div className="img">
            <img src={StarIcon} alt="" />
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
    </div>
  );
};

export default Timeline;
