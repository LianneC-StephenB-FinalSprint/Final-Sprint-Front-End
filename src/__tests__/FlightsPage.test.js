import React from 'react';
import { render, screen, waitFor, act } from '@testing-library/react';
import FlightsPage from '../pages/FlightsPage';
import { fetchFlights } from '../services/api'; // Adjust path if necessary

jest.mock('../services/api', () => ({
  fetchFlights: jest.fn().mockResolvedValue([
    {
      id: 1,
      flightNumber: '123',
      airlineName: 'Airline A',
      departureTime: '2024-12-01T08:00:00Z',
      arrivalTime: '2024-12-01T12:00:00Z',
      originAirportName: 'NYC',
      destinationAirportName: 'LA',
      gateName: 'A1',
      status: 'Scheduled'
    },
    {
      id: 2,
      flightNumber: '456',
      airlineName: 'Airline B',
      departureTime: '2024-12-01T10:00:00Z',
      arrivalTime: '2024-12-01T14:00:00Z',
      originAirportName: 'LA',
      destinationAirportName: 'SF',
      gateName: 'B2',
      status: 'Scheduled'
    }
  ])
}));

describe('FlightsPage', () => {
  test('renders FlightsPage and displays flight data', async () => {
    // Mock the fetchFlights function to return mock flight data with all necessary fields
    fetchFlights.mockResolvedValue([
      {
        id: 1,
        flightNumber: '123',
        airlineName: 'Airline A',
        departureTime: '2024-12-01T08:00:00Z',
        arrivalTime: '2024-12-01T12:00:00Z',
        originAirportName: 'NYC',
        destinationAirportName: 'LA',
        gateName: 'A1',
        status: 'Scheduled'
      },
      {
        id: 2,
        flightNumber: '456',
        airlineName: 'Airline B',
        departureTime: '2024-12-01T10:00:00Z',
        arrivalTime: '2024-12-01T14:00:00Z',
        originAirportName: 'LA',
        destinationAirportName: 'SF',
        gateName: 'B2',
        status: 'Scheduled'
      }
    ]);

    // Render the component
    render(<FlightsPage />);

    // Wait for the flights to be fetched and displayed
    await waitFor(() => screen.getByText('123')); // Check for the flight number

    // Check if the flight data is rendered correctly
    expect(screen.getByText('123')).toBeInTheDocument(); // Check for flight number
  expect(screen.getAllByText(/la/i)).toHaveLength(2);  // Check that 'LA' appears twice
  expect(screen.getByText(/nyc/i)).toBeInTheDocument(); // Check for origin airport
    expect(screen.getByText('456')).toBeInTheDocument(); // Check for the second flight number
    expect(screen.getByText(/airline a/i)).toBeInTheDocument(); // Check for airline name
    expect(screen.getByText(/a1/i)).toBeInTheDocument(); // Check for gate
  });

  test('handles fetch error', async () => {
    // Mock the fetchFlights function to throw an error
    fetchFlights.mockRejectedValue(new Error('Failed to fetch flights'));

    // Render the component
    render(<FlightsPage />);

    // Wait for the error message to be displayed
    await waitFor(() => screen.getByText(/Error: Failed to fetch flights/i));

    // Check if the error message is rendered
    expect(screen.getByText(/Error: Failed to fetch flights/i)).toBeInTheDocument();
  });
});