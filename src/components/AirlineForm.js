import React from 'react';

const AirlineForm = ({ formData, handleChange, handleSubmit }) => {
    return (
    <>
    <h2>Create Airline</h2>
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="name"
                placeholder="Airline Name"
                value={formData.name}
                onChange={handleChange}
                required
            />
            <input
                type="text"
                name="code"
                placeholder="Airline Code (e.g., DL)"
                value={formData.code}
                onChange={handleChange}
                required
            />
            <button type="submit">Create Airline</button>
        </form>
        </>
    );
};

export default AirlineForm;