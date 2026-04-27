import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Float, Environment, Text } from "@react-three/drei";
import * as THREE from "three";

function HexShield() {
  const ref = useRef<THREE.Group>(null);
  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.y = state.clock.elapsedTime * 0.35;
    ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.12;
  });
  return (
    <Float speed={1.4} rotationIntensity={0.2} floatIntensity={0.5}>
      <group ref={ref}>
        {/* Outer hex frame */}
        <mesh>
          <cylinderGeometry args={[1.6, 1.6, 0.18, 6]} />
          <meshStandardMaterial color="#0a0a0a" roughness={0.15} metalness={0.95} envMapIntensity={1.6} />
        </mesh>
        {/* Inset center */}
        <mesh position={[0, 0, 0.001]}>
          <cylinderGeometry args={[1.25, 1.25, 0.22, 6]} />
          <meshStandardMaterial color="#171717" roughness={0.25} metalness={0.85} envMapIntensity={1.2} />
        </mesh>
        {/* Engraved cross */}
        <mesh position={[0, 0, 0.13]}>
          <boxGeometry args={[0.18, 1.0, 0.06]} />
          <meshStandardMaterial color="#FC3A3A" emissive="#DD3333" emissiveIntensity={1.4} toneMapped={false} />
        </mesh>
        <mesh position={[0, 0, 0.13]}>
          <boxGeometry args={[1.0, 0.18, 0.06]} />
          <meshStandardMaterial color="#FC3A3A" emissive="#DD3333" emissiveIntensity={1.4} toneMapped={false} />
        </mesh>
        {/* Glow ring */}
        <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
          <torusGeometry args={[1.75, 0.012, 12, 64]} />
          <meshStandardMaterial color="#FC3A3A" emissive="#DD3333" emissiveIntensity={1.2} toneMapped={false} />
        </mesh>
      </group>
    </Float>
  );
}

export default function EdgeScene() {
  return (
    <>
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 5, 5]} intensity={1.2} />
      <pointLight position={[-3, 2, 4]} intensity={2} color="#FC3A3A" />
      <pointLight position={[3, -2, 2]} intensity={0.8} color="#ffffff" />
      <Environment preset="studio" />
      <HexShield />
    </>
  );
}
