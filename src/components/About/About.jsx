import React from 'react'
import { FaDownload } from "react-icons/fa";
import "./About.scss"
const About = () => {
  return (
    <div id='about' className='about'>
      <div className="pic">
        <img src={process.env.PUBLIC_URL + '/assets/profilepic.jpg'} alt="Asset" />
      </div>
      <div className="details">
        <div className="about-me">
          <h2>About me</h2>
          <p>Use this bio section as your way of describing yourself and saying what you do, what technologies you like to use or feel most comfortable with, describing your personality, or whatever else you feel like throwing in.</p>
        </div>
        <div className="contact-me">
          <div className="contact-details">
          <h2>Contact Details</h2>
          <li>Nordic-Giant Project</li>
          <li>(Your Street)</li>
          <li>(Your City) (Your State), (Your</li>
          <li>Zip/Postal Code)</li>
          <li>555-555-5555</li>
          <li>youremailhere@gmail.com</li>
          </div>
          <button className="btn-resume"><FaDownload />Download Resume</button>
        </div>
      </div>
    </div>
  )
}

export default About
