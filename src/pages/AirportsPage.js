import React, { useEffect, useState } from 'react';
import { fetchAirports } from '../services/api';
import backgroundImage from '../assets/Background01.jpg';
import '../styles/OtherPage.css';

const AirportsPage = () => {
    const [airports, setAirports] = useState([]);

    useEffect(() => {
        fetchAirports().then((data) => setAirports(data));
    }, []);

    return (
        <div
            style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                minHeight: '100vh',
            }}
        >
            <div className="content-container">
                <h1>Airports</h1>
                <ul>
                    {airports.map((airport) => (
                        <li key={airport.id} className="page-li">
                            {airport.name} ({airport.code}) - {airport.cityName}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default AirportsPage;