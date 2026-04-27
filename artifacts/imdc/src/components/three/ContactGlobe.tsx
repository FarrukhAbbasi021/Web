import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, Sphere } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';

function Globe() {
  const sphere = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (sphere.current) {
      sphere.current.rotation.y = state.clock.elapsedTime * 0.1;
      sphere.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
    }
  });

  return (
    <group>
      <Sphere ref={sphere} args={[2, 64, 64]}>
        <meshStandardMaterial 
          color="#031B4E" 
          roughness={0.1} 
          metalness={0.8} 
        />
      </Sphere>
      <Sphere args={[2.02, 32, 32]}>
        <meshBasicMaterial 
          color="#DD3333" 
          wireframe
          transparent
          opacity={0.15}
        />
      </Sphere>
    </group>
  );
}

export default function ContactGlobe() {
  return (
    <div className="w-full h-full min-h-[300px] pointer-events-none">
      <Canvas 
        camera={{ position: [0, 0, 5], fov: 45 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 3, 5]} intensity={1} />
        <directionalLight position={[-5, -3, -5]} intensity={0.5} color="#DD3333" />
        
        <Globe />
        
        <Environment preset="city" />
      </Canvas>
    </div>
  );
}