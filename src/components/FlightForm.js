import React from 'react';

const FlightForm = ({ formData, handleChange, handleSubmit, airports, airlines, gates, aircraft }) => {
    return (
    <>
    <h2>Create Flight</h2>
        <form onSubmit={handleSubmit}>
            <div>
                <label>Flight Number:</label>
                <input
                    type="text"
                    name="flightNumber"
                    value={formData.flightNumber}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>Departure Time:</label>
                <input
                    type="datetime-local"
                    name="departureTime"
                    value={formData.departureTime}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>Arrival Time:</label>
                <input
                    type="datetime-local"
                    name="arrivalTime"
                    value={formData.arrivalTime}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>Origin Airport:</label>
                <select
                    name="originAirportId"
                    value={formData.originAirportId}
                    onChange={handleChange}
                >
                    <option value="">Select Origin Airport</option>
                    {airports.map((airport) => (
                        <option key={airport.id} value={airport.id}>
                            {airport.name}
                        </option>
                    ))}
                </select>
            </div>
            <div>
                <label>Destination Airport:</label>
                <select
                    name="destinationAirportId"
                    value={formData.destinationAirportId}
                    onChange={handleChange}
                >
                    <option value="">Select Destination Airport</option>
                    {airports.map((airport) => (
                        <option key={airport.id} value={airport.id}>
                            {airport.name}
                        </option>
                    ))}
                </select>
            </div>
            <div>
                <label>Aircraft:</label>
                <select
                    name="aircraftId"
                    value={formData.aircraftId}
                    onChange={handleChange}
                >
                    <option value="">Select Aircraft</option>
                    {aircraft.map((aircraft) => (
                        <option key={aircraft.id} value={aircraft.id}>
                            {aircraft.type}  {/* Displaying type instead of name */}
                        </option>
                    ))}
                </select>
            </div>
         <div>
             <label>Gate:</label>
             <select
                 name="gateName"
                 value={formData.gateName}
                 onChange={handleChange}
             >
                 <option value="">Select Gate</option>
                 {gates.map((gate) => (
                     <option key={gate.name} value={gate.name}>
                         {gate.name}
                     </option>
                 ))}
             </select>
         </div>
            <div>
                <label>Airline:</label>
                <select
                    name="airlineId"
                    value={formData.airlineId}
                    onChange={handleChange}
                >
                    <option value="">Select Airline</option>
                    {airlines.map((airline) => (
                        <option key={airline.id} value={airline.id}>
                            {airline.name}
                        </option>
                    ))}
                </select>
            </div>
            <button type="submit">Create Flight</button>
        </form>
        </>
    );
};

export default FlightForm;