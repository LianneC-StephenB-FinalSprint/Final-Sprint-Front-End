import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AdminPage from './pages/AdminPage';
import AirportDetailsPage from './pages/AirportDetailsPage';
import AirlinesPage from './pages/AirlinesPage';
import GatesPage from './pages/GatesPage';
import ErrorPage from './pages/ErrorPage';
import Navigation from './components/Navigation';

const App = () => {
    return (
        <Router>
        <div>
          <Navigation />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/admin" element={<AdminPage />} />
                <Route path="/airport/:id" element={<AirportDetailsPage />} />
                <Route path="/airlines" element={<AirlinesPage />} />
                <Route path="/gates" element={<GatesPage />} />
                <Route path="*" element={<ErrorPage />} />
            </Routes>
            </div>
        </Router>
    );
};

export default App;