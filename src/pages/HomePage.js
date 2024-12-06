import React, { useState, useEffect } from 'react';
import FlightTable from '../components/FlightTable';
import AirportSelector from '../components/AirportSelector';
import { fetchFlights } from '../services/api';
import backgroundImage from '../assets/Background01.jpg';
import image from '../assets/Airplane01.png';
import '../styles/HomePage.css';

const HomePage = () => {
    const [selectedAirport, setSelectedAirport] = useState(null);
    const [flights, setFlights] = useState([]);

    useEffect(() => {
        if (selectedAirport) {
            fetchFlights(selectedAirport.id).then(setFlights);
        }
    }, [selectedAirport]);

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
            <h1>Arrivals and Departures</h1>
            <AirportSelector onSelectAirport={setSelectedAirport} />
            <FlightTable flights={flights} />
            </div>
            <img className="airplane-image" src={image} alt="Airplane" style={{ width: '100%', height: 'auto', borderRadius: '10px' }} />
        </div>
    );
};

export default HomePage;