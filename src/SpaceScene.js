import React, { Suspense, memo, useRef, useMemo, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars, Html, useTexture, Text } from '@react-three/drei';
import * as THREE from 'three';

const Planet = memo(({ name, position, texture, size, rotationSpeed, orbitRadius, orbitSpeed, hasMoon = false, hasRings = false }) => {
  const mesh = useRef();
  const planetTexture = useTexture(texture);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    mesh.current.rotation.y += rotationSpeed;
    mesh.current.position.x = Math.cos(time * orbitSpeed) * orbitRadius;
    mesh.current.position.z = Math.sin(time * orbitSpeed) * orbitRadius;
  });

  return (
    <group>
      <mesh ref={mesh} position={position} castShadow receiveShadow>
        <sphereGeometry args={[size, 64, 64]} />
        <meshStandardMaterial
          map={planetTexture}
          metalness={0.4}
          roughness={0.7}
        />
        <Text
          position={[0, size + 0.5, 0]}
          fontSize={0.5}
          color="white"
          anchorX="center"
          anchorY="middle"
        >
          {name}
        </Text>
      </mesh>
      {hasMoon && <Moon parentPlanet={mesh} />}
      {hasRings && <PlanetRings parentPlanet={mesh} size={size} />}
    </group>
  );
});

const Moon = memo(({ parentPlanet }) => {
  const moonRef = useRef();
  const moonTexture = useTexture('https://upload.wikimedia.org/wikipedia/commons/1/10/3D_Moon%21_%28LROC733_-_3d_normalized_mosaic_8bit%29.png');

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    moonRef.current.position.x = parentPlanet.current.position.x + Math.cos(time * 0.5) * 2;
    moonRef.current.position.z = parentPlanet.current.position.z + Math.sin(time * 0.5) * 2;
    moonRef.current.rotation.y += 0.02;
  });

  return (
    <mesh ref={moonRef} castShadow receiveShadow>
      <sphereGeometry args={[0.27, 32, 32]} />
      <meshStandardMaterial map={moonTexture} metalness={0.4} roughness={0.7} />
    </mesh>
  );
});

const PlanetRings = memo(({ parentPlanet, size }) => {
  const ringsRef = useRef();
  const ringTexture = useTexture('https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Saturn%27s_rings_dark_side_mosaic.jpg/1024px-Saturn%27s_rings_dark_side_mosaic.jpg');

  useFrame(() => {
    ringsRef.current.position.set(
      parentPlanet.current.position.x,
      parentPlanet.current.position.y,
      parentPlanet.current.position.z
    );
    ringsRef.current.rotation.x = Math.PI / 3;
  });

  return (
    <mesh ref={ringsRef} receiveShadow>
      <ringGeometry args={[size * 1.2, size * 1.8, 64]} />
      <meshStandardMaterial map={ringTexture} side={THREE.DoubleSide} transparent opacity={0.8} />
    </mesh>
  );
});

const Sun = memo(() => {
  const sunTexture = useTexture('https://upload.wikimedia.org/wikipedia/commons/b/b4/The_Sun_by_the_Atmospheric_Imaging_Assembly_of_NASA%27s_Solar_Dynamics_Observatory_-_20100819.jpg');

  return (
    <mesh position={[0, 0, 0]}>
      <sphereGeometry args={[5, 64, 64]} />
      <meshBasicMaterial map={sunTexture} />
      <pointLight intensity={2} distance={150} color="#FDB813" />
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
      {[...Array(600)].map((_, i) => {
        const radius = Math.random() * 6 + 35;
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
            <meshStandardMaterial color="#8B7D82" roughness={0.8} metalness={0.2} />
          </mesh>
        );
      })}
    </group>
  );
});

const Nebula = memo(() => {
  const count = 500;
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 200;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 200;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 200;
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
      <pointsMaterial size={1.5} color="#FF69B4" transparent opacity={0.6} />
    </points>
  );
});

const Comet = memo(() => {
  const cometRef = useRef();
  const [cometPath] = useState(() => {
    const curve = new THREE.EllipseCurve(
      0, 0,
      80, 40,
      0, 2 * Math.PI,
      false,
      0
    );
    return new THREE.BufferGeometry().setFromPoints(curve.getPoints(100));
  });

  useFrame(({ clock }) => {
    const t = (clock.getElapsedTime() * 0.1) % 1;
    const pos = new THREE.Vector3();
    const tangent = new THREE.Vector3();
    const position = cometPath.attributes.position;
    const point = t * position.count;
    const index = Math.floor(point);
    const frac = point - index;

    pos.fromBufferAttribute(position, index % position.count);
    tangent.fromBufferAttribute(position, (index + 1) % position.count).sub(pos);
    pos.add(tangent.multiplyScalar(frac));

    cometRef.current.position.set(pos.x, 0, pos.y);
  });

  return (
    <group ref={cometRef}>
      <mesh>
        <sphereGeometry args={[0.5, 16, 16]} />
        <meshBasicMaterial color="#4FC3F7" />
      </mesh>
      <mesh position={[-1, 0, 0]}>
        <coneGeometry args={[0.2, 2, 16]} rotation={[0, 0, -Math.PI / 2]} />
        <meshBasicMaterial color="#81D4FA" transparent opacity={0.6} />
      </mesh>
    </group>
  );
});

const SpaceShip = () => {
  const mesh = useRef();

  useFrame(({ clock }) => {
    if (mesh.current) {
      mesh.current.position.y = Math.sin(clock.getElapsedTime()) * 0.5;
      mesh.current.rotation.z = Math.sin(clock.getElapsedTime() * 2) * 0.1;
    }
  });

  return (
    <group ref={mesh} position={[20, 0, -10]}>
      <mesh>
        <coneGeometry args={[1, 2, 4]} />
        <meshStandardMaterial color="#SILVER" metalness={0.8} roughness={0.2} />
      </mesh>
      <mesh position={[0, -1.5, 0]}>
        <boxGeometry args={[0.5, 1, 0.5]} />
        <meshStandardMaterial color="#FF6347" metalness={0.6} roughness={0.4} />
      </mesh>
    </group>
  );
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
        camera={{ position: [0, 50, 120], fov: 60 }}
        gl={{ antialias: true }}
        shadows
      >
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={1.5} castShadow />
        <spotLight
          position={[20, 30, 10]}
          angle={0.3}
          penumbra={1}
          intensity={2}
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
        />

        <Suspense fallback={<Html center>Loading solar system...</Html>}>
          <Sun />

          {/* Planets */}
          <Planet name="Mercury" position={[0, 0, 10]} texture="https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Mercury_in_color_-_Prockter07_centered.jpg/1024px-Mercury_in_color_-_Prockter07_centered.jpg" size={0.8} rotationSpeed={0.05} orbitRadius={10} orbitSpeed={0.02} />
          <Planet name="Venus" position={[0, 0, 18]} texture="https://upload.wikimedia.org/wikipedia/commons/0/08/Venus_from_Mariner_10.jpg" size={1.8} rotationSpeed={0.03} orbitRadius={18} orbitSpeed={0.015} />
          <Planet name="Earth" position={[0, 0, 26]} texture="https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/The_Earth_seen_from_Apollo_17.jpg/1024px-The_Earth_seen_from_Apollo_17.jpg" size={2} rotationSpeed={0.01} orbitRadius={26} orbitSpeed={0.01} hasMoon={true} />
          <Planet name="Mars" position={[0, 0, 38]} texture="https://upload.wikimedia.org/wikipedia/commons/0/02/OSIRIS_Mars_true_color.jpg" size={1} rotationSpeed={0.009} orbitRadius={38} orbitSpeed={0.008} />
          <Planet name="Jupiter" position={[0, 0, 60]} texture="https://upload.wikimedia.org/wikipedia/commons/2/2b/Jupiter_and_its_shrunken_Great_Red_Spot.jpg" size={4.4} rotationSpeed={0.04} orbitRadius={60} orbitSpeed={0.002} />
          <Planet name="Saturn" position={[0, 0, 82]} texture="https://upload.wikimedia.org/wikipedia/commons/c/c7/Saturn_during_Equinox.jpg" size={4} rotationSpeed={0.038} orbitRadius={82} orbitSpeed={0.0009} hasRings={true} />
          <Planet name="Uranus" position={[0, 0, 98]} texture="https://upload.wikimedia.org/wikipedia/commons/3/3d/Uranus2.jpg" size={3} rotationSpeed={0.03} orbitRadius={98} orbitSpeed={0.0004} />
          <Planet name="Neptune" position={[0, 0, 112]} texture="https://upload.wikimedia.org/wikipedia/commons/6/63/Neptune_-_Voyager_2_%2829347980845%29_flatten_crop.jpg" size={2.8} rotationSpeed={0.032} orbitRadius={112} orbitSpeed={0.0001} />

          <AsteroidBelt />
          <Nebula />
          <SpaceShip />
          <Comet />
        </Suspense>
        <Stars radius={300} depth={60} count={20000} factor={7} saturation={0} fade speed={1} />
        <OrbitControls enableZoom={true} enablePan={true} />
      </Canvas>
    </div>
  );
});

export default SpaceScene;