const API_BASE_URL = 'http://15.223.118.18:80/api'; // Replace with your backend URL

// Create flight
export const createFlight = async (flightData) => {
    const response = await fetch(`${API_BASE_URL}/flights`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(flightData),
    });

    const result = await response.json();
    console.log(result); // Log response for debugging

    if (!response.ok) {
        throw new Error('Failed to create flight');
    }
    return result;
};

// Fetch all airlines
export const fetchAirlines = async () => {
    const response = await fetch(`${API_BASE_URL}/airlines`);
    if (!response.ok) {
        throw new Error('Failed to fetch airlines');
    }
    return response.json();
};

// Fetch all flights
export const fetchFlights = async () => {
    const response = await fetch(`${API_BASE_URL}/flights`);
    if (!response.ok) {
        throw new Error('Failed to fetch flights');
    }
    return response.json();
};

// Fetch all aircraft
export const fetchAircraft = async () => {
    const response = await fetch(`${API_BASE_URL}/aircraft`);
    if (!response.ok) {
        throw new Error('Failed to fetch aircraft');
    }
    return response.json();
};

// Create aircraft
export const createAircraft = async (aircraftData) => {
    const response = await fetch(`${API_BASE_URL}/aircraft`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(aircraftData),
    });

    const result = await response.json();
    console.log(result); // Log response for debugging

    if (!response.ok) {
        throw new Error('Failed to create aircraft');
    }
    return result;
};

// Fetch all gates
export const fetchGates = async () => {
    const response = await fetch(`${API_BASE_URL}/gates`);
    if (!response.ok) {
        throw new Error('Failed to fetch gates');
    }
    return response.json();
};

// Fetch all airports
export const fetchAirports = async () => {
    const response = await fetch(`${API_BASE_URL}/airports`);
    if (!response.ok) {
        throw new Error('Failed to fetch airports');
    }
    return response.json();
};

// Create airport
export const createAirport = async (airportData) => {
    const response = await fetch(`${API_BASE_URL}/airports`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(airportData),
    });

    const result = await response.json();
    console.log(result); // Log response for debugging

    if (!response.ok) {
        throw new Error('Failed to create airport');
    }
    return result;
};

// Fetch all cities
export const fetchCities = async () => {
    const response = await fetch(`${API_BASE_URL}/cities`);
    if (!response.ok) {
        throw new Error('Failed to fetch cities');
    }
    return response.json();
};

// Create city
export const createCity = async (cityData) => {
    const response = await fetch(`${API_BASE_URL}/cities`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(cityData),
    });

    const result = await response.json();
    console.log(result); // Log response for debugging

    if (!response.ok) {
        throw new Error('Failed to create city');
    }
    return result;
};

// Create gate
export const createGate = async (gateData) => {
    const response = await fetch(`${API_BASE_URL}/gates`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(gateData),
    });
    return response.json();
};

// Create airline
export const createAirline = async (airlineData) => {
    const response = await fetch(`${API_BASE_URL}/airlines`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(airlineData),
    });
    return response.json();
};

export const deleteFlight = async (flightId) => {
    const response = await fetch(`${API_BASE_URL}/flights/${flightId}`, {
        method: 'DELETE',
    });
    if (!response.ok) {
        throw new Error('Failed to delete flight');
    }
};