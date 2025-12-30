"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";

function WireframeSphere() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.08;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.12;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.8}>
      <mesh ref={meshRef} scale={2.8}>
        <icosahedronGeometry args={[1, 1]} />
        <meshBasicMaterial
          color="#00fff5"
          wireframe
          transparent
          opacity={0.25}
        />
      </mesh>
    </Float>
  );
}

function InnerTorus() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.15;
      meshRef.current.rotation.z = state.clock.getElapsedTime() * 0.1;
    }
  });

  return (
    <mesh ref={meshRef} scale={1.8}>
      <torusGeometry args={[1, 0.015, 16, 100]} />
      <meshBasicMaterial color="#ff00ff" transparent opacity={0.4} />
    </mesh>
  );
}

function SecondTorus() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.12;
      meshRef.current.rotation.x = Math.PI / 4;
    }
  });

  return (
    <mesh ref={meshRef} scale={2.2}>
      <torusGeometry args={[1, 0.01, 16, 100]} />
      <meshBasicMaterial color="#00fff5" transparent opacity={0.3} />
    </mesh>
  );
}

function FloatingParticles() {
  const particlesRef = useRef<THREE.Points>(null);
  
  const particleCount = 150;
  const positions = useMemo(() => {
    const pos = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      const radius = 3 + Math.random() * 4;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      
      pos[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = radius * Math.cos(phi);
    }
    return pos;
  }, []);

  const colors = useMemo(() => {
    const cols = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      const isCyan = Math.random() > 0.5;
      cols[i * 3] = isCyan ? 0 : 1;
      cols[i * 3 + 1] = isCyan ? 1 : 0;
      cols[i * 3 + 2] = isCyan ? 0.96 : 1;
    }
    return cols;
  }, []);

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.getElapsedTime() * 0.03;
      particlesRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.05) * 0.1;
    }
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particleCount}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={particleCount}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.025}
        vertexColors
        transparent
        opacity={0.8}
        sizeAttenuation
      />
    </points>
  );
}

function Scene3D() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <WireframeSphere />
      <InnerTorus />
      <SecondTorus />
      <FloatingParticles />
    </>
  );
}

export function HeroScene() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 70 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <Scene3D />
      </Canvas>
    </div>
  );
}

// Fallback animated gradient for mobile/low-performance devices
export function HeroGradient() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {/* Animated mesh gradient */}
      <div className="absolute inset-0 mesh-gradient animate-gradient bg-[length:200%_200%]" />
      
      {/* Floating orbs */}
      <div className="absolute top-1/4 left-1/4 w-80 h-80 rounded-full bg-cyan/20 blur-[100px] animate-float" />
      <div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-magenta/20 blur-[100px] animate-float"
        style={{ animationDelay: "-3s" }}
      />
      <div
        className="absolute top-1/2 right-1/3 w-64 h-64 rounded-full bg-neutral-100 dark:bg-neutral-800 blur-[80px] animate-float"
        style={{ animationDelay: "-1.5s" }}
      />

      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0, 255, 245, 0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 245, 0.5) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />
    </div>
  );
}
