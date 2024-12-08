import React, { useState } from 'react';
import { createFlight, createGate, createAirline } from '../services/api';
import FlightForm from '../components/FlightForm';
import GateForm from '../components/GateForm';
import AirlineForm from '../components/AirlineForm';
import backgroundImage from '../assets/Background01.jpg';
import image from '../assets/Airplane01.png';

const AdminPage = () => {
    const [flightData, setFlightData] = useState({
        flightNumber: '',
        departureTime: '',
        arrivalTime: '',
        originAirportId: '',
        destinationAirportId: '',
        aircraftId: '',
        gateId: '',
        airlineId: '',
    });

    const [gateData, setGateData] = useState({
        name: '',
        terminal: ''
    });

    const [airlineData, setAirlineData] = useState({
        name: '',
        code: ''
    });

    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    const handleFlightChange = (e) => {
        const { name, value } = e.target;
        setFlightData({ ...flightData, [name]: value });
    };

    const handleGateChange = (e) => {
        const { name, value } = e.target;
        setGateData({ ...gateData, [name]: value });
    };

    const handleAirlineChange = (e) => {
        const { name, value } = e.target;
        setAirlineData({ ...airlineData, [name]: value });
    };

    const handleFlightSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setMessage('');
        try {
            const payload = {
                flightNumber: flightData.flightNumber,
                departureTime: flightData.departureTime,
                arrivalTime: flightData.arrivalTime,
                originAirport: { id: flightData.originAirportId },
                destinationAirport: { id: flightData.destinationAirportId },
                aircraft: { id: flightData.aircraftId },
                gate: { id: flightData.gateId },
                airline: { id: flightData.airlineId }
            };
            await createFlight(payload);
            setMessage('Flight created successfully!');
            setFlightData({
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

    const handleGateSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setMessage('');
        try {
            const payload = {
                name: gateData.name,
                terminal: gateData.terminal
            };
            await createGate(payload);
            setMessage('Gate created successfully!');
            setGateData({ name: '', terminal: '' });
        } catch (err) {
            setError('Failed to create gate. Please check the input.');
        }
    };

    const handleAirlineSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setMessage('');
        try {
            const payload = {
                name: airlineData.name,
                code: airlineData.code
            };
            await createAirline(payload);
            setMessage('Airline created successfully!');
            setAirlineData({ name: '', code: '' }); // Reset the form
        } catch (err) {
            setError('Failed to create airline. Please check the input.');
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
            }}
        >
            <div className="content-container">
                <h1>Admin Panel</h1>
                <div className="page-li">
                <FlightForm
                    formData={flightData}
                    handleChange={handleFlightChange}
                    handleSubmit={handleFlightSubmit}
                />
                </div>
                <div className="page-li">
                <GateForm
                    formData={gateData}
                    handleChange={handleGateChange}
                    handleSubmit={handleGateSubmit}
                />
                </div>
                <div className="page-li">
                <AirlineForm
                    formData={airlineData}  // Pass airlineData instead of flightData
                    handleChange={handleAirlineChange}  // Pass handleAirlineChange to AirlineForm
                    handleSubmit={handleAirlineSubmit}  // Pass handleAirlineSubmit to AirlineForm
                />
                </div>
                {/* Display success or error message */}
                {message && <p style={{ color: 'green' }}>{message}</p>}
                {error && <p style={{ color: 'red' }}>{error}</p>}
            </div>
            <div className="center-image">
            <img className="airplane-image" src={image} alt="Airplane" style={{ width: '55%', height: 'auto', borderRadius: '10px' }} />
        </div>
        </div>
    );
};

export default AdminPage;