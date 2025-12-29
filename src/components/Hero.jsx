import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import Header from './Header';

// Animated Particles Component
const AnimatedParticles = ({ count = 5000 }) => {
  const mesh = useRef();
  const { size, viewport } = useThree();
  const mousePos = useRef({ x: 0, y: 0 });

  const positions = useMemo(() => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      const radius = Math.pow(Math.random(), 2) * 50;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      
      positions[i3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i3 + 2] = radius * Math.cos(phi);
    }
    return positions;
  }, [count]);

  useFrame(({ clock, mouse: mouseState }) => {
    if (mesh.current) {
      const time = clock.getElapsedTime();
      mousePos.current.x += (mouseState.x * 2 - mousePos.current.x) * 0.1;
      mousePos.current.y += (mouseState.y * 2 - mousePos.current.y) * 0.1;
      
      mesh.current.rotation.x = time * 0.1;
      mesh.current.rotation.y = time * 0.15;
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
        size={0.1}
        sizeAttenuation
        transparent
        opacity={0.8}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
};

// Main Hero Component
const Hero = () => {
  return (
    <div style={{ 
      position: 'relative', 
      width: '100%', 
      minHeight: '100vh',
      overflow: 'hidden',
      backgroundColor: '#0a0a14',
      paddingTop: '90px', // Space for fixed header
      display: 'flex',
      alignItems: 'center'
    }}>
      {/* Main Content */}
      <div style={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '2rem 1rem',
        position: 'relative',
        zIndex: 2,
        marginTop: '-40px' // Pull content up slightly to account for header
      }}>
        <h1 id="home" style={{
          fontSize: 'clamp(2.5rem, 8vw, 5rem)',
          fontWeight: 800,
          margin: 0,
          marginBottom: '1.5rem',
          textAlign: 'center',
          color: 'white',
          lineHeight: 1.2,
          textTransform: 'uppercase',
          letterSpacing: '2px',
          opacity: 0,
          animation: 'fadeInUp 1s ease-out 0.3s forwards'
        }}>
          WE ARE NOT COMMON
          <br />
          <span style={{
            display: 'inline-block',
            marginTop: '0.5rem',
            background: 'linear-gradient(90deg, #4f8fff, #8a2be2)', 
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            WE ARE CREATIVE
          </span>
        </h1>
        
        <p style={{
          fontSize: 'clamp(1rem, 2vw, 1.25rem)',
          color: 'rgba(255, 255, 255, 0.8)',
          maxWidth: '800px',
          textAlign: 'center',
          margin: '0 auto 3rem',
          lineHeight: 1.6
        }}>
          We create stunning digital experiences that help businesses grow and succeed in the digital world.
        </p>
        
        {/* <div style={{
          display: 'flex',
          gap: '1rem',
          marginBottom: '4rem'
        }}>
          <button style={{
            padding: '0.8rem 2rem',
            fontSize: '1rem',
            fontWeight: 600,
            color: 'white',
            background: 'linear-gradient(90deg, #4f8fff, #8a2be2)',
            border: 'none',
            borderRadius: '30px',
            cursor: 'pointer',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            ':hover': {
              transform: 'translateY(-2px)',
              boxShadow: '0 10px 20px rgba(79, 143, 255, 0.3)'
            }
          }}>
            Get Started
          </button>
          <button style={{
            padding: '0.8rem 2rem',
            fontSize: '1rem',
            fontWeight: 600,
            color: 'white',
            background: 'transparent',
            border: '2px solid rgba(255, 255, 255, 0.2)',
            borderRadius: '30px',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            ':hover': {
              background: 'rgba(255, 255, 255, 0.1)',
              borderColor: 'rgba(255, 255, 255, 0.4)'
            }
          }}>
            Learn More
          </button>
        </div>
         */}
        <div style={{ 
          position: 'absolute', 
          top: '100%',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          opacity: 0,
          animation: 'fadeIn 1s ease-out 1.5s forwards'
        }}>
          <span style={{ 
            color: 'rgba(255, 255, 255, 0.7)',
            marginBottom: '0.5rem',
            fontSize: '0.9rem'
          }}>
            Scroll Down
          </span>
          <div style={{
            width: '2px',
            height: '40px',
            background: 'linear-gradient(to bottom, #4f8fff, transparent)',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div style={{
              position: 'absolute',
              top: '0',
              left: '0',
              width: '100%',
              height: '20px',
              background: 'white',
              animation: 'scrollDown 2s infinite'
            }} />
          </div>
        </div>
      </div>

      {/* Background Canvas */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 1,
        opacity: 0.5
      }}>
        <Canvas camera={{ position: [0, 0, 50], fov: 60 }}>
          <AnimatedParticles count={5000} />
        </Canvas>
      </div>

      {/* Global Styles */}
      <style jsx global>{`
        @keyframes fadeIn {
          to { opacity: 1; }
        }
        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes scrollDown {
          0% { transform: translateY(-20px); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateY(20px); opacity: 0; }
        }
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        body {
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          overflow-x: hidden;
        }
      `}</style>
    </div>
  );
};

export default Hero;