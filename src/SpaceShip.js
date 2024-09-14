import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

const SpaceShip = () => {
    const mesh = useRef();
    useFrame(({ clock }) => {
        if (mesh.current) {
            mesh.current.position.y = Math.sin(clock.getElapsedTime()) * 0.5;
            mesh.current.rotation.z = Math.sin(clock.getElapsedTime() * 2) * 0.1;
        }
    });

    return (
        <mesh ref={mesh} position={[5, 0, -5]}>
            <coneGeometry args={[0.5, 1.5, 4]} />
            <meshStandardMaterial color="black" metalness={0.7} roughness={0.3} />
        </mesh>
    );
};

export default SpaceShip;
