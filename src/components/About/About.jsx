import React from 'react'
import { FaDownload } from "react-icons/fa";
import "./About.scss"
import { Link } from 'react-router-dom';
const About = () => {
  return (
    <div id='about' className='about'>
      <div className="pic">
        {/* <img src={process.env.PUBLIC_URL + '/assets/logo.png'} alt="" srcset="" /> */}
      </div>
      <div className="details">
        <div className="about-me">
          <h2>About me</h2>
          <p>Welcome to my corner of the web! I'm a passionate coder with a strong foundation in the MERN stack. Building meaningful applications and solving complex problems is not just what I do; it's what I love.</p>
        </div>
        <div className="contact-me">
          <div className="contact-details">
            <h2>Contact Details</h2>
            <li>Explore Coded Project</li>
            <li>Berhampur,Odisha</li>
            <li>761009</li>
            <li>+91-6371699410</li>
            <li>harikrishnacode050@gmail.com</li>
          </div>
          <button ><Link className="btn-resume" to="https://docs.google.com/document/d/1O6CjYOw_ZUmfO30VyX9MG84ZFghyN7g9/edit"><FaDownload />Download Resume</Link></button>
        </div>
      </div>
    </div>
  )
}

export default About
