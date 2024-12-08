import React, { useEffect, useState } from 'react';
import { fetchAirports } from '../services/api';

const AirportSelector = ({ airports, onSelectAirport }) => {
    return (
        <div>
            <label htmlFor="airportSelect">Select an Airport:</label>
            <select id="airportSelect" onChange={(e) => onSelectAirport(airports.find(a => a.id === parseInt(e.target.value)))}>
                <option value="">Select an Airport</option>
                {airports.map((airport) => (
                    <option key={airport.id} value={airport.id}>
                        {`${airport.name} (${airport.code}) - ${airport.city.name}, ${airport.city.state}`}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default AirportSelector;