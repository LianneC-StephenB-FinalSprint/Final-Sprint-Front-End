import React, { useState } from 'react';
import FlightForm from '../components/FlightForm';
import { createFlight } from '../services/api';
import backgroundImage from '../assets/Background01.jpg';

const AdminPage = () => {
    const [message, setMessage] = useState('');

    const handleFlightSubmit = async (flightData) => {
        const response = await createFlight(flightData);
        if (response.success) setMessage('Flight added successfully!');
    };

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
            <h1>Admin Panel</h1>
            <FlightForm onSubmit={handleFlightSubmit} />
            {message && <p>{message}</p>}
        </div>
    );
};

export default AdminPage;