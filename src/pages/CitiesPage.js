import React, { useEffect, useState } from 'react';
import { fetchCities } from '../services/api';
import backgroundImage from '../assets/Background01.jpg';
import '../styles/OtherPage.css';

const CitiesPage = () => {
    const [cities, setCities] = useState([]);

    useEffect(() => {
        fetchCities().then((data) => setCities(data));
    }, []);

    return (
        <div
            style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                minHeight: '100vh',
            }}
        >
            <div className="content-container">
                <h1>Cities</h1>
                <ul>
                    {cities.map((city) => (
                        <li key={city.id} className="page-li">
                            {city.name}, {city.state} - Population: {city.population}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default CitiesPage;