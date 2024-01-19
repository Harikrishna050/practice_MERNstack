import React from 'react'
import "./ForgotPassword.scss";
import { Link } from 'react-router-dom';
const ForgotPassword = () => {
  return (
    <div className='forgot-psswrd'>
      <div className="heading"><h1>Welcome back. We exist to make entrepreneurship easier.</h1></div>
      <div className="sign-in-form">
          <form  action="">
            <label htmlFor="" >Email:</label>
            <input type="email" name="" id="" placeholder='Enter Your Email'/>
            <button type="submit">Reset Password</button>
            <Link className='text-dec cancel'><span>Cancel</span></Link>
          </form>
      </div>
    </div>
  )
}

export default ForgotPassword
