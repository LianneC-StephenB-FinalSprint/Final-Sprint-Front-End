import React from 'react';

const AirportSelector = ({ airports, onSelectAirport }) => {
    return (
        <div>
            <label htmlFor="airportSelect">Select an Airport:</label>
            <select id="airportSelect" onChange={(e) => onSelectAirport(airports.find(a => a.id === parseInt(e.target.value)))}>
                <option value="">Select an Airport</option>
                {airports.map((airport) => (
                    <option key={airport.id} value={airport.id}>
                        {`${airport.name} (${airport.code}) - ${airport.cityName}, ${airport.cityState}`}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default AirportSelector;