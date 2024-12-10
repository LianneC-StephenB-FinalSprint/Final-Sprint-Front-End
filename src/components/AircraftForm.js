import React, { useState } from 'react';
import { createAircraft } from '../services/api'; // Import the API function

const AircraftForm = ({ formData, handleChange, handleSubmit }) => {
    return (
        <div>
            <h2>Create Aircraft</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="airlineName"
                    placeholder="Airline Name"
                    value={formData.airlineName}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="type"
                    placeholder="Aircraft Model"
                    value={formData.type}
                    onChange={handleChange}
                    required
                />
                <input
                    type="number"
                    name="numberOfPassengers"
                    placeholder="Aircraft Capacity"
                    value={formData.numberOfPassengers}
                    onChange={handleChange}
                    required
                />
                <button type="submit">Create Aircraft</button>
            </form>
        </div>
    );
};

export default AircraftForm;