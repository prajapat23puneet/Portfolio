import React from 'react';
import { isValidURL } from '../utils/security';

const SecureLink = ({ href, children, className, ...props }) => {
    const handleClick = (e) => {
        if (!isValidURL(href)) {
            e.preventDefault();
            console.error('Invalid URL detected:', href);
            return;
        }
    };

    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={className}
            onClick={handleClick}
            {...props}
        >
            {children}
        </a>
    );
};

export default SecureLink;
