import React from 'react'
import { WorkTypes } from '../../data';
import "./Works.scss";
import { Link } from 'react-router-dom';
import { FaStar } from "react-icons/fa";
const Works = () => {
  return (
    <section id='works' className='works'>
      <h3>CHECK OUT SOME OF MY WORKS.</h3>
      <div className="work">
      {WorkTypes.map((d)=>(
        <Link className='text-dec' to={`/works/${d.id}`}>
        <div className="item">
          <img src={d.img} alt="" srcset="" />
          <h4>{d.title}</h4>
          <div className="rating">
            <div className="rate">
              <span>{d.rating}</span><FaStar />
            </div>
            <div className="votes">
              <span>({d.votes})</span>
            </div>
          </div>
          <div className="price-details">
            <span>${d.price}</span>
            <span>{d.offer}% off</span>
          </div>
        </div>
        </Link>
      ))}
      </div>
    </section>
  )
}

export default Works
