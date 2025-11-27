import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const ParticleField = ({ count = 3000 }) => {
  const mesh = useRef();
  
  // Create particle positions
  const positions = useMemo(() => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      // Create a more spread out field with some particles closer and some further
      const radius = 40 + Math.pow(Math.random(), 2) * 60;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      
      positions[i3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i3 + 2] = radius * Math.cos(phi);
    }
    return positions;
  }, [count]);

  useFrame(({ clock }) => {
    if (mesh.current) {
      const time = clock.getElapsedTime();
      // Subtle rotation and movement
      mesh.current.rotation.x = time * 0.05;
      mesh.current.rotation.y = time * 0.03;
      mesh.current.rotation.z = time * 0.02;
    }
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        color="#4f8fff"
        size={0.2}
        sizeAttenuation
        transparent
        opacity={0.6}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
};

const AboutAnimation = () => {
  return (
    <div style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: 0,
      opacity: 0.4
    }}>
      <Canvas camera={{ position: [0, 0, 50], fov: 60 }}>
        <ParticleField count={3000} />
      </Canvas>
    </div>
  );
};

export default AboutAnimation;
