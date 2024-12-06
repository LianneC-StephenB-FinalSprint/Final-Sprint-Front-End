import React, { useEffect, useState } from 'react';
import { fetchGates } from '../services/api';
import backgroundImage from '../assets/Background01.jpg';

const GatesPage = () => {
    const [gates, setGates] = useState([]);

    useEffect(() => {
        fetchGates().then(setGates);
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
            <h1>Gates</h1>
            <ul>
                {gates.map((gate) => (
                    <li key={gate.id}>Gate {gate.number}</li>
                ))}
            </ul>
        </div>
    );
};

export default GatesPage;