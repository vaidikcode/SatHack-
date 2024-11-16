// src/pages/Dashboard.js
import React from 'react';
import { Link } from 'react-router-dom';
import  './Dashboard.css';
const Dashboard = () => {
  return (
    <div className="dashboard-container h-screen w-screen">
      {/* Navbar */}
      <nav className="navbar">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-10 items-center justify-between">
            <div className="flex items-center">
            <div className="shrink-0">
                <img className="logo" src="" alt="Logo" />
              </div>
            </div>
            <div className="nav-links">
              <Link to="/" className="home-link">Home</Link>
              <Link to="/" className="home-link">About Us</Link>
              <Link to="/" className="home-link">Contact Us</Link>
  
            </div>
          </div>
        </div>
      </nav>

      {/* Welcome Message Section */}
      <div className="welcome-message">
        <h1 className='mt-10'>Welcome to the Book Management System</h1>
        <Link to="/addbook">Go to Add Book</Link>
      </div>
    </div>
  );
}

export default Dashboard;
