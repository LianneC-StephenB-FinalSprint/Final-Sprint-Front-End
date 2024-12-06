import React, { useState } from 'react';
import FlightForm from '../components/FlightForm';
import { createFlight } from '../services/api';

const AdminPage = () => {
    const [message, setMessage] = useState('');

    const handleFlightSubmit = async (flightData) => {
        const response = await createFlight(flightData);
        if (response.success) setMessage('Flight added successfully!');
    };

    return (
        <div>
            <h1>Admin Panel</h1>
            <FlightForm onSubmit={handleFlightSubmit} />
            {message && <p>{message}</p>}
        </div>
    );
};

export default AdminPage;