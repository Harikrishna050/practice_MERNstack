import React ,{useState ,useEffect}from 'react'
// import { Fragment, createContext, useState } from "react";
import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Works from "./components/Works/Works";
import Footer from "./components/Footer/Footer";
import SignIn from './components/SignIn/SignIn';
import SignUp from './components/SignUp/SignUp';
import ForgotPassword from './components/ForgotPassword/ForgotPassword';
import WorkItem from './components/WorkItem/WorkItem';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.scss";
import { UserAuthContextProvider } from './context/useContext';
// import ProtectedRoute from './components/ProtectedRoute';
import SuccessContact from './components/SuccessContact/SuccessContact';
import axios from "axios";

axios.defaults.baseURL = "http://localhost:8080";


function App() {
//cart-crud get operation
const [cartItems, setCartItems] = useState([]);
  const getFetchData = async () => {
    try {
        const data = await axios.get("/cart");
        if (data.data.success) {
            setCartItems(data.data.data);
        } else {
            alert("something went wrong")
        }
    } catch (error) {
        console.error("An error occurred while fetching data:", error);
        alert("Something went wrong");
    }
}

useEffect(() => {
    getFetchData();
}, []);


  return (
    <Router>
    <div className='app'>
      <UserAuthContextProvider>
      <NavBar cartItems={cartItems} setCartItems={setCartItems} />
        <Routes>
        <Route path="/" element={
          // <ProtectedRoute>
            <Home />
          // </ProtectedRoute>
        } />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/works/:id" element={<WorkItem setCartItems={setCartItems} />} />
          <Route path="/succes" element={<SuccessContact />} />
          
        </Routes>
        </UserAuthContextProvider>
        <Footer />

    </div>
    </Router>
  )
}

export default App
