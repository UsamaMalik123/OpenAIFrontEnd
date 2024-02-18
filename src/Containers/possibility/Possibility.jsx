import React from 'react'
import './possibility.css'
import PossibilityImage from '../../assets/possibility.png'
const Possibility = () => {
  return (
    <div className='gpt3__possibility section__padding' id='possibility'>
      
      <div className='gpt3__possibility-leftside'>
        <img src={PossibilityImage} alt=''/>
      </div>
      <div className='gpt3__possibility-rightside'>
          <p className='gpt3__possibility-rightside-toptext'> Request Early Access to Get Started</p>
          <h1 className='gradient__text'>The possibilities are beyond your imagination</h1>
          <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
          <p className='bottom-text'>Request Early Access to Get Started</p>
      </div>
    </div>
  )
}

export default Possibility