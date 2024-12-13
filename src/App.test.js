import { render, screen, act } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

test('renders navigation component', async () => {
    await act(async () => {
        render(
            <BrowserRouter>
                <App />
            </BrowserRouter>
        );
    });
    expect(screen.getByRole('navigation')).toBeInTheDocument();
});
