import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AdminPage from './pages/AdminPage';
import AirportDetailsPage from './pages/AirportDetailsPage';
import AirlinesPage from './pages/AirlinesPage';
import GatesPage from './pages/GatesPage';
import FlightsPage from './pages/FlightsPage';
import ErrorPage from './pages/ErrorPage';
import AirportsPage from './pages/AirportsPage';
import AircraftPage from './pages/AircraftPage';
import CitiesPage from './pages/CitiesPage';
import Navigation from './components/Navigation';

const App = () => {
    const [airports, setAirports] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Fetch airport data from the backend API
        fetch('http://localhost:8080/api/airports')
            .then((response) => response.json())
            .then((data) => {
                setAirports(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching airports:', error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <Router>
            <div>
                <Navigation />
                <Routes>
                    <Route path="/" element={<HomePage airports={airports} />} />
                    <Route path="/admin" element={<AdminPage />} />
                    <Route path="/airport/:id" element={<AirportDetailsPage airports={airports} />} />
                    <Route path="/airlines" element={<AirlinesPage />} />
                    <Route path="/gates" element={<GatesPage />} />
                    <Route path="/flights" element={<FlightsPage />} />
                    <Route path="/airports" element={<AirportsPage />} />
                    <Route path="/aircraft" element={<AircraftPage />} />
                    <Route path="/cities" element={<CitiesPage />} />
                    <Route path="*" element={<ErrorPage />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;