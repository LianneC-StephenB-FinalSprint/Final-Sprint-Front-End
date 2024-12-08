// FlightForm.js
import React from 'react';

const FlightForm = ({ formData, handleChange, handleSubmit }) => {
    return (
    <>
    <h2>Create Flight</h2>
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
            <button type="submit">Create Flight</button>
        </form>
        </>
    );
};

export default FlightForm;