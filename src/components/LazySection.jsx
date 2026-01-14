import React, { useEffect, useRef, useState } from 'react';

/**
 * LazySection component that loads content when it comes into view
 * Uses native Intersection Observer API for efficient lazy loading
 */
const LazySection = ({ children, fallback }) => {
    const [inView, setInView] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true);
                    observer.disconnect();
                }
            },
            {
                threshold: 0.1,
                rootMargin: '100px' // Start loading 100px before element is visible
            }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);

    return (
        <div ref={ref}>
            {inView ? children : (fallback || null)}
        </div>
    );
};

export default LazySection;
