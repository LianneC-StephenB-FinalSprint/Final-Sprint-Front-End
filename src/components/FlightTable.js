import React from 'react';

const FlightTable = ({ flights }) => {
    if (!flights || flights.length === 0) {
        return <p>No flights available.</p>;
    }

    return (
        <table>
            <thead>
                <tr>
                    <th>Flight Number</th>
                    <th>Airline</th>
                    <th>Aircraft</th>
                    <th>Departure/Arrival</th>
                    <th>Gate</th>
                    <th>Terminal</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                {flights.map((flight) => (
                    <tr key={flight.id}>
                        <td>{flight.flightNumber}</td>
                        <td>{flight.airline.name}</td>
                        <td>{flight.aircraft.type}</td>
                        <td>
                            {flight.departureTime
                                ? `Departs: ${new Date(flight.departureTime).toLocaleString()}`
                                : `Arrives: ${new Date(flight.arrivalTime).toLocaleString()}`}
                        </td>
                        <td>{flight.gate.name}</td>
                        <td>{flight.gate.terminal}</td>
                        <td>{flight.status || 'Scheduled'}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default FlightTable;