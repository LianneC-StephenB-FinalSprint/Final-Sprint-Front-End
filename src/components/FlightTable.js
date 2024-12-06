import React from 'react';

const FlightTable = ({ flights }) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Flight Number</th>
                    <th>Airline</th>
                    <th>Origin/Destination</th>
                    <th>Time</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                {flights.map((flight) => (
                    <tr key={flight.id}>
                        <td>{flight.flightNumber}</td>
                        <td>{flight.airline}</td>
                        <td>{flight.origin || flight.destination}</td>
                        <td>{flight.time}</td>
                        <td>{flight.status}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default FlightTable;