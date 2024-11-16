
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './EmissionRate.css';  

const EmissionRate = () => {
  const [emissionData, setEmissionData] = useState(null);

  useEffect(() => {
    const fetchEmissionRate = async () => {
      try {
        const response = await axios.get('http://localhost:3000/emissionrate');
        setEmissionData(response.data);
      } catch (error) {
        console.error('Error fetching emission rate data:', error);
      }
    };

    fetchEmissionRate();
  }, []);

  return (
    <div className='h-screen w-screen' id='pg'>
    <div className="emission-container">
      <h2>Emission Rate</h2>

      {emissionData ? (
        <div>
          <h3>Emission Rate: {emissionData.carbonEmission}</h3>
        </div>
      ) : (
        <p>Loading emission rate...</p>
      )}

      <button onClick={() => window.history.back()}>Go Back</button>
    </div>
    </div>
  );
};

export default EmissionRate;
