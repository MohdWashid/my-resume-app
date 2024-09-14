// // import React, { Suspense, memo } from 'react';
// // import { Canvas } from '@react-three/fiber';
// // import { OrbitControls, Stars, Cloud, Sky, Html } from '@react-three/drei';
// // import Planet from './Planet';
// // import AsteroidBelt from './AsteroidBelt';
// // import SpaceShip from './SpaceShip';
// // import GlowingStar from './GlowingStar';

// // const SpaceScene = memo(({ theme }) => {
// //     return (
// //         <Canvas
// //             camera={{ position: [0, 0, 15], fov: 60 }}
// //             style={{ background: '' }} // Changed to a dark blue color
// //             gl={{ antialias: true }}
// //         >
// //             <GlowingStar position={[-5, 3, -10]} />
// //             <GlowingStar position={[4, -2, -8]} />
// //             <GlowingStar position={[6, 4, -12]} />
// //             <ambientLight intensity={0.1} /> // Reduced ambient light intensity
// //             <pointLight position={[10, 10, 10]} intensity={0.8} /> // Reduced point light intensity
// //             <Suspense fallback={<Html center>Loading scene...</Html>}>
// //                 <Planet position={[0, 0, 0]} texture="/images/earth.jpeg" size={2} rotationSpeed={0.005} />
// //                 <Planet position={[-6, 2, -5]} texture="/images/earth.jpeg" size={1} rotationSpeed={0.007} />
// //                 <Planet position={[7, -3, -10]} texture="/images/earth.jpeg" size={3} rotationSpeed={0.003} />
// //                 <AsteroidBelt />
// //                 <SpaceShip />
// //             </Suspense>
// //             <Stars fade depth={50} count={5000} factor={4} />
// //             {/* <Sky distance={450000} sunPosition={[0, 1, 0]} inclination={0} azimuth={0.25} mieCoefficient={0.00001} rayleigh={0.1} /> // Adjusted Sky parameters for night effect
// //             {theme === 'dark' && <Cloud opacity={0.1} speed={0.4} width={10} depth={1.5} segments={20} />} // Reduced cloud opacity */}
// //             <OrbitControls enableZoom={false} enablePan={false} /> 
// //         </Canvas>
// //     );
// // });

// // export default SpaceScene;
// import React, { Suspense, memo } from 'react';
// import { Canvas } from '@react-three/fiber';
// import { OrbitControls, Stars, Cloud, Sky, Html } from '@react-three/drei';
// import Planet from './Planet';
// import AsteroidBelt from './AsteroidBelt';
// import SpaceShip from './SpaceShip';
// import GlowingStar from './GlowingStar';

// const SpaceScene = memo(({ theme }) => {
//     return (
//         <Canvas
//             camera={{ position: [0, 0, 15], fov: 60 }}
//             style={{ background: '#000020' }} // Very dark blue, almost black
//             gl={{ antialias: true }}
//         >
//             <GlowingStar position={[-5, 3, -10]} />
//             <GlowingStar position={[4, -2, -8]} />
//             <GlowingStar position={[6, 4, -12]} />
//             <ambientLight intensity={0.05} /> // Very low ambient light
//             <pointLight position={[10, 10, 10]} intensity={0.5} color="#4070FF" /> // Blueish light
//             <Suspense fallback={<Html center>Loading scene...</Html>}>
//                 <Planet position={[0, 0, 0]} texture="/images/earth.jpeg" size={2} rotationSpeed={0.005} />
//                 <Planet position={[-6, 2, -5]} texture="/images/earth.jpeg" size={1} rotationSpeed={0.007} />
//                 <Planet position={[7, -3, -10]} texture="/images/earth.jpeg" size={3} rotationSpeed={0.003} />
//                 <AsteroidBelt />
//                 <SpaceShip />
//             </Suspense>
//             <Stars radius={300} depth={60} count={20000} factor={7} saturation={0} fade speed={1} />
//             <Sky 
//                 distance={450000} 
//                 sunPosition={[0, 1, 0]} 
//                 inclination={0} 
//                 azimuth={0.25} 
//                 mieCoefficient={0.00003} 
//                 rayleigh={0.1} 
//                 turbidity={10}
//             />
//             {theme === 'dark' && <Cloud opacity={0.05} speed={0.4} width={10} depth={1.5} segments={20} />}
//             <OrbitControls enableZoom={false} enablePan={false} />
//         </Canvas>
//     );
// });

// export default SpaceScene;
import React, { Suspense, memo, useRef, useMemo, useEffect, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, Stars, Html, useTexture } from '@react-three/drei';
import * as THREE from 'three';

const Planet = memo(({ position, texture, size, rotationSpeed, orbitRadius, orbitSpeed }) => {
  const mesh = useRef();
  const planetTexture = useTexture(texture);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    mesh.current.rotation.y += rotationSpeed;
    mesh.current.position.x = Math.cos(time * orbitSpeed) * orbitRadius;
    mesh.current.position.z = Math.sin(time * orbitSpeed) * orbitRadius;
  });

  return (
    <mesh ref={mesh} position={position} castShadow receiveShadow>
      <sphereGeometry args={[size, 64, 64]} />
      <meshPhongMaterial 
        map={planetTexture} 
        shininess={5}
        specular={new THREE.Color(0x333333)}
      />
    </mesh>
  );
});

