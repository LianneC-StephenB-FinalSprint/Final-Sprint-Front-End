import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import FlightTable from '../components/FlightTable';
import { fetchFlights } from '../services/api';

const AirportDetailsPage = () => {
    const { id } = useParams();
    const [flights, setFlights] = useState([]);

    useEffect(() => {
        fetchFlights(id).then(setFlights);
    }, [id]);

    return (
        <div>
            <h1>Airport Details</h1>
            <FlightTable flights={flights} />
        </div>
    );
};

export default AirportDetailsPage;