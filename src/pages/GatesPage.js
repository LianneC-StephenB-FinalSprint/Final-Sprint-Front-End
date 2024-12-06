import React, { useEffect, useState } from 'react';
import { fetchGates } from '../services/api';

const GatesPage = () => {
    const [gates, setGates] = useState([]);

    useEffect(() => {
        fetchGates().then(setGates);
    }, []);

    return (
        <div>
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