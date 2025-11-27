import { useRef, useEffect, useMemo } from 'react';
import { useThree, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const GlobalAnimation = () => {
  const particlesRef = useRef();
  const { size, viewport } = useThree();
  const mousePos = useRef({ x: 0, y: 0 });
  const scrollY = useRef(0);
  const targetScrollY = useRef(0);

  // Create particles in a larger space
  const { positions, originalPositions } = useMemo(() => {
    const count = 8000;
    const positions = new Float32Array(count * 3);
    const originalPositions = new Float32Array(count * 3);
    
    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      // Create particles in a larger volume
      const radius = Math.pow(Math.random(), 2) * 200;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      
      // Position particles in a sphere
      positions[i3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i3 + 2] = radius * Math.cos(phi);
      
      // Store original positions for animations
      originalPositions[i3] = positions[i3];
      originalPositions[i3 + 1] = positions[i3 + 1];
      originalPositions[i3 + 2] = positions[i3 + 2];
    }
    
    return { positions, originalPositions };
  }, []);

  // Handle scroll
  useEffect(() => {
    const handleScroll = () => {
      targetScrollY.current = window.scrollY;
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle mouse move for parallax effect
  useEffect(() => {
    const handleMouseMove = (event) => {
      mousePos.current = {
        x: (event.clientX / window.innerWidth - 0.5) * 2,
        y: (event.clientY / window.innerHeight - 0.5) * 2
      };
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Animation loop
  useFrame(({ clock }) => {
    if (!particlesRef.current) return;
    
    const time = clock.getElapsedTime();
    scrollY.current += (targetScrollY.current - scrollY.current) * 0.05;
    
    // Update particle positions
    const positions = particlesRef.current.geometry.attributes.position.array;
    
    for (let i = 0; i < positions.length; i += 3) {
      // Add subtle movement based on time
      const i3 = i / 3;
      const scrollFactor = 1 + (scrollY.current / window.innerHeight) * 0.5;
      
      // Base movement
      positions[i] = originalPositions[i] + Math.sin(time * 0.2 + i3 * 0.01) * 10;
      positions[i + 1] = originalPositions[i + 1] + Math.cos(time * 0.15 + i3 * 0.01) * 10;
      positions[i + 2] = originalPositions[i + 2] + Math.sin(time * 0.1 + i3 * 0.01) * 10;
      
      // Add parallax effect based on mouse position
      positions[i] += mousePos.current.x * 20 * scrollFactor;
      positions[i + 1] -= mousePos.current.y * 20 * scrollFactor;
      
      // Add scroll-based depth effect
      const depth = originalPositions[i + 2] / 200;
      positions[i + 2] += scrollY.current * 0.5 * depth;
    }
    
    particlesRef.current.geometry.attributes.position.needsUpdate = true;
    
    // Rotate the entire particle field slowly
    particlesRef.current.rotation.x = time * 0.03;
    particlesRef.current.rotation.y = time * 0.02;
  });

  return (
    <points ref={particlesRef}>
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
        size={0.4}
        sizeAttenuation={true}
        transparent={true}
        opacity={0.6}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
};

export default GlobalAnimation;