const Sun = memo(() => {
  const sunTexture = useTexture('https://upload.wikimedia.org/wikipedia/commons/b/b4/The_Sun_by_the_Atmospheric_Imaging_Assembly_of_NASA%27s_Solar_Dynamics_Observatory_-_20100819.jpg');
  
  return (
    <mesh position={[0, 0, 0]}>
      <sphereGeometry args={[2.5, 64, 64]} />
      <meshBasicMaterial map={sunTexture} />
      <pointLight intensity={1.5} distance={100} color="#FDB813" />
    </mesh>
  );
});

const AsteroidBelt = memo(() => {
  const asteroids = useRef([]);

  useFrame(() => {
    asteroids.current.forEach((asteroid) => {
      asteroid.rotation.x += 0.01;
      asteroid.rotation.y += 0.01;
    });
  });

  return (
    <group>
      {[...Array(200)].map((_, i) => {
        const radius = Math.random() * 2 + 30;
        const angle = Math.random() * Math.PI * 2;
        const x = Math.cos(angle) * radius;
        const z = Math.sin(angle) * radius;
        const y = (Math.random() - 0.5) * 2;
        const size = Math.random() * 0.2 + 0.1;
        return (
          <mesh
            key={i}
            ref={(el) => (asteroids.current[i] = el)}
            position={[x, y, z]}
            castShadow
          >
            <dodecahedronGeometry args={[size, 0]} />
            <meshStandardMaterial color="#888888" roughness={0.8} metalness={0.2} />
          </mesh>
        );
      })}
    </group>
  );
});

const Nebula = memo(() => {
  const count = 100;
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 100;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 100;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 100;
    }
    return pos;
  }, [count]);

  return (
    <points>
      <bufferGeometry>
        <bufferAttribute
          attachObject={['attributes', 'position']}
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.5} color="#FF69B4" transparent opacity={0.6} />
    </points>
  );
});

const CameraController = () => {
  const { camera, gl } = useThree();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useFrame(() => {
    camera.position.y = 30 - scrollY * 0.1;
    camera.position.z = 70 - scrollY * 0.2;
    camera.lookAt(0, 0, 0);
  });

  return null;
};

const SpaceScene = memo(() => {
  const [canvasSize, setCanvasSize] = useState({ width: '100vw', height: '100vh' });

  useEffect(() => {
    const handleResize = () => {
      setCanvasSize({ width: `${window.innerWidth}px`, height: `${window.innerHeight}px` });
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div style={{ height: '300vh', background: '#000000' }}>
      <Canvas
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: canvasSize.width,
          height: canvasSize.height,
        }}
        camera={{ position: [0, 30, 70], fov: 60 }}
        gl={{ antialias: true }}
        shadows
      >
        <CameraController />
        <ambientLight intensity={0.2} />
        <pointLight position={[10, 10, 10]} intensity={1} castShadow />
        <spotLight
          position={[20, 30, 10]}
          angle={0.3}
          penumbra={1}
          intensity={1.5}
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
        />

        <Suspense fallback={<Html center>Loading solar system...</Html>}>
          <Sun />
          
          {/* Planets */}
          <Planet position={[0, 0, 4]} texture="https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Mercury_in_color_-_Prockter07_centered.jpg/1024px-Mercury_in_color_-_Prockter07_centered.jpg" size={0.4} rotationSpeed={0.05} orbitRadius={4} orbitSpeed={0.02} />
          <Planet position={[0, 0, 7]} texture="https://upload.wikimedia.org/wikipedia/commons/0/08/Venus_from_Mariner_10.jpg" size={0.9} rotationSpeed={0.03} orbitRadius={7} orbitSpeed={0.015} />
          <Planet position={[0, 0, 10]} texture="https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/The_Earth_seen_from_Apollo_17.jpg/1024px-The_Earth_seen_from_Apollo_17.jpg" size={1} rotationSpeed={0.01} orbitRadius={10} orbitSpeed={0.01} />
          <Planet position={[0, 0, 15]} texture="https://upload.wikimedia.org/wikipedia/commons/0/02/OSIRIS_Mars_true_color.jpg" size={0.5} rotationSpeed={0.009} orbitRadius={15} orbitSpeed={0.008} />
          <Planet position={[0, 0, 25]} texture="https://upload.wikimedia.org/wikipedia/commons/2/2b/Jupiter_and_its_shrunken_Great_Red_Spot.jpg" size={2.2} rotationSpeed={0.04} orbitRadius={25} orbitSpeed={0.002} />
          <Planet position={[0, 0, 35]} texture="https://upload.wikimedia.org/wikipedia/commons/c/c7/Saturn_during_Equinox.jpg" size={2} rotationSpeed={0.038} orbitRadius={35} orbitSpeed={0.0009} />
          <Planet position={[0, 0, 42]} texture="https://upload.wikimedia.org/wikipedia/commons/3/3d/Uranus2.jpg" size={1.5} rotationSpeed={0.03} orbitRadius={42} orbitSpeed={0.0004} />
          <Planet position={[0, 0, 48]} texture="https://upload.wikimedia.org/wikipedia/commons/6/63/Neptune_-_Voyager_2_%2829347980845%29_flatten_crop.jpg" size={1.4} rotationSpeed={0.032} orbitRadius={48} orbitSpeed={0.0001} />
          
          <AsteroidBelt />
          <Nebula />
        </Suspense>
        <Stars radius={300} depth={60} count={20000} factor={7} saturation={0} fade speed={1} />
        <OrbitControls enableZoom={true} enablePan={true} />
      </Canvas>
    </div>
  );
});

export default SpaceScene;