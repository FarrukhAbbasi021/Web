import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Environment, Sparkles, Sphere, Line, Torus } from '@react-three/drei';
import { useRef, useMemo } from 'react';
import * as THREE from 'three';

function Nodes() {
  const group = useRef<THREE.Group>(null);
  
  const nodesCount = 8;
  const nodes = useMemo(() => {
    return Array.from({ length: nodesCount }).map((_, i) => {
      const angle = (i / nodesCount) * Math.PI * 2;
      const radius = 2.5 + Math.random() * 0.5;
      return {
        position: [
          Math.cos(angle) * radius,
          (Math.random() - 0.5) * 2,
          Math.sin(angle) * radius
        ] as [number, number, number],
        color: Math.random() > 0.5 ? '#DD3333' : '#031B4E'
      };
    });
  }, []);

  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y = state.clock.elapsedTime * 0.1;
      group.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
    }
  });

  return (
    <group ref={group}>
      {nodes.map((node, i) => (
        <Float key={i} speed={2} rotationIntensity={0.5} floatIntensity={1}>
          <Sphere position={node.position} args={[0.15, 32, 32]}>
            <meshStandardMaterial 
              color={node.color} 
              emissive={node.color}
              emissiveIntensity={0.5}
              roughness={0.1}
              metalness={0.8}
            />
          </Sphere>
          {/* Lines connecting to center */}
          <Line 
            points={[[0, 0, 0], node.position]} 
            color={node.color} 
            lineWidth={1}
            transparent
            opacity={0.3}
          />
        </Float>
      ))}
      <Torus args={[1.5, 0.4, 32, 100]}>
        <meshStandardMaterial 
          color="#031B4E" 
          roughness={0.1} 
          metalness={0.9} 
          envMapIntensity={2}
        />
      </Torus>
    </group>
  );
}

export default function HeroScene() {
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none">
      <Canvas 
        camera={{ position: [0, 0, 6], fov: 50 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <directionalLight position={[-10, -10, -5]} intensity={0.5} color="#DD3333" />
        
        <Nodes />
        
        <Sparkles 
          count={100} 
          scale={10} 
          size={2} 
          speed={0.2} 
          opacity={0.2} 
          color="#ffffff" 
        />
        
        <Environment preset="city" />
      </Canvas>
    </div>
  );
}