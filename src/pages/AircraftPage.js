import React, { useEffect, useState } from 'react';
import { fetchAircraft } from '../services/api';
import backgroundImage from '../assets/Background01.jpg';
import '../styles/OtherPage.css';

const AircraftPage = () => {
    const [aircraft, setAircraft] = useState([]);

    useEffect(() => {
        fetchAircraft().then((data) => setAircraft(data));
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
                <h1>Aircraft</h1>
                <ul>
                    {aircraft.map((plane) => (
                        <li key={plane.id} className="page-li">
                            {plane.type} - {plane.airlineName} ({plane.numberOfPassengers} seats)
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default AircraftPage;