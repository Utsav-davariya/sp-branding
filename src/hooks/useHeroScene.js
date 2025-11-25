import { useEffect } from 'react';
import * as THREE from 'three';

const FRONT_PARTICLES = 2400;
const BACK_PARTICLES = 1800;

const buildParticleLayer = (count, majorRadius, minorRange) => {
  const geometry = new THREE.BufferGeometry();
  const positions = new Float32Array(count * 3);
  const baseU = new Float32Array(count);
  const baseV = new Float32Array(count);
  const minorRadius = new Float32Array(count);
  const noise = new Float32Array(count);
  const speed = new Float32Array(count);

  for (let i = 0; i < count; i += 1) {
    const u = THREE.MathUtils.randFloat(0, Math.PI * 2);
    const v = THREE.MathUtils.randFloat(0, Math.PI * 2);
    baseU[i] = u;
    baseV[i] = v;
    minorRadius[i] = THREE.MathUtils.randFloat(minorRange[0], minorRange[1]);
    noise[i] = THREE.MathUtils.randFloat(0, Math.PI * 2);
    speed[i] = THREE.MathUtils.randFloat(0.08, 0.3) * (i % 2 === 0 ? 1 : -1);

    const ringRadius = majorRadius + minorRadius[i] * Math.cos(v);
    positions[i * 3] = Math.cos(u) * ringRadius;
    positions[i * 3 + 1] = minorRadius[i] * Math.sin(v) * 0.75;
    positions[i * 3 + 2] = Math.sin(u) * ringRadius * 0.65;
  }

  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

  return {
    geometry,
    positions,
    baseU,
    baseV,
    minorRadius,
    noise,
    speed,
    majorRadius,
  };
};

const updateLayer = (layerData, time) => {
  const {
    geometry,
    positions,
    baseU,
    baseV,
    minorRadius,
    noise,
    speed,
    majorRadius,
  } = layerData;
  const attr = geometry.getAttribute('position');
  const array = attr.array;

  for (let i = 0; i < baseU.length; i += 1) {
    const swirl = baseU[i] + time * 0.2 + speed[i] * time * 0.45;
    const wobble = baseV[i] + Math.sin(time * 1.25 + noise[i]) * 0.35;
    const pulse = minorRadius[i] + Math.sin(time * 2 + noise[i]) * 0.45;
    const ringRadius = majorRadius + pulse * Math.cos(wobble);
    array[i * 3] = Math.cos(swirl) * ringRadius;
    array[i * 3 + 1] = pulse * Math.sin(wobble) * 0.75;
    array[i * 3 + 2] = Math.sin(swirl) * ringRadius * 0.65;
  }

  attr.needsUpdate = true;
  geometry.computeBoundingSphere();
};

const useHeroScene = (containerRef) => {
  useEffect(() => {
    const container = containerRef?.current;
    if (!container) return undefined;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));
    renderer.setClearColor(0x000000, 0);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 400);
    camera.position.set(0, 0, 85);

    const frontLayer = buildParticleLayer(FRONT_PARTICLES, 32, [4, 9]);
    const backLayer = buildParticleLayer(BACK_PARTICLES, 29, [6, 12]);

    const frontMaterial = new THREE.PointsMaterial({
      color: new THREE.Color('#f9f6e8'),
      size: 0.38,
      transparent: true,
      opacity: 0.95,
      depthWrite: false,
      sizeAttenuation: true,
      blending: THREE.AdditiveBlending,
    });

    const backMaterial = new THREE.PointsMaterial({
      color: new THREE.Color('#b89938'),
      size: 0.65,
      transparent: true,
      opacity: 0.35,
      depthWrite: false,
      sizeAttenuation: true,
      blending: THREE.AdditiveBlending,
    });

    const frontPoints = new THREE.Points(frontLayer.geometry, frontMaterial);
    const backPoints = new THREE.Points(backLayer.geometry, backMaterial);

    const cluster = new THREE.Group();
    cluster.add(backPoints);
    cluster.add(frontPoints);
    scene.add(cluster);

    const resize = () => {
      const width = container.clientWidth || window.innerWidth;
      const height = container.clientHeight || window.innerHeight * 1.25;
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };

    resize();
    container.innerHTML = '';
    container.appendChild(renderer.domElement);

    const pointer = { x: 0, y: 0 };
    const handlePointerMove = (event) => {
      pointer.x = (event.clientX / window.innerWidth - 0.5) * 2;
      pointer.y = (event.clientY / window.innerHeight - 0.5) * 2;
    };

    let frameId;
    const animate = () => {
      const time = performance.now() * 0.00045;
      updateLayer(frontLayer, time);
      updateLayer(backLayer, time * 0.9);

      cluster.rotation.y = Math.sin(time * 0.2) * 0.08;
      cluster.rotation.x = Math.sin(time * 0.27) * 0.06;

      camera.position.x += ((pointer.x * 12) - camera.position.x) * 0.03;
      camera.position.y += ((-pointer.y * 8) - camera.position.y) * 0.03;
      camera.lookAt(scene.position);

      renderer.render(scene, camera);
      frameId = requestAnimationFrame(animate);
    };

    const handleResize = () => resize();
    window.addEventListener('resize', handleResize);
    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    frameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('pointermove', handlePointerMove);
      frontLayer.geometry.dispose();
      backLayer.geometry.dispose();
      frontMaterial.dispose();
      backMaterial.dispose();
      renderer.dispose();
      if (renderer.domElement && renderer.domElement.parentNode === container) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [containerRef]);
};

export default useHeroScene;
