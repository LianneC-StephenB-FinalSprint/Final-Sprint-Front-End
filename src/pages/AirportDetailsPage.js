import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import FlightTable from '../components/FlightTable';
import { fetchFlights } from '../services/api';
import backgroundImage from '../assets/Background01.jpg';

const AirportDetailsPage = () => {
    const { id } = useParams();
    const [flights, setFlights] = useState([]);

    useEffect(() => {
        fetchFlights(id).then(setFlights);
    }, [id]);

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
            <h1>Airport Details</h1>
            <FlightTable flights={flights} />
        </div>
    );
};

export default AirportDetailsPage;