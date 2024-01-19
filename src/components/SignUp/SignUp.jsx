import React from 'react'
import { useState } from 'react';
import { Form, Alert } from "react-bootstrap";
import { Link, useNavigate } from 'react-router-dom';
import GoogleButton from "react-google-button";
import "./SignUp.scss";
import { useUserAuth } from '../../context/useContext';
const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { signUp } = useUserAuth();
  const navigate = useNavigate();

  const handleSubmit=async(e)=>{
    e.preventDefault();
    try {
      await signUp(email,password);
      navigate("/");
    } catch (err) {
      setError(err.message);
      
    }
  }
  return (
    <div className='sign-up'>
      <div className="heading"><h1>Welcome back. We exist to make entrepreneurship easier.</h1></div>
      <div className="sign-up-form">
        <GoogleButton
          className="g-btn"
          type="dark"
        /><div className="alternate">
          <div className="ins">
            <div className="div"></div>
            <span>Or, register with your email
            </span>
            <div className="div"></div>
          </div>
          {error && <Alert variant="danger">{error}</Alert>}
          <form onSubmit={handleSubmit} action="">
            <label htmlFor="" >Email</label>
            <input type="email" name="" id="" onChange={(e) => {
              setEmail(e.target.value)
            }} placeholder='Enter Email' />
            <label htmlFor="">Password</label>
            <input type="password" name="" id="" onChange={(e) => {
              setPassword(e.target.value)
            }} placeholder='Enter Password' />
            <div className="terms-cond">
              <input type="checkbox" id="termsCond" name="termsCond" />
              <span>I agree to be contacted by Open PRO about this offer as per the Open PRO Privacy Policy.</span>
            </div>
            <button type="submit">Sign up</button>
          </form>
          <div className="sign-in-service">
            <span>Already using Open PRO?</span>
            <Link className='text-dec' to="/signin">Sign in</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp
