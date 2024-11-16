// src/pages/Checkout.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Checkout.css';  // Import the CSS file for styling

const Checkout = () => {
  const [checkoutData, setCheckoutData] = useState({
    username: '',
    checkoutDate: ''
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCheckoutData({ ...checkoutData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3000/blockdisplay', checkoutData); // Replace with your actual API endpoint
      navigate('/blockdisplay');
    } catch (error) {
      console.error('Error during checkout', error);
    }
  };

  return (
    <div className='w-screen h-screen ' id='pg'>
      <nav className="navbar">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-10 items-center justify-between">
            <div className="flex items-center">
            <div className="shrink-0">
                <img className="logo" src="" alt="Logo" />
              </div>
            </div>
            <div className="nav-links">
              <a to="/" className="home-link">Home</a>
              <a to="/" className="home-a">About Us</a>
              <a to="/" className="home-a">Contact Us</a>
  
            </div>
          </div>
        </div>
      </nav>
    <div className="checkout-container">
      <h2><b>Checkout Form</b></h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          value={checkoutData.username}
          onChange={handleChange}
          placeholder="Username"
        />
        <input
          type="date"
          name="checkoutDate"
          value={checkoutData.checkoutDate}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
    </div>
  );
}

export default Checkout;
