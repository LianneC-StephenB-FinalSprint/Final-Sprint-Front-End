// src/pages/FlightsPage.js
import React, { useEffect, useState } from 'react';
import { fetchFlights } from '../services/api'; // Ensure this is implemented and functional
import FlightTable from '../components/FlightPageTable';
import '../styles/OtherPage.css';
import backgroundImage from '../assets/Background01.jpg';

const FlightsPage = () => {
    const [flights, setFlights] = useState([]);
    const [error, setError] = useState(null); // Track errors for debugging

    useEffect(() => {
        const getFlights = async () => {
            try {
                const response = await fetchFlights(); // Fetch flight data
                if (!response || !Array.isArray(response)) {
                    throw new Error('Invalid data format from fetchFlights');
                }
                setFlights(response);
            } catch (err) {
                console.error('Error fetching flights:', err);
                setError(err.message);
            }
        };
        getFlights();
    }, []);

    return (
        <div
                    style={{
                        backgroundImage: `url(${backgroundImage})`, // Set background image
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                        minHeight: '100vh', // Ensure it covers the viewport height
                    }}
                >
                <div className="content-container">
            <h1>Flights</h1>
            {error && <p className="error">Error: {error}</p>}
            <FlightTable flights={flights} />
        </div>
        </div>
    );
};

export default FlightsPage;