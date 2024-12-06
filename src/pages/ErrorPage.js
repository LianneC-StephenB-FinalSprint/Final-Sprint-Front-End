import React from 'react';
import backgroundImage from '../assets/Background01.jpg';

const ErrorPage = () => {
    return (
        <div
        style={{
                                backgroundImage: `url(${backgroundImage})`, // Set background image
                                backgroundSize: 'cover',
                                backgroundRepeat: 'no-repeat',
                                backgroundPosition: 'center',
                                minHeight: '100vh', // Ensure it covers the viewport height
                            }}
        >
            <h1>404 - Page Not Found</h1>
            <p>The page you are looking for does not exist.</p>
        </div>
    );
};

export default ErrorPage;