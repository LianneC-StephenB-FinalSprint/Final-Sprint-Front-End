import React, { useState, useEffect } from 'react';
import { createFlight, createGate, createAirline, fetchAirports, fetchAirlines, fetchGates, fetchAircraft } from '../services/api';
import FlightForm from '../components/FlightForm';
import GateForm from '../components/GateForm';
import AirlineForm from '../components/AirlineForm';
import backgroundImage from '../assets/Background01.jpg';
import image from '../assets/Airplane01.png';

const AdminPage = () => {
    const [formData, setFormData] = useState({
        flightNumber: '',
        departureTime: '',
        arrivalTime: '',
        originAirportId: '',
        destinationAirportId: '',
        aircraftId: '',
        gateName: '', // Updated from gateId to gateName
        airlineId: '',
    });

    const [gateData, setGateData] = useState({
        name: '',
        terminal: '',
    });

    const [airlineData, setAirlineData] = useState({
        name: '',
        code: '',
    });

    const [airports, setAirports] = useState([]);
    const [airlines, setAirlines] = useState([]);
    const [gates, setGates] = useState([]);
    const [aircraft, setAircraft] = useState([]);
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const airportData = await fetchAirports();
                setAirports(airportData);

                const airlineData = await fetchAirlines();
                setAirlines(airlineData);

                const gateData = await fetchGates();
                setGates(gateData);

                const aircraftData = await fetchAircraft();
                setAircraft(aircraftData);
            } catch (err) {
                console.error('Error fetching data:', err);
            }
        };

        fetchData();
    }, []);

    const handleFlightChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
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

        if (!formData.originAirportId || !formData.destinationAirportId || !formData.aircraftId || !formData.gateName || !formData.airlineId) {
            setError('Please fill in all the required fields.');
            return;
        }

        try {
            const payload = {
                flightNumber: formData.flightNumber,
                departureTime: formData.departureTime,
                arrivalTime: formData.arrivalTime,
                originAirportId: formData.originAirportId,
                destinationAirportId: formData.destinationAirportId,
                aircraftId: formData.aircraftId,
                gateName: formData.gateName, // Updated payload
                airlineId: formData.airlineId,
            };

            console.log('Payload:', payload);

            await createFlight(payload);
            setMessage('Flight created successfully!');
            setFormData({
                flightNumber: '',
                departureTime: '',
                arrivalTime: '',
                originAirportId: '',
                destinationAirportId: '',
                aircraftId: '',
                gateName: '',
                airlineId: '',
            });
        } catch (err) {
            console.error('Error creating flight:', err);
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
                terminal: gateData.terminal,
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
                code: airlineData.code,
            };
            await createAirline(payload);
            setMessage('Airline created successfully!');
            setAirlineData({ name: '', code: '' });
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
                        formData={formData}
                        handleChange={handleFlightChange}
                        handleSubmit={handleFlightSubmit}
                        airports={airports}
                        airlines={airlines}
                        gates={gates}
                        aircraft={aircraft}
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
                        formData={airlineData}
                        handleChange={handleAirlineChange}
                        handleSubmit={handleAirlineSubmit}
                    />
                </div>
                {message && <p style={{ color: 'green' }}>{message}</p>}
                {error && <p style={{ color: 'red' }}>{error}</p>}
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

export default AdminPage;