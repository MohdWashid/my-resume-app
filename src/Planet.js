import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useTexture } from '@react-three/drei';

const Planet = ({ position, texture, size, rotationSpeed }) => {
    const mesh = useRef();
    const planetTexture = useTexture(texture || '/path/to/fallback-texture.jpg');

    useFrame(() => {
        if (mesh.current) {
            mesh.current.rotation.y += rotationSpeed;
        }
    });

    return (
        <mesh ref={mesh} position={position}>
            <sphereGeometry args={[size, 32, 32]} />
            <meshStandardMaterial map={planetTexture} />
        </mesh>
    );
};

export default Planet;
