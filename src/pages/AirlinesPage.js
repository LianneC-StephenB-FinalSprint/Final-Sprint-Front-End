import React, { useEffect, useState } from 'react';
import { fetchAirlines } from '../services/api';

const AirlinesPage = () => {
    const [airlines, setAirlines] = useState([]);

    useEffect(() => {
        fetchAirlines().then(setAirlines);
    }, []);

    return (
        <div>
            <h1>Airlines</h1>
            <ul>
                {airlines.map((airline) => (
                    <li key={airline.id}>{airline.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default AirlinesPage;