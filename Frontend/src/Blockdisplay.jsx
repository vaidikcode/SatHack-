
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Blockdisplay.css';  

const Blockdisplay = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/blockdisplay');  
        setData(response.data);
      } catch (error) {
        console.error('Error fetching block display data', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className='w-screen h-screen' id='pg'>
      <nav className="navbar">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-10 items-center justify-between">
            <div className="flex items-center">
            <div className="shrink-0">
                <img className="logo" src="" alt="Logo" />
              </div>
            </div>
            <div className="nav-links">
              <a to="/" className="home-a">Home</a>
              <a to="/" className="home-a">About Us</a>
              <a to="/" className="home-a">Contact Us</a>
  
            </div>
          </div>
        </div>
      </nav>
    <div className="blockdisplay-container">
      <h2><b>Block Display</b></h2>

      {data.length > 0 ? (
  
        data.map((book, index) => (
          <div key={index}>
            <h2>Hash: {book.Hash}</h2>
            <h2>Previous Hash: {book.PrevHash}</h2>
            <h2>Position: {book.Pos}</h2>
          </div>
        ))
      ) : (
        <p>Loading or no data available...</p>
      )}

      <div className='h-13'>
        <button onClick={() => navigate('/')}>Back to Dashboard</button>
        <button onClick={() => navigate('/emissionrate')}>Get Emission Rate</button>
        <button onClick={() => navigate('/leaderboard')}>Get Leaderboard</button>
      </div>
    </div>
    </div>
  );
}

export default Blockdisplay;
