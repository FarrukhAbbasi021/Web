import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Environment, Sparkles, Icosahedron, Torus } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';

function Shapes() {
  const group = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y = state.clock.elapsedTime * 0.05;
    }
  });

  return (
    <group ref={group}>
      <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1} position={[-2, 1, -2]}>
        <Icosahedron args={[1, 0]}>
          <meshStandardMaterial color="#0a0a0a" roughness={0.2} metalness={0.8} />
        </Icosahedron>
      </Float>
      
      <Float speed={2} rotationIntensity={0.8} floatIntensity={1.5} position={[2, -1, -1]}>
        <Torus args={[0.8, 0.2, 16, 32]}>
          <meshStandardMaterial color="#DD3333" roughness={0.1} metalness={0.9} />
        </Torus>
      </Float>

      <Float speed={1} rotationIntensity={0.2} floatIntensity={0.5} position={[0, 2, -3]}>
         <Icosahedron args={[0.5, 0]}>
          <meshStandardMaterial color="#0a0a0a" roughness={0.3} metalness={0.7} />
        </Icosahedron>
      </Float>
    </group>
  );
}

export default function AboutBackdrop() {
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none opacity-40">
      <Canvas 
        camera={{ position: [0, 0, 5], fov: 50 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        
        <Shapes />
        
        <Sparkles 
          count={50} 
          scale={10} 
          size={2} 
          speed={0.1} 
          opacity={0.3} 
          color="#0a0a0a" 
        />
        
        <Environment preset="city" />
      </Canvas>
    </div>
  );
}