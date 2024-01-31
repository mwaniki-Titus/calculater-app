import React from 'react'
import BackGround from "../assets/images/profile-background.png"
import Avatar from "../assets/images/Avatar.png"
import './Top.scss'

const Top = () => {
  return (
    <div className="Top">
      <div className="BackGround">
        <div className="bigimage">
          <img className="top-img" src={BackGround} alt="" />
          <img className="avatar"src={Avatar} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Top;