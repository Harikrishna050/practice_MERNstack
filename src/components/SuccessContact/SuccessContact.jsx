import React from 'react'
import "./SuccessContact.scss"
import { FaRegStar } from "react-icons/fa";
const SuccessContact = (props) => {
    // const Delete=()=>{
    //     props.handleDelete(props.id);
    //     window.location = '/';
    // }
  return (
    <div className='contact-success'>
      <div className="star-icon">
      <FaRegStar className='icon'/>
      </div>
      <h3>Your Data Saved Successfully</h3>
    </div>
  )
}

export default SuccessContact
