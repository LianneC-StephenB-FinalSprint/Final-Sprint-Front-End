import React, { useState, useEffect } from 'react';
import FlightTable from '../components/FlightTable';
import AirportSelector from '../components/AirportSelector';
import { fetchFlights } from '../services/api';

const HomePage = () => {
    const [selectedAirport, setSelectedAirport] = useState(null);
    const [flights, setFlights] = useState([]);

    useEffect(() => {
        if (selectedAirport) {
            fetchFlights(selectedAirport.id).then(setFlights);
        }
    }, [selectedAirport]);

    return (
        <div>
            <h1>Arrivals and Departures</h1>
            <AirportSelector onSelectAirport={setSelectedAirport} />
            <FlightTable flights={flights} />
        </div>
    );
};

export default HomePage;