import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { Float, Sparkles, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

function ParticleField() {
  const pointsRef = useRef<THREE.Points>(null);
  const count = 380;

  const { positions, colors } = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const red = new THREE.Color("#FC3A3A");
    const charcoal = new THREE.Color("#1a1a1a");
    for (let i = 0; i < count; i++) {
      const r = 2.5 + Math.random() * 4.5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta) * 0.6;
      positions[i * 3 + 2] = r * Math.cos(phi);
      const mix = Math.random() > 0.7 ? red : charcoal;
      colors[i * 3] = mix.r;
      colors[i * 3 + 1] = mix.g;
      colors[i * 3 + 2] = mix.b;
    }
    return { positions, colors };
  }, []);

  useFrame((state) => {
    if (!pointsRef.current) return;
    pointsRef.current.rotation.y = state.clock.elapsedTime * 0.08;
    pointsRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.15) * 0.1;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} />
        <bufferAttribute attach="attributes-color" count={count} array={colors} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.04} vertexColors transparent opacity={0.85} sizeAttenuation />
    </points>
  );
}

function CoreOrb() {
  const meshRef = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.y = state.clock.elapsedTime * 0.25;
    meshRef.current.rotation.x = state.clock.elapsedTime * 0.12;
  });
  return (
    <Float speed={1.2} rotationIntensity={0.4} floatIntensity={0.6}>
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[1.4, 4]} />
        <MeshDistortMaterial
          color="#0a0a0a"
          roughness={0.18}
          metalness={0.95}
          distort={0.32}
          speed={1.6}
          envMapIntensity={1.4}
        />
      </mesh>
    </Float>
  );
}

function RedRings() {
  const groupRef = useRef<THREE.Group>(null);
  useFrame((state) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.z = state.clock.elapsedTime * 0.18;
    groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.4) * 0.3;
  });
  return (
    <group ref={groupRef}>
      <mesh rotation={[Math.PI / 2.2, 0, 0]}>
        <torusGeometry args={[2.2, 0.012, 16, 128]} />
        <meshStandardMaterial color="#FC3A3A" emissive="#DD3333" emissiveIntensity={1.2} toneMapped={false} />
      </mesh>
      <mesh rotation={[Math.PI / 1.8, Math.PI / 4, 0]}>
        <torusGeometry args={[2.6, 0.008, 16, 128]} />
        <meshStandardMaterial color="#FC3A3A" emissive="#DD3333" emissiveIntensity={0.9} toneMapped={false} />
      </mesh>
    </group>
  );
}

export default function HeroScene() {
  return (
    <>
      <color attach="background" args={["#000000"]} />
      <fog attach="fog" args={["#000000", 7, 16]} />
      <ambientLight intensity={0.35} />
      <pointLight position={[5, 3, 5]} intensity={2.4} color="#FC3A3A" />
      <pointLight position={[-5, -2, 4]} intensity={1.4} color="#ffffff" />
      <directionalLight position={[3, 6, 4]} intensity={0.8} />
      <CoreOrb />
      <RedRings />
      <ParticleField />
      <Sparkles count={60} scale={[10, 6, 6]} size={1.5} speed={0.3} color="#FC3A3A" opacity={0.6} />
    </>
  );
}
