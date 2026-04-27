import { Canvas, useFrame } from '@react-three/fiber';
import { Float, RoundedBox, Environment, Torus } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';

function Shield() {
  const group = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
    }
  });

  return (
    <group ref={group}>
      <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
        <RoundedBox args={[2, 2, 0.2]} radius={0.1} smoothness={4} rotation={[0, 0, Math.PI / 4]}>
          <meshStandardMaterial 
            color="#031B4E" 
            roughness={0.1} 
            metalness={0.8}
            envMapIntensity={1.5}
          />
        </RoundedBox>
        <Torus args={[1, 0.05, 16, 6]}>
          <meshStandardMaterial 
            color="#DD3333"
            emissive="#DD3333"
            emissiveIntensity={0.2}
            roughness={0.2}
            metalness={0.8}
          />
        </Torus>
      </Float>
    </group>
  );
}

export default function EdgeScene() {
  return (
    <div className="w-full h-[400px] pointer-events-none">
      <Canvas 
        camera={{ position: [0, 0, 5], fov: 40 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <directionalLight position={[-5, -5, -5]} intensity={0.2} />
        
        <Shield />
        
        <Environment preset="studio" />
      </Canvas>
    </div>
  );
}