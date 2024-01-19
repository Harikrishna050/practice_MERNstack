import {React,useState} from 'react'
import { Form, Alert } from "react-bootstrap";
import { Link, useNavigate } from 'react-router-dom';
import GoogleButton from "react-google-button";
import "./SignIn.scss";
import { useUserAuth } from '../../context/useContext';
const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { LogIn ,googleSignIn} = useUserAuth();
  const navigate = useNavigate();

  const handleSubmit=async(e)=>{
    console.log("hjbj")
    e.preventDefault();
    setError("");
    try {
      await LogIn(email,password);
      console.log("yes");
      navigate("/");
    } catch (err) {
      setError(err.message);
      
    }
  }

  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await googleSignIn();
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className='sign-in'>
      <div className="heading"><h1>Welcome back. We exist to make entrepreneurship easier.</h1></div>
      <div className="sign-in-form">
        <GoogleButton
          className="g-btn"
          type="dark"
          onClick={handleGoogleSignIn}
        />
        <div className="alternate">
          <div className="ins">
            <div className="div"></div>
            <span>Or, sign in with your email
            </span>
            <div className="div"></div>
          </div>
          {error && <Alert variant="danger">{error}</Alert>}
          <form onSubmit={handleSubmit} action="">
            <label htmlFor="email" >Email</label>
            <input type="email" name="" id="email" onChange={(e) => {
              setEmail(e.target.value)
            }} placeholder='Enter Your Email' />
            <label htmlFor="password">Password</label>
            <input type="password" name="" id="password" onChange={(e) => {
              setPassword(e.target.value)
            }} placeholder='Password (atleast 10 characters' />
            <div className="service">
              <div className="tick-box">
                <input type="checkbox" id="keepSignedIn" name="keepSignedIn" />
                <label for="keepSignedIn">Keep me signed in</label>
              </div>
              <Link className='text-dec' to="/forgot-password">Forgot Password?</Link>
            </div>
            <button type="submit">Sign in</button>
          </form>
          <div className="sign-up-service">
            <span>Do you have an account?</span>
            <Link className='text-dec' to="/signup">Sign up</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignIn
