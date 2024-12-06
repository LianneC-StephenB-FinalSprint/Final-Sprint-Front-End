const API_BASE_URL = 'http://localhost:8080/api'; // Replace with your backend URL

export const fetchFlights = async (airportId) => {
    const response = await fetch(`${API_BASE_URL}/flights?airport=${airportId}`);
    return response.json();
};

export const createFlight = async (flightData) => {
    const response = await fetch(`${API_BASE_URL}/flights`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(flightData),
    });
    return response.json();
};

export const fetchAirports = async () => {
    const response = await fetch(`${API_BASE_URL}/airports`);
    return response.json();
};

export const fetchAirlines = async () => {
    const response = await fetch(`${API_BASE_URL}/airlines`);
    return response.json();
};

export const fetchGates = async () => {
    const response = await fetch(`${API_BASE_URL}/gates`);
    return response.json();
};