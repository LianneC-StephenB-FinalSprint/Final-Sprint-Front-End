import React, { useState } from 'react';
import { createFlight } from '../services/api';
import backgroundImage from '../assets/Background01.jpg';

const AdminPage = () => {
    const [formData, setFormData] = useState({
        flightNumber: '',
        departureTime: '',
        arrivalTime: '',
        originAirportId: '',
        destinationAirportId: '',
        aircraftId: '',
        gateId: '',
        airlineId: '',
    });

    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setMessage('');
        try {
            const payload = {
                flightNumber: formData.flightNumber,
                departureTime: formData.departureTime,
                arrivalTime: formData.arrivalTime,
                originAirport: { id: formData.originAirportId },
                destinationAirport: { id: formData.destinationAirportId },
                aircraft: { id: formData.aircraftId },
                gate: { id: formData.gateId },
                airline: { id: formData.airlineId }
            };
            const response = await createFlight(payload);
            setMessage('Flight created successfully!');
            setFormData({
                flightNumber: '',
                departureTime: '',
                arrivalTime: '',
                originAirportId: '',
                destinationAirportId: '',
                aircraftId: '',
                gateId: '',
                airlineId: ''
            });
        } catch (err) {
            setError('Failed to create flight. Please check the input.');
        }
    };

    return (
        <div
            style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                minHeight: '100vh',
                padding: '20px',
                color: '#fff',
            }}
        >
            <h1>Admin Panel</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="flightNumber"
                    placeholder="Flight Number"
                    value={formData.flightNumber}
                    onChange={handleChange}
                    required
                />
                <input
                    type="datetime-local"
                    name="departureTime"
                    value={formData.departureTime}
                    onChange={handleChange}
                    required
                />
                <input
                    type="datetime-local"
                    name="arrivalTime"
                    value={formData.arrivalTime}
                    onChange={handleChange}
                    required
                />
                <input
                    type="number"
                    name="originAirportId"
                    placeholder="Origin Airport ID"
                    value={formData.originAirportId}
                    onChange={handleChange}
                    required
                />
                <input
                    type="number"
                    name="destinationAirportId"
                    placeholder="Destination Airport ID"
                    value={formData.destinationAirportId}
                    onChange={handleChange}
                    required
                />
                <input
                    type="number"
                    name="aircraftId"
                    placeholder="Aircraft ID"
                    value={formData.aircraftId}
                    onChange={handleChange}
                    required
                />
                <input
                    type="number"
                    name="gateId"
                    placeholder="Gate ID"
                    value={formData.gateId}
                    onChange={handleChange}
                />
                <input
                    type="number"
                    name="airlineId"
                    placeholder="Airline ID"
                    value={formData.airlineId}
                    onChange={handleChange}
                    required
                />
                <button type="submit">Create Flight</button>
            </form>
            {message && <p style={{ color: 'green' }}>{message}</p>}
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
    );
};

export default AdminPage;