import React, { useState, useEffect, useCallback } from 'react';

const ScrollIndicator = () => {
    const [scrollPercentage, setScrollPercentage] = useState(0);

    const handleScroll = useCallback(() => {
        const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrolled = window.scrollY;
        setScrollPercentage((scrolled / scrollHeight) * 100);
    }, []);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [handleScroll]);

    return (
        <div className="fixed top-0 left-0 w-full h-1 bg-gray-300">
            <div
                className="h-full bg-blue-500"
                style={{ width: `${scrollPercentage}%` }}
            />
        </div>
    );
};

export default ScrollIndicator;
