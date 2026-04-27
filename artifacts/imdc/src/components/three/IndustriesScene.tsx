import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Environment, Box, Cylinder, Sphere } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';

function Pillars() {
  const group = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y = state.clock.elapsedTime * 0.2;
    }
  });

  return (
    <group ref={group}>
      <Sphere args={[0.8, 32, 32]}>
        <meshStandardMaterial color="#DD3333" roughness={0.1} metalness={0.9} />
      </Sphere>
      
      <Float speed={2} rotationIntensity={0} floatIntensity={1} position={[2, 0, 0]}>
        <Box args={[0.4, 2, 0.4]}>
           <meshStandardMaterial color="#0a0a0a" roughness={0.2} metalness={0.8} />
        </Box>
      </Float>

      <Float speed={1.5} rotationIntensity={0} floatIntensity={1.5} position={[-2, 0, 0]}>
        <Cylinder args={[0.2, 0.2, 1.5, 32]}>
           <meshStandardMaterial color="#0a0a0a" roughness={0.2} metalness={0.8} />
        </Cylinder>
      </Float>

      <Float speed={2.5} rotationIntensity={0} floatIntensity={0.8} position={[0, 0, 2]}>
        <Box args={[0.3, 1.2, 0.3]}>
           <meshStandardMaterial color="#0a0a0a" roughness={0.2} metalness={0.8} />
        </Box>
      </Float>
      
      <Float speed={1.8} rotationIntensity={0} floatIntensity={1.2} position={[0, 0, -2]}>
        <Cylinder args={[0.25, 0.25, 1.8, 32]}>
           <meshStandardMaterial color="#0a0a0a" roughness={0.2} metalness={0.8} />
        </Cylinder>
      </Float>
    </group>
  );
}

export default function IndustriesScene() {
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none opacity-50">
      <Canvas 
        camera={{ position: [0, 2, 5], fov: 50 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 10, 5]} intensity={1} />
        
        <Pillars />
        
        <Environment preset="city" />
      </Canvas>
    </div>
  );
}