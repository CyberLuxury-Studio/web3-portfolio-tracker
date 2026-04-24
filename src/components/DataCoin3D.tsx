"use client";
import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, MeshTransmissionMaterial } from '@react-three/drei';
import * as THREE from 'three';

export default function DataCoin3D() {
  const groupRef = useRef<THREE.Group>(null);
  const innerTorusRef = useRef<THREE.Mesh>(null);
  const outerTorusRef = useRef<THREE.Mesh>(null);
  const coreRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.2;
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.5;
    }
    if (innerTorusRef.current) {
      innerTorusRef.current.rotation.x = state.clock.elapsedTime * 0.8;
      innerTorusRef.current.rotation.y = state.clock.elapsedTime * 0.2;
    }
    if (outerTorusRef.current) {
      outerTorusRef.current.rotation.x = -state.clock.elapsedTime * 0.4;
      outerTorusRef.current.rotation.z = state.clock.elapsedTime * 0.3;
    }
    if(coreRef.current) {
      coreRef.current.rotation.y = state.clock.elapsedTime * 2;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <group ref={groupRef} scale={1.5}>
        <mesh ref={coreRef}>
          <cylinderGeometry args={[0.8, 0.8, 0.2, 32]} />
          <MeshTransmissionMaterial
            thickness={0.5}
            roughness={0.1}
            transmission={1}
            ior={1.5}
            chromaticAberration={0.1}
            color="#00FFFF"
          />
        </mesh>

        <mesh ref={innerTorusRef}>
          <torusGeometry args={[1.2, 0.05, 16, 100]} />
          <meshStandardMaterial color="#00FF00" wireframe />
        </mesh>

        <mesh ref={outerTorusRef}>
          <torusGeometry args={[1.5, 0.02, 16, 100]} />
          <meshStandardMaterial color="#00FFFF" wireframe />
        </mesh>

        {Array.from({ length: 8 }).map((_, i) => (
          <mesh
            key={i}
            position={[
              Math.cos((i / 8) * Math.PI * 2) * 1.8,
              Math.sin((i / 8) * Math.PI * 2) * 0.5,
              Math.sin((i / 8) * Math.PI * 2) * 1.8
            ]}
          >
            <sphereGeometry args={[0.05, 16, 16]} />
            <meshBasicMaterial color="#00FF00" />
          </mesh>
        ))}
      </group>
    </Float>
  );
}
