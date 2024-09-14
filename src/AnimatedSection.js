import React, { useState, useRef, useEffect } from 'react';
import { useSpring, animated } from '@react-spring/web';

const AnimatedSection = ({ title, content }) => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.1 }
        );

        const currentRef = sectionRef.current;

        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, []);

    const springProps = useSpring({
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
    });

    return (
        <animated.section ref={sectionRef} style={springProps} className="mb-12 p-6 backdrop-blur-sm bg-opacity-30 bg-gray-800 rounded-lg">
            <h2 className="text-3xl font-bold mb-4">{title}</h2>
            {content}
        </animated.section>
    );
};

export default AnimatedSection;
