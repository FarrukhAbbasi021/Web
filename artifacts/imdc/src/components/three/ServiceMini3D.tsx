import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Environment, Sphere, TorusKnot, Icosahedron, Box, Torus, RoundedBox } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';

interface ServiceMini3DProps {
  variant: 'billing' | 'coding' | 'credentialing' | 'authorization' | 'claims' | 'support';
}

function Billing() {
  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <RoundedBox args={[1.5, 2, 0.1]} radius={0.05} rotation={[-0.2, 0.2, 0]}>
        <meshStandardMaterial color="#031B4E" roughness={0.2} metalness={0.8} />
      </RoundedBox>
    </Float>
  );
}

function Coding() {
  const group = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y = state.clock.elapsedTime * 0.5;
    }
  });

  return (
    <group ref={group}>
      <Float speed={2} rotationIntensity={1} floatIntensity={1}>
        <Box args={[0.8, 0.8, 0.8]} position={[-0.5, 0.5, 0]}>
          <meshStandardMaterial color="#031B4E" roughness={0.1} metalness={0.9} />
        </Box>
        <Box args={[0.6, 0.6, 0.6]} position={[0.6, -0.4, 0.2]}>
          <meshStandardMaterial color="#DD3333" roughness={0.1} metalness={0.9} />
        </Box>
      </Float>
    </group>
  );
}

function Credentialing() {
  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <Icosahedron args={[1, 0]}>
        <meshStandardMaterial color="#031B4E" roughness={0.1} metalness={0.9} />
      </Icosahedron>
    </Float>
  );
}

function Authorization() {
  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={1}>
      <TorusKnot args={[0.6, 0.2, 64, 16]}>
        <meshStandardMaterial color="#031B4E" roughness={0.1} metalness={0.9} />
      </TorusKnot>
    </Float>
  );
}

function Claims() {
  const rings = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (rings.current) {
      rings.current.rotation.x = state.clock.elapsedTime * 0.5;
      rings.current.rotation.y = state.clock.elapsedTime * 0.3;
    }
  });

  return (
    <group>
      <Sphere args={[0.5, 32, 32]}>
        <meshStandardMaterial color="#DD3333" roughness={0.2} metalness={0.8} />
      </Sphere>
      <group ref={rings}>
        <Torus args={[1, 0.05, 16, 64]} rotation={[Math.PI / 2, 0, 0]}>
          <meshStandardMaterial color="#031B4E" roughness={0.1} metalness={0.9} />
        </Torus>
        <Torus args={[1.2, 0.05, 16, 64]} rotation={[0, Math.PI / 4, 0]}>
          <meshStandardMaterial color="#031B4E" roughness={0.1} metalness={0.9} />
        </Torus>
      </group>
    </group>
  );
}

function Support() {
  const sphere = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (sphere.current) {
      const scale = 1 + Math.sin(state.clock.elapsedTime * 2) * 0.1;
      sphere.current.scale.set(scale, scale, scale);
    }
  });

  return (
    <Float speed={2} rotationIntensity={0} floatIntensity={1}>
      <Sphere ref={sphere} args={[1, 32, 32]}>
        <meshStandardMaterial 
          color="#DD3333" 
          emissive="#DD3333" 
          emissiveIntensity={0.5} 
          roughness={0.2} 
          metalness={0.8} 
        />
      </Sphere>
    </Float>
  );
}

export default function ServiceMini3D({ variant }: ServiceMini3DProps) {
  return (
    <div className="w-16 h-16 pointer-events-none">
      <Canvas 
        camera={{ position: [0, 0, 3], fov: 50 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <directionalLight position={[-5, -5, -5]} intensity={0.5} color="#DD3333" />
        
        {variant === 'billing' && <Billing />}
        {variant === 'coding' && <Coding />}
        {variant === 'credentialing' && <Credentialing />}
        {variant === 'authorization' && <Authorization />}
        {variant === 'claims' && <Claims />}
        {variant === 'support' && <Support />}
        
        <Environment preset="city" />
      </Canvas>
    </div>
  );
}