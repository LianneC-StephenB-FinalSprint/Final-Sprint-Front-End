import React, { useEffect, useState } from 'react';
import { fetchGates } from '../services/api';
import backgroundImage from '../assets/Background01.jpg';
import '../styles/OtherPage.css';
import image from '../assets/Airplane01.png';

const GatesPage = () => {
    const [gates, setGates] = useState([]);

    useEffect(() => {
        fetchGates().then((data) => {
            setGates(data);
        });
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
            <h1>Gates</h1>
            <ul >
                {gates.map((gate) => (
                    <li key={gate.id} className="page-li">
                        Gate {gate.name} - {gate.terminal} {/* Display both name and terminal */}
                    </li>
                ))}
            </ul>
        </div>
        <div className="center-image">
        <img className="airplane-image" src={image} alt="Airplane" style={{ width: '55%', height: 'auto', borderRadius: '10px' }} />
        </div>
        </div>
    );
};

export default GatesPage;