import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';

const GlowingStar = ({ position }) => {
    const mesh = useRef();
    const [hovered, setHovered] = useState(false);

    useFrame(() => {
        if (mesh.current) {
            mesh.current.rotation.y += 0.01;
        }
    });

    return (
        <mesh
            ref={mesh}
            position={position}
            onPointerOver={() => setHovered(true)}
            onPointerOut={() => setHovered(false)}
        >
            <sphereGeometry args={[0.1, 32, 32]} />
            <meshStandardMaterial
                color={hovered ? 'yellow' : 'black'}
                emissive={hovered ? 'yellow' : 'black'}
                emissiveIntensity={hovered ? 2 : 1}
            />
        </mesh>
    );
};

export default GlowingStar;
