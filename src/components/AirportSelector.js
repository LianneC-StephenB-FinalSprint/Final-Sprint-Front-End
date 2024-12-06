import React, { useEffect, useState } from 'react';
import { fetchAirports } from '../services/api';

const AirportSelector = ({ onSelectAirport }) => {
    const [airports, setAirports] = useState([]);

    useEffect(() => {
        fetchAirports().then(setAirports);
    }, []);

    return (
        <select onChange={(e) => onSelectAirport(airports.find(a => a.id === e.target.value))}>
            <option value="">Select an Airport</option>
            {airports.map((airport) => (
                <option key={airport.id} value={airport.id}>
                    {airport.name}
                </option>
            ))}
        </select>
    );
};

export default AirportSelector;