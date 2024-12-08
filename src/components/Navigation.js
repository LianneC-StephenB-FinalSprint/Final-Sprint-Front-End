import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navigation.css';

const Navigation = () => {
    return (
        <nav>
            <ul style={{ display: 'flex', listStyleType: 'none', gap: '20px' }}>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/admin">Admin Menu</Link>
                </li>
                <li>
                    <Link to="/airlines">Airlines</Link>
                </li>
                <li>
                    <Link to="/gates">Gates</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;