import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Leaderboard.css'; // Add CSS for styling

function Leaderboard() {
    const [leaderboard, setLeaderboard] = useState([]);
    const [loading, setLoading] = useState(true); // Track loading state

    useEffect(() => {
        const fetchLeaderboard = async () => {
            try {
                // Fetch the emission rate of your company from backend
                const response = await axios.get('http://localhost:3000/leaderboard');
                const backendEmission = response.data.carbonEmission; // Get the emission value from backend

                // Generate a list of companies with random emission values
                const companies = [
                    { companyName: 'CodeCrafters', carbonEmission: backendEmission }, // Your company data
                    { companyName: ' GreenCore Industries', carbonEmission: getRandomEmission() },
                    { companyName: 'EcoSphere Manufacturing', carbonEmission: getRandomEmission() },
                    { companyName: ' CarbonLite Solutions', carbonEmission: getRandomEmission() },
                    { companyName: 'FutureSteo Enterprises', carbonEmission: getRandomEmission() },
                    { companyName: ' Purepath Systems', carbonEmission: getRandomEmission() },
                ];

                // Sort companies by emission rate in ascending order
                companies.sort((a, b) => a.carbonEmission - b.carbonEmission);

                setLeaderboard(companies);
                setLoading(false); // Stop loading after data is fetched and sorted
            } catch (error) {
                console.error('Error fetching leaderboard data:', error);
                setLoading(false); // Stop loading even if there's an error
            }
        };

        fetchLeaderboard();
    }, []);

    // Generate a random emission value (just for other companies)
    const getRandomEmission = () => {
        return Math.floor(Math.random() * 1000) + 1; // Random value between 1 and 1000
    };

    if (loading) {
        return <p className="loading-text">Loading leaderboard...</p>;
    }

    return (
        <div className="leaderboard-container">
            <h2>Blockchain Emission Leaderboard</h2>

            {leaderboard && leaderboard.length > 0 ? (
                <table className="leaderboard-table">
                    <thead>
                        <tr>
                            <th>Rank</th>
                            <th>Company</th>
                            <th>Emission Rate (kg CO2)</th>
                        </tr>
                    </thead>
                    <tbody>
                        {leaderboard.map((entry, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{entry.companyName}</td>
                                <td>{entry.carbonEmission}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p>No leaderboard data available.</p>
            )}
        </div>
    );
}

export default Leaderboard;
