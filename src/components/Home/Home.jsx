import React,{useState} from 'react'
import { GoProjectRoadmap } from "react-icons/go";
import { FaGithub } from "react-icons/fa";
import "./Home.scss"
import About from '../About/About';
import Contact from '../Contact/Contact';
import Works from '../Works/Works';
const Home = () => {
  return (
    <>
      <section id='home' className="container">
        <div className='home'>
          <div className="project-title">
            <h1>Nordic-Giant Project</h1>
          </div>
          <div className="desc">
            I am a web development engineer and I use react and vue.js to develop pages. This project is a resume template that can be used as the project home page or resume page.
          </div>
          <div className="links">
            <div className="link"><GoProjectRoadmap /><a href="">Project</a></div>
            <div className="link"><FaGithub /><a href="">Github</a></div>

          </div>
        </div>
      </section>{" "}
      <section>
        <About />
      </section>
      <section><Works /></section>
      <section><Contact /></section>
    </>
  )
}

export default Home
