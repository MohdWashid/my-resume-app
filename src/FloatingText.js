import React from 'react';
import { animated, useSpring } from '@react-spring/web';

const FloatingText = ({ children }) => {
    const animatedProps = useSpring({
        from: { transform: 'translateY(0px)' },
        to: async (next) => {
            while (1) {
                await next({ transform: 'translateY(-20px)' });
                await next({ transform: 'translateY(0px)' });
            }
        },
        config: { duration: 2000 },
    });

    return <animated.div style={animatedProps}>{children}</animated.div>;
};

export default FloatingText;
