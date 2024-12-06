import React, { useState } from 'react';

const FlightForm = ({ onSubmit }) => {
    const [flightData, setFlightData] = useState({
        flightNumber: '',
        airline: '',
        origin: '',
        destination: '',
        time: '',
        status: '',
    });

    const handleChange = (e) => {
        setFlightData({
            ...flightData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(flightData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input name="flightNumber" placeholder="Flight Number" onChange={handleChange} required />
            <input name="airline" placeholder="Airline" onChange={handleChange} required />
            <input name="origin" placeholder="Origin" onChange={handleChange} required />
            <input name="destination" placeholder="Destination" onChange={handleChange} required />
            <input type="datetime-local" name="time" onChange={handleChange} required />
            <input name="status" placeholder="Status" onChange={handleChange} required />
            <button type="submit">Submit</button>
        </form>
    );
};

export default FlightForm;