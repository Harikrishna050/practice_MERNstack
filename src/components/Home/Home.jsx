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
            <h1>Code-Explorer</h1>
          </div>
          <div className="desc">
            I am a web development engineer and I use MERN stack to develop pages. This project is a resume template that showcase all my hands on projects.
          </div>
          <div className="links">
            <div className="link"><GoProjectRoadmap /><a href="#works">Project</a></div>
            <div className="link"><FaGithub /><a href="https://github.com/Harikrishna050?tab=repositories" >Github</a></div>

          </div>
        </div>
      </section>{" "}
      <section>
        <About />
      </section>
      <section id='works'><Works /></section>
      <section><Contact /></section>
    </>
  )
}

export default Home
