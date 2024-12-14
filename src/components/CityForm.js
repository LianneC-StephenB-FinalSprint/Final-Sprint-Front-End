//import React, { useState } from 'react';
//import { createCity } from '../services/api'; // Import the API function

const CityForm = ({ formData, handleChange, handleSubmit }) => {
    return (
        <>
            <h2>Create City</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="City Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="state"
                    placeholder="State"
                    value={formData.state}
                    onChange={handleChange}
                    required
                />
                <input
                    type="number"
                    name="population"
                    placeholder="Population"
                    value={formData.population}
                    onChange={handleChange}
                    required
                />
                <button type="submit">Create City</button>
            </form>
        </>
    );
};

export default CityForm;