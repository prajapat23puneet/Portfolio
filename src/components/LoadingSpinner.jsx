import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import './LoadingSpinner.css';

const LoadingSpinner = () => {
    const { theme } = useTheme();
    
    return (
        <div className="loading-spinner-container">
            <div className={`loading-spinner ${theme}`}>
                <div className="spinner-ring"></div>
                <div className="spinner-ring"></div>
                <div className="spinner-ring"></div>
            </div>
        </div>
    );
};

export default LoadingSpinner;
