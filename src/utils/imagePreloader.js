/**
 * Image preloader utility for seamless theme switching
 * Preloads images in the background and stores them in memory
 */

const preloadedImages = new Map();

/**
 * Preload a single image
 * @param {string} src - Image source URL
 * @returns {Promise<HTMLImageElement>} - Promise that resolves when image is loaded
 */
export const preloadImage = (src) => {
    // Return cached image if already preloaded
    if (preloadedImages.has(src)) {
        return Promise.resolve(preloadedImages.get(src));
    }

    return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => {
            preloadedImages.set(src, img);
            resolve(img);
        };
        img.onerror = reject;
        img.src = src;
    });
};

/**
 * Preload multiple images
 * @param {string[]} sources - Array of image source URLs
 * @returns {Promise<HTMLImageElement[]>} - Promise that resolves when all images are loaded
 */
export const preloadImages = (sources) => {
    return Promise.all(sources.map(preloadImage));
};

/**
 * Preload all theme images (both dark and light variants)
 * @returns {Promise<void>}
 */
/**
 * Preload images for current theme only
 * @param {string} theme - 'dark' or 'light'
 * @returns {Promise<void>}
 */
export const preloadCurrentThemeImages = (theme) => {
    const images = theme === 'dark' 
        ? ['/images/avatar-dark.webp', '/images/tech-card-dark.webp']
        : ['/images/avatar-light.webp', '/images/tech-card-light.webp'];
    
    return preloadImages(images).catch((error) => {
        console.warn('Theme images failed to preload:', error);
    });
};

/**
 * Preload alternate theme images (lazy load after initial render)
 * @param {string} currentTheme - Current theme to determine alternate
 * @returns {Promise<void>}
 */
export const preloadAlternateThemeImages = (currentTheme) => {
    const images = currentTheme === 'dark'
        ? ['/images/avatar-light.webp', '/images/tech-card-light.webp']
        : ['/images/avatar-dark.webp', '/images/tech-card-dark.webp'];
    
    // Delay to not block initial render
    setTimeout(() => {
        preloadImages(images).catch(() => {
            // Silently fail - alternate theme will load on demand
        });
    }, 2000);
    
    return Promise.resolve();
};
