import React, { useState, useEffect } from 'react';
import { createFlight, createGate, createAirline, createAircraft, createAirport, createCity, fetchAirports, fetchCities, fetchAirlines, fetchGates, fetchAircraft, fetchFlights, deleteFlight } from '../services/api';
import FlightForm from '../components/FlightForm';
import GateForm from '../components/GateForm';
import AirlineForm from '../components/AirlineForm';
import AirportForm from '../components/AirportForm';
import CityForm from '../components/CityForm';
import DeleteFlightForm from '../components/DeleteFlightForm';
import backgroundImage from '../assets/Background01.jpg';
import image from '../assets/Airplane01.png';
import AircraftForm from '../components/AircraftForm'; // Import the AircraftForm component

const AdminPage = () => {
    const [formData, setFormData] = useState({
        flightNumber: '',
        departureTime: '',
        arrivalTime: '',
        originAirportId: '',
        destinationAirportId: '',
        aircraftId: '',
        gateName: '',
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

    const [aircraftData, setAircraftData] = useState({
        airlineName: '',
        type: '',
        numberOfPassengers: '',
    });

    const [airportFormData, setAirportFormData] = useState({
        name: '',
        code: '',
        cityId: '', // Store the city ID here
    });


    const [cityFormData, setCityFormData] = useState({
        name: '',
        state: '',
        population: '',
    });

    const [airports, setAirports] = useState([]);
    const [airlines, setAirlines] = useState([]);
    const [gates, setGates] = useState([]);
    const [aircraft, setAircraft] = useState([]);
    const [flights, setFlights] = useState([]);
    const [selectedFlightId, setSelectedFlightId] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const [cities, setCities] = useState([]);

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

                const flightData = await fetchFlights();
                setFlights(flightData);

                const cityData = await fetchCities(); // Fetch cities
                setCities(cityData);
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

    const handleAircraftChange = (e) => {
        const { name, value } = e.target;
        setAircraftData({ ...aircraftData, [name]: value });
    };

    const handleAirportFormChange = (e) => {
        const { name, value } = e.target;
        setAirportFormData({ ...airportFormData, [name]: value });
    };

    const handleCityFormChange = (e) => {
        const { name, value } = e.target;
        setCityFormData({ ...cityFormData, [name]: value });
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
                gateName: formData.gateName,
                airlineId: formData.airlineId,
            };

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
            const updatedFlights = await fetchFlights();
            setFlights(updatedFlights);
        } catch (err) {
            setError('Failed to create flight. Please check the input.');
        }
    };

    const handleDelete = async (e) => {
        e.preventDefault();
        setError('');
        setMessage('');

        if (!selectedFlightId) {
            setError('Please select a flight to delete.');
            return;
        }

        try {
            await deleteFlight(selectedFlightId);
            setMessage('Flight deleted successfully!');
            setSelectedFlightId('');
            const updatedFlights = await fetchFlights();
            setFlights(updatedFlights);
        } catch (err) {
            setError('Failed to delete flight.');
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

    const handleAircraftSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setMessage('');
        try {
            const payload = {
                airlineName: aircraftData.airlineName,
                type: aircraftData.type,
                numberOfPassengers: aircraftData.numberOfPassengers,
            };
            await createAircraft(payload);
            setMessage('Aircraft created successfully!');
            setAircraftData({ airlineName: '', type: '', numberOfPassengers: '' });
        } catch (err) {
            setError('Failed to create aircraft. Please check the input.');
        }
    };

    const handleAirportSubmit = async (e) => {
            e.preventDefault();
            setError('');
            setMessage('');

            if (!airportFormData.name || !airportFormData.code || !airportFormData.cityId) {
                setError('Please fill in all the required fields.');
                return;
            }

            try {
                const payload = {
                    name: airportFormData.name,
                    code: airportFormData.code,
                    city: { id: airportFormData.cityId }, // Send the city ID here
                };

                await createAirport(payload);
                setMessage('Airport created successfully!');
                setAirportFormData({ name: '', code: '', cityId: '' });
                const updatedAirports = await fetchAirports();
                setAirports(updatedAirports);
            } catch (err) {
                setError('Failed to create airport. Please check the input.');
            }
        };

         const handleCitySubmit = async (e) => {
                e.preventDefault();
                setError('');
                setMessage('');

                if (!cityFormData.name || !cityFormData.state || !cityFormData.population) {
                    setError('Please fill in all the required fields.');
                    return;
                }

                try {
                    const payload = {
                        name: cityFormData.name,
                        state: cityFormData.state,
                        population: cityFormData.population,
                    };

                    await createCity(payload);
                    setMessage('City created successfully!');
                    setCityFormData({ name: '', state: '', population: '' });
                } catch (err) {
                    setError('Failed to create city. Please check the input.');
                }
            };

    const handleSelectChange = (e) => {
        setSelectedFlightId(e.target.value);
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
                    <DeleteFlightForm
                        flights={flights}
                        selectedFlightId={selectedFlightId}
                        handleSelectChange={handleSelectChange}
                        handleDelete={handleDelete}
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
                <div className="page-li">
                    <AircraftForm
                        formData={aircraftData}
                        handleChange={handleAircraftChange}
                        handleSubmit={handleAircraftSubmit}
                    />
                </div>
                <div className="page-li">
                    <CityForm
                        formData={cityFormData}
                        handleChange={handleCityFormChange}
                        handleSubmit={handleCitySubmit}
                    />
                </div>
                <div className="page-li">
                <AirportForm
                                formData={airportFormData}
                                handleChange={handleAirportFormChange}
                                handleSubmit={handleAirportSubmit}
                                cities={cities} // Pass cities data to the form
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