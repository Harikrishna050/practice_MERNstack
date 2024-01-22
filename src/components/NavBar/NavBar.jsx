import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import "./NavBar.scss";
import { useUserAuth } from '../../context/useContext';
import { useNavigate } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import Cart from '../../pages/Cart/Cart';


const NavBar = (props) => {
  const { user, SignOut } = useUserAuth();
  const navigate = useNavigate();
  const [cartOpen,setCartOpen]=useState(false);


  const handleLogOut = async () => {
    try {
      const confirmed = window.confirm("Do you want to log out of your account?");

      if (confirmed) {
        await SignOut();
        alert("Successfully logged out.");
        navigate("/");
      }
    } catch (error) {
      console.error(error.message);
    }

  }
  return (
    <>
    <nav className='navbar'>
      <div className="logo">
        <Link to="/"><img src={process.env.PUBLIC_URL + '/assets/logo.png'} alt="Asset" /></Link>
      </div>
      <div className="mid">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><a href='#about'>About</a></li>
          <li><a href='#about'>Resume</a></li>
          <li><a href='#works'>Works</a></li>
          <li><a href='#contact'>Contact</a></li>
        </ul>
      </div>
      <div className="right">
        {user ? (
          <>
            <button className="sign-out-btn" onClick={handleLogOut}>Sign Out</button>
            <button className="cart-btn" onClick={()=>{setCartOpen(!cartOpen)}}><FaShoppingCart /></button>
          </>
        ) : (
          <>
            <Link to="/signin">
              <button className="sign-in-btn">Sign In</button>
            </Link>
            <Link to="/signup">
              <button className="sign-up-btn">Sign Up</button>
            </Link>
          </>
        )}
      </div>
    </nav>

    {cartOpen && <Cart cartOpen={cartOpen} cartItems={props.cartItems} setCartItems={props.setCartItems} ></Cart>}
    </>
  )
}

export default NavBar
