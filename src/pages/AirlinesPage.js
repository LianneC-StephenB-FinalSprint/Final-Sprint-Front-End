import React, { useEffect, useState } from 'react';
import { fetchAirlines } from '../services/api';
import backgroundImage from '../assets/Background01.jpg';
import '../styles/OtherPage.css';

const AirlinesPage = () => {
    const [airlines, setAirlines] = useState([]);

    useEffect(() => {
        fetchAirlines().then(setAirlines);
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
            <h1>Airlines</h1>
            <ul >
                {airlines.map((airline) => (
                    <li key={airline.id} className="page-li">{airline.name}</li>
                ))}
            </ul>
        </div>
        </div>
    );
};

export default AirlinesPage;