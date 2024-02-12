import React from 'react'
import './Bottom.scss'
import CenterBody from '../Layout/CenterBody'

const Bottom = () => {
  return (
    <div className='bottom'>
      <div className="top">
        <div className="info">
          Angela Lee <br />
          @angela
        </div>
        <div className="stats">
          <div className="post">
            <h3 className='header'>POSTS</h3><br />
            683
          </div>
          <div className="post">
            <h3 className='header'>FRIENDS</h3><br />
            5.7K
          </div>
          <div className="post">
            <h3 className='header'>PHOTOS</h3><br />
            296
          </div>
          <div className="post">
            <h3 className='header'>LIKES</h3><br />
            10.7K
          </div>
        </div>
      </div>

      <CenterBody />
    </div>
  )
}

export default Bottom
