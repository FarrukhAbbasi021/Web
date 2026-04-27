import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Float, Environment, Sparkles } from "@react-three/drei";
import * as THREE from "three";

type Variant = "billing" | "coding" | "credentialing" | "authorization" | "claims" | "support";

function BillingDoc() {
  const ref = useRef<THREE.Group>(null);
  useFrame((s) => {
    if (!ref.current) return;
    ref.current.rotation.y = Math.sin(s.clock.elapsedTime * 0.6) * 0.4;
  });
  return (
    <Float speed={1.2} rotationIntensity={0.3} floatIntensity={0.6}>
      <group ref={ref} rotation={[-0.2, 0.4, 0]}>
        <mesh>
          <boxGeometry args={[1.4, 1.8, 0.04]} />
          <meshStandardMaterial color="#0a0a0a" roughness={0.18} metalness={0.85} />
        </mesh>
        {[0.5, 0.2, -0.1, -0.4].map((y, i) => (
          <mesh key={i} position={[i === 3 ? -0.35 : 0, y, 0.03]}>
            <boxGeometry args={[i === 3 ? 0.5 : 1.0, 0.06, 0.02]} />
            <meshStandardMaterial color={i === 0 ? "#FC3A3A" : "#444"} emissive={i === 0 ? "#DD3333" : "#000"} emissiveIntensity={i === 0 ? 1 : 0} toneMapped={false} />
          </mesh>
        ))}
        <mesh position={[0.45, 0.7, 0.03]}>
          <circleGeometry args={[0.18, 32]} />
          <meshStandardMaterial color="#FC3A3A" emissive="#DD3333" emissiveIntensity={1} toneMapped={false} />
        </mesh>
      </group>
    </Float>
  );
}

function CodingCubes() {
  const ref = useRef<THREE.Group>(null);
  useFrame((s) => {
    if (!ref.current) return;
    ref.current.rotation.y = s.clock.elapsedTime * 0.4;
    ref.current.rotation.x = s.clock.elapsedTime * 0.2;
  });
  const positions: [number, number, number][] = [
    [0, 0, 0],
    [0.9, 0.3, -0.2],
    [-0.7, -0.2, 0.3],
    [0.2, -0.7, 0.1],
  ];
  return (
    <group ref={ref}>
      {positions.map((p, i) => (
        <Float key={i} speed={1 + i * 0.2} floatIntensity={0.5} rotationIntensity={0.4}>
          <mesh position={p}>
            <boxGeometry args={[0.55, 0.55, 0.55]} />
            <meshStandardMaterial color={i === 1 ? "#FC3A3A" : "#0a0a0a"} emissive={i === 1 ? "#DD3333" : "#000"} emissiveIntensity={i === 1 ? 0.6 : 0} roughness={0.2} metalness={0.9} toneMapped={false} />
          </mesh>
        </Float>
      ))}
    </group>
  );
}

function CredentialingBadge() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((s) => {
    if (!ref.current) return;
    ref.current.rotation.y = s.clock.elapsedTime * 0.5;
  });
  return (
    <Float speed={1.2} rotationIntensity={0.3} floatIntensity={0.5}>
      <group>
        <mesh ref={ref}>
          <cylinderGeometry args={[1.1, 1.1, 0.18, 6]} />
          <meshStandardMaterial color="#0a0a0a" roughness={0.15} metalness={0.95} />
        </mesh>
        <mesh position={[0, 0, 0]}>
          <cylinderGeometry args={[0.85, 0.85, 0.22, 6]} />
          <meshStandardMaterial color="#171717" roughness={0.25} metalness={0.85} />
        </mesh>
        <mesh position={[0, 0, 0.13]}>
          <torusGeometry args={[0.45, 0.04, 16, 64]} />
          <meshStandardMaterial color="#FC3A3A" emissive="#DD3333" emissiveIntensity={1.2} toneMapped={false} />
        </mesh>
      </group>
    </Float>
  );
}

