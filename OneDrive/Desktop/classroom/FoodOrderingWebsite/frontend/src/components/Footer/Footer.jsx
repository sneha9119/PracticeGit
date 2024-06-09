import React from 'react'
import { assets } from '../../assets/assets'
import './Footer.css'
const Footer = () => {
  return (
    <div className='Footer' id='footer'>
      <div className='footer-content'>
        <div className='footer-content-left'>
        <img src={assets.logo} alt=''/>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <div className='footer-social-icons'>
        <img src={assets.facebook_icon} alt=""/>
        <img src={assets.twitter_icon} alt=""/>
        <img src={assets.linkedin_icon} alt=""/>
        </div>
        </div>
        <div className='footer-content-center'>
        <h2>Company</h2>
        <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
        </ul>
        </div>
        <div className='footer-content-right'>
        <h2>Get in Touch</h2>
        <ul>
            <li>+1-212-456-7890</li>
            <li>contact@gmail.com</li>
        </ul>
        </div>
      </div>
      <hr/>
      <p className="footer-copyright">copyright 2024 @Tamato.com</p>
    </div>
  )
}

export default Footer
