import React, { useState, useEffect } from 'react';
import FlightTable from '../components/FlightTable';
import AirportSelector from '../components/AirportSelector';
//import { fetchFlights } from '../services/api';
import backgroundImage from '../assets/Background01.jpg';
import image from '../assets/Airplane01.png';
import '../styles/HomePage.css';

const HomePage = ({ airports }) => {
    const [selectedAirport, setSelectedAirport] = useState(null);
    const [flights, setFlights] = useState([]);
    const [viewMode, setViewMode] = useState('departures'); // 'arrivals' or 'departures'

    useEffect(() => {
        if (selectedAirport) {
            const flightsToSet = viewMode === 'departures' ? selectedAirport.departingFlights : selectedAirport.arrivingFlights;
            setFlights(flightsToSet);
        } else {
            setFlights([]);
        }
    }, [selectedAirport, viewMode]);

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
                    <h1>Welcome to the Airport Management System</h1>

                    <hr/>
                <h2>Airport Flight Viewer</h2>
               <h3>Select an Airport to View Details</h3>
                <AirportSelector airports={airports} onSelectAirport={setSelectedAirport} />
                {selectedAirport && (
                    <div>
                        <h2>{`${selectedAirport.name} (${selectedAirport.code})`}</h2>
                        <div>
                            <button onClick={() => setViewMode('departures')} disabled={viewMode === 'departures'}>
                                View Departures
                            </button>
                            <button onClick={() => setViewMode('arrivals')} disabled={viewMode === 'arrivals'}>
                                View Arrivals
                            </button>
                        </div>
                         <h3>Arrivals and Departures</h3>
                        <div className="page-li">
                        <FlightTable flights={flights} />
                        </div>

                    </div>
                )}
            </div>
            <div className="center-image">
                                        <img
                                            className="airplane-image"
                                            src={image}
                                            alt="Airplane"
                                            style={{ width: '55%', height: 'auto', borderRadius: '10px' }}
                                        />
                                    </div>
        </div>
    );
};

export default HomePage;