function AuthorizationKey() {
  const ref = useRef<THREE.Group>(null);
  useFrame((s) => {
    if (!ref.current) return;
    ref.current.rotation.z = Math.sin(s.clock.elapsedTime * 0.6) * 0.3;
    ref.current.rotation.y = s.clock.elapsedTime * 0.3;
  });
  return (
    <Float speed={1.4} rotationIntensity={0.3} floatIntensity={0.6}>
      <group ref={ref}>
        <mesh position={[-0.5, 0, 0]}>
          <torusGeometry args={[0.45, 0.12, 16, 32]} />
          <meshStandardMaterial color="#0a0a0a" roughness={0.15} metalness={0.95} />
        </mesh>
        <mesh position={[0.4, 0, 0]}>
          <boxGeometry args={[1.4, 0.18, 0.18]} />
          <meshStandardMaterial color="#0a0a0a" roughness={0.15} metalness={0.95} />
        </mesh>
        <mesh position={[0.85, -0.15, 0]}>
          <boxGeometry args={[0.18, 0.32, 0.18]} />
          <meshStandardMaterial color="#FC3A3A" emissive="#DD3333" emissiveIntensity={1.2} toneMapped={false} />
        </mesh>
      </group>
    </Float>
  );
}

function ClaimsRings() {
  const g1 = useRef<THREE.Group>(null);
  const g2 = useRef<THREE.Group>(null);
  const g3 = useRef<THREE.Group>(null);
  useFrame((s) => {
    if (g1.current) g1.current.rotation.y = s.clock.elapsedTime * 0.6;
    if (g2.current) g2.current.rotation.x = s.clock.elapsedTime * 0.5;
    if (g3.current) g3.current.rotation.z = s.clock.elapsedTime * 0.4;
  });
  return (
    <group>
      <mesh>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial color="#FC3A3A" emissive="#DD3333" emissiveIntensity={0.8} roughness={0.3} metalness={0.4} toneMapped={false} />
      </mesh>
      <group ref={g1}>
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[1.0, 0.025, 16, 64]} />
          <meshStandardMaterial color="#0a0a0a" roughness={0.15} metalness={0.95} />
        </mesh>
      </group>
      <group ref={g2}>
        <mesh rotation={[0, 0, Math.PI / 3]}>
          <torusGeometry args={[1.3, 0.02, 16, 64]} />
          <meshStandardMaterial color="#0a0a0a" roughness={0.15} metalness={0.95} />
        </mesh>
      </group>
      <group ref={g3}>
        <mesh rotation={[Math.PI / 4, 0, Math.PI / 2]}>
          <torusGeometry args={[1.6, 0.018, 16, 64]} />
          <meshStandardMaterial color="#FC3A3A" emissive="#DD3333" emissiveIntensity={0.7} toneMapped={false} />
        </mesh>
      </group>
    </group>
  );
}

function SupportSphere() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((s) => {
    if (!ref.current) return;
    const scale = 1 + Math.sin(s.clock.elapsedTime * 1.4) * 0.06;
    ref.current.scale.set(scale, scale, scale);
    ref.current.rotation.y = s.clock.elapsedTime * 0.3;
  });
  return (
    <Float speed={1.0} floatIntensity={0.4}>
      <mesh ref={ref}>
        <sphereGeometry args={[1.1, 64, 64]} />
        <meshStandardMaterial color="#0a0a0a" emissive="#DD3333" emissiveIntensity={0.35} roughness={0.2} metalness={0.95} envMapIntensity={1.5} />
      </mesh>
      <Sparkles count={28} scale={[3, 3, 3]} size={2} speed={0.5} color="#FC3A3A" />
    </Float>
  );
}

export default function ServiceMini3D({ variant }: { variant: Variant }) {
  const Scene = {
    billing: BillingDoc,
    coding: CodingCubes,
    credentialing: CredentialingBadge,
    authorization: AuthorizationKey,
    claims: ClaimsRings,
    support: SupportSphere,
  }[variant];

  return (
    <>
      <ambientLight intensity={0.4} />
      <directionalLight position={[3, 4, 3]} intensity={1.3} />
      <pointLight position={[-3, 2, 3]} intensity={1.6} color="#FC3A3A" />
      <Environment preset="warehouse" />
      <Scene />
    </>
  );
}
