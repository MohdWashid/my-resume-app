import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

const Asteroid = ({ position }) => {
    const mesh = useRef();

    useFrame(() => {
        if (mesh.current) {
            mesh.current.rotation.x += 0.01;
            mesh.current.rotation.y += 0.01;
        }
    });

    return (
        <mesh ref={mesh} position={position}>
            <dodecahedronGeometry args={[0.2, 0]} />
            <meshStandardMaterial color="gray" roughness={0.8} />
        </mesh>
    );
};

export default Asteroid;
