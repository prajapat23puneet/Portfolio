/**
 * Validate URL using native URL API
 * @param {string} url - URL to validate
 * @returns {boolean} - True if valid URL with http/https protocol
 */
export const isValidURL = (url) => {
    try {
        const parsed = new URL(url);
        return ['http:', 'https:'].includes(parsed.protocol);
    } catch (e) {
        return false;
    }
};

/**
 * Escape HTML entities
 * @param {string} text - Text to escape
 * @returns {string} - Escaped text
 */
export const escapeHTML = (text) => {
    const map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#x27;',
        '/': '&#x2F;',
    };
    return text.replace(/[&<>"'/]/g, (char) => map[char]);
};

/**
 * Simple rate limiter for client-side actions
 */
class RateLimiter {
    constructor(maxAttempts = 3, windowMs = 60000) {
        this.maxAttempts = maxAttempts;
        this.windowMs = windowMs;
        this.attempts = new Map();
    }

    isAllowed(key) {
        const now = Date.now();
        const userAttempts = this.attempts.get(key) || [];

        const recentAttempts = userAttempts.filter(
            (timestamp) => now - timestamp < this.windowMs
        );

        if (recentAttempts.length >= this.maxAttempts) {
            return false;
        }

        recentAttempts.push(now);
        this.attempts.set(key, recentAttempts);
        return true;
    }

    reset(key) {
        this.attempts.delete(key);
    }
}

export const emailRateLimiter = new RateLimiter(3, 60000); // 3 attempts per minute

/**
 * Detect bot behavior (simple heuristics)
 * @returns {boolean} - True if likely a bot
 */
export const isProbablyBot = () => {
    if (navigator.webdriver) return true;

    if (window.callPhantom || window._phantom) return true;

    const botPatterns = /bot|crawler|spider|crawling/i;
    if (botPatterns.test(navigator.userAgent)) return true;

    return false;
};

/**
 * Add honeypot field detector
 * @param {string} value - Honeypot field value
 * @returns {boolean} - True if honeypot is filled (likely bot)
 */
export const isHoneypotFilled = (value) => {
    return value && value.trim().length > 0;
};

/**
 * Validate CSRF token (if implementing forms)
 * @returns {string} - Generated CSRF token
 */
export const generateCSRFToken = () => {
    const array = new Uint8Array(32);
    crypto.getRandomValues(array);
    return Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('');
};

/**
 * Prevent clickjacking by checking if page is in iframe
 * @returns {boolean} - True if page is potentially being clickjacked
 */
export const isInIframe = () => {
    try {
        return window.self !== window.top;
    } catch (e) {
        return true;
    }
};

/**
 * Secure external link opener
 * @param {string} url - URL to open
 */
export const openSecureLink = (url) => {
    if (!isValidURL(url)) {
        console.error('Invalid URL:', url);
        return;
    }

    const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
    if (newWindow) newWindow.opener = null;
};
