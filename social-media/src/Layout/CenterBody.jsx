import React from 'react'
import './CenterBody.scss'
import CenterContent from '../components/CenterContent'
import RightContent from '../components/RightContent'



const CenterBody = () => {
  return (
    <div className='center-body'>
        <CenterContent />
        <RightContent />


    </div>
  )
}

export default CenterBody