import React from 'react'
import './footer.css'
const Footer = () => {
  return (
    <div className='gpt3__footer  '>
      <div className='gpt3__footer-top-section'>
        <h1 className='gradient__text'>Do you want to step in to the future before others</h1>
        <div className='request_early_button'>
          <button>Request Early access</button>
        </div>
      </div>
      <div className='gpt3__footer-bottom-section'>
        <div className='gpt3__footer-bottom-section-content-container'>
          <div className='gpt3__footer-bottom-section-content-container-heading-left'>
            <h1>GPT-3</h1>
            <p>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
          </div>
          <div className='right_div_bottom'>
            <div className='links-div'>
              <p>Links</p>
              <p>Overons</p>
              <p>Social Media</p>
              <p>Counters</p>
              <p>Counters</p>
              <p>Contact</p>
            </div>
            <div className='Company-div'>
              <p>Company</p>
              <p>Terms & Conditions</p>
              <p>Privacy Policy</p>
              <p>Contact</p>
            </div>
            <div className='Getintouch-div'>
              <p>Get in touch</p>
              <p>Crechterwoord K12 182 DK Alknjkcb</p>
              <p>085-132567</p>
              <p>info@payme.net</p>
              
            </div>
          </div>
          
          
        </div>
        <p className='last_text'>© 2021 GPT-3. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer