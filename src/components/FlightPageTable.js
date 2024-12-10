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
                    <th>Departure/Arrival</th>
                    <th>Origin Airport</th>
                    <th>Destination Airport</th>
                    <th>Gate</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                {flights.map((flight) => (
                    <tr key={flight.id}>
                        <td>{flight.flightNumber}</td>
                        <td>{flight.airlineName}</td> {/* Updated field */}
                        <td>
                            {flight.departureTime
                                ? `Departs: ${new Date(flight.departureTime).toLocaleString()}`
                                : `Arrives: ${new Date(flight.arrivalTime).toLocaleString()}`}
                        </td>
                        <td>{flight.originAirportName || 'Unknown Airport'}</td> {/* Fallback value */}
                        <td>{flight.destinationAirportName || 'Unknown Airport'}</td> {/* Fallback value */}
                        <td>{flight.gateName || 'Unknown Gate'}</td> {/* Fallback value */}
                        <td>{flight.status || 'Scheduled'}</td> {/* Handle status if available */}
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default FlightTable;