const API_BASE_URL = 'http://localhost:8080/api'; // Replace with your backend URL

// Fetch flights for a specific airport
export const fetchFlights = async (airportId) => {
    const response = await fetch(`${API_BASE_URL}/flights?airport=${airportId}`);
    return response.json();
};

// Create a new flight
export const createFlight = async (flightData) => {
    const response = await fetch(`${API_BASE_URL}/flights`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(flightData),
    });
    return response.json();
};

// Delete a flight by ID
export const deleteFlight = async (flightId) => {
    const response = await fetch(`${API_BASE_URL}/flights/${flightId}`, {
        method: 'DELETE',
    });

    if (!response.ok) {
        throw new Error('Failed to delete the flight');
    }

    return response.json();
};

// Fetch all airports
export const fetchAirports = async () => {
    const response = await fetch(`${API_BASE_URL}/airports`);
    return response.json();
};

// Fetch all airlines
export const fetchAirlines = async () => {
    const response = await fetch(`${API_BASE_URL}/airlines`);
    return response.json();
};

// Fetch all gates
export const fetchGates = async () => {
    const response = await fetch(`${API_BASE_URL}/gates`);
    return response.json();
};

// Create a new gate
export const createGate = async (gateData) => {
    const response = await fetch(`${API_BASE_URL}/gates`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(gateData),
    });
    return response.json();
};

// Create a new airline
export const createAirline = async (airlineData) => {
    const response = await fetch(`${API_BASE_URL}/airlines`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(airlineData),
    });
    return response.json();
};