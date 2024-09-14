import React from 'react';
import Asteroid from './Asteroid';

const AsteroidBelt = () => {
    const asteroids = [];
    for (let i = 0; i < 100; i++) {
        const angle = Math.random() * Math.PI * 2;
        const radius = Math.random() * 2 + 8;
        const x = Math.cos(angle) * radius;
        const z = Math.sin(angle) * radius;
        const y = (Math.random() - 0.5) * 2;
        asteroids.push(<Asteroid key={i} position={[x, y, z]} />);
    }
    return <>{asteroids}</>;
};

export default AsteroidBelt;
