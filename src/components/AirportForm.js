import React from 'react';

const AirportForm = ({ formData, handleChange, handleSubmit, cities }) => {
    return (
        <div>
            <h2>Create Airport</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Airport Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="code"
                    placeholder="Airport Code"
                    value={formData.code}
                    onChange={handleChange}
                    required
                />
                <select
                    name="cityId"
                    value={formData.cityId}
                    onChange={handleChange}
                    required
                >
                    <option value="">Select City</option>
                    {cities.map((city) => (
                        <option key={city.id} value={city.id}>
                            {city.name}
                        </option>
                    ))}
                </select>
                <button type="submit">Create Airport</button>
            </form>
        </div>
    );
};

export default AirportForm;