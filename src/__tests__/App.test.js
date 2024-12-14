import React from 'react';
import { render, screen, waitFor, act } from '@testing-library/react';
import App from '../App';

// Mock the fetch API
beforeEach(() => {
    global.fetch = jest.fn(() =>
        Promise.resolve({
            json: () =>
                Promise.resolve([
                    { id: 1, name: 'Airport 1' },
                    { id: 2, name: 'Airport 2' },
                ]),
        })
    );
});

afterEach(() => {
    jest.restoreAllMocks();
});

describe('App Component', () => {
    test('displays a loading message initially', () => {
        render(<App />);
        expect(screen.getByText(/loading/i)).toBeInTheDocument();
    });

test('fetches and displays airport data after loading', async () => {
  // Mock the fetch call
  global.fetch = jest.fn().mockResolvedValue({
    json: () => Promise.resolve([{ name: 'Airport 1' }, { name: 'Airport 2' }]),
  });

  render(<App />);

  // Wait for the loading message to disappear
  await waitFor(() => expect(screen.queryByText(/loading/i)).not.toBeInTheDocument());

  // Ensure the airport data is rendered
  await act(async () => {
    await waitFor(() => {
      expect(screen.getByText(/airport 1/i)).toBeInTheDocument();
      expect(screen.getByText(/airport 2/i)).toBeInTheDocument();
    });
  });
});

    test('renders the HomePage by default when no route is specified', async () => {
        render(<App />);

        // Verify content on the HomePage
        await waitFor(() => expect(screen.getByText(/airport 1/i)).toBeInTheDocument());
    });

 test('navigates to and renders the AdminPage', async () => {
     render(<App />);

     // Wait for the loading state to resolve
     await waitFor(() => expect(screen.queryByText(/loading/i)).not.toBeInTheDocument());

     // Now check for the AdminPage content
     expect(screen.getByText(/admin/i)).toBeInTheDocument();
 });

test('renders the ErrorPage for unknown routes', async () => {
    render(<App />);

    // Simulate an unknown route (e.g., a URL not handled by your app)
    window.history.pushState({}, 'Unknown Route', '/unknown');

    // Wait for any loading or async operations to settle
    await waitFor(() => expect(screen.queryByText(/loading/i)).not.toBeInTheDocument());

    // Adjust this to the actual error message or structure displayed by your ErrorPage component
    expect(screen.getByText(/Page not found/i)).toBeInTheDocument(); // Example: "Page not found"
});


    test('does not display airport data before fetch resolves', () => {
        render(<App />);

        // Ensure no airport data is displayed during the loading state
        expect(screen.queryByText(/airport 1/i)).not.toBeInTheDocument();
        expect(screen.queryByText(/airport 2/i)).not.toBeInTheDocument();
    });
});