import React from 'react';

const DeleteFlightForm = ({ flights, selectedFlightId, handleSelectChange, handleDelete }) => {
    return (
    <>
    <h2>Delete Flight</h2>
        <form onSubmit={handleDelete}>
            <div>
                <label>Delete Flight:</label>
                <select
                    name="flightId"
                    value={selectedFlightId}
                    onChange={handleSelectChange}
                >
                    <option value="">Select Flight</option>
                    {flights.map((flight) => (
                        <option key={flight.id} value={flight.id}>
                            {flight.flightNumber} - {flight.originAirportName} to {flight.destinationAirportName}
                        </option>
                    ))}
                </select>
            </div>
            <button type="submit">Delete Flight</button>
        </form>
        </>
    );
};

export default DeleteFlightForm;