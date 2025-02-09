// src/components/Loading3D.js
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text3D, OrbitControls } from '@react-three/drei';
import robotoFont from 'three/examples/fonts/helvetiker_regular.typeface.json';

function Sphere() {
  const ref = useRef();
  // Animação da rotação da esfera
  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.x += 0.01;
      ref.current.rotation.y += 0.01;
    }
  });
  return (
    <mesh ref={ref}>
      <sphereGeometry args={[1, 64, 64]} />
      <meshStandardMaterial 
        color={0x9933ff} 
        transparent 
        opacity={0.8} 
        metalness={0.6} 
        roughness={0.2} 
      />
    </mesh>
  );
}

function Orbit({ radius = 1.2, tube = 0.02, speed = 0.005 }) {
  const ref = useRef();
  // Gira a órbita ao longo do tempo
  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.x += speed;
      ref.current.rotation.y += speed;
    }
  });
  return (
    <mesh ref={ref}>
      {/* Usamos torusGeometry para criar uma "cintura" em volta da esfera */}
      <torusGeometry args={[radius, tube, 16, 100]} />
      <meshBasicMaterial color="white" transparent opacity={0.6} />
    </mesh>
  );
}

function LoadingText() {
  const ref = useRef();
  // Efeito de pulsação usando uma função seno para variar o scale
  useFrame((state) => {
    if (ref.current) {
      const scale = 1 + Math.sin(state.clock.elapsedTime * 2) * 0.2;
      ref.current.scale.set(scale, scale, scale);
    }
  });
  return (
    <Text3D
      ref={ref}
      font={robotoFont}
      position={[-1.5, -2, 0]}    // Ajuste a posição conforme desejado
      size={0.5}
      height={0.1}
      curveSegments={12}
      bevelEnabled
      bevelThickness={0.02}
      bevelSize={0.02}
      bevelOffset={0}
      bevelSegments={5}
    >
      Loading...
      <meshStandardMaterial attach="material" color="blue" />
    </Text3D>
  );
}

export default function Loading3D() {
  return (
    <Canvas
      style={{ height: '100vh', width: '100vw', background: '#3b444b' }}
      camera={{ position: [0, 0, 4] }}
    >
      {/* Luzes para destacar os elementos 3D */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[3, 3, 3]} intensity={1} />
      
      <Sphere />
      <Orbit radius={1.2} tube={0.02} speed={0.005} />
      <Orbit radius={1.4} tube={0.02} speed={0.007} />
      <Orbit radius={1.6} tube={0.02} speed={0.009} />

      {/* Texto 3D com efeito de pulsação */}
      <LoadingText />
      <OrbitControls />
    </Canvas>
  );
}
