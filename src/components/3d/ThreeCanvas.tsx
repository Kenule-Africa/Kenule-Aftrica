"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function ThreeCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Check if WebGL is supported
    try {
      const canvas = document.createElement("canvas");
      const gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
      if (!gl) return;
    } catch {
      return;
    }

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 24;

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    // Group for objects
    const sceneGroup = new THREE.Group();
    scene.add(sceneGroup);

    // 1. Central Wireframe Icosahedron (Geodesic Tech Sphere)
    const sphereGeo = new THREE.IcosahedronGeometry(7, 2);
    const sphereWire = new THREE.WireframeGeometry(sphereGeo);
    const sphereMat = new THREE.LineBasicMaterial({
      color: 0xf0b90b,
      transparent: true,
      opacity: 0.18,
    });
    const sphereMesh = new THREE.LineSegments(sphereWire, sphereMat);
    sceneGroup.add(sphereMesh);

    // 2. Inner Golden Polyhedron Core
    const coreGeo = new THREE.OctahedronGeometry(3.5, 0);
    const coreWire = new THREE.WireframeGeometry(coreGeo);
    const coreMat = new THREE.LineBasicMaterial({
      color: 0x14f7b0,
      transparent: true,
      opacity: 0.35,
    });
    const coreMesh = new THREE.LineSegments(coreWire, coreMat);
    sceneGroup.add(coreMesh);

    // 3. Floating Orbital Particle Field
    const particleCount = 220;
    const particleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const originalPositions = new Float32Array(particleCount * 3);
    const scales = new Float32Array(particleCount);

    for (let i = 0; i < particleCount; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      const r = 9 + Math.random() * 12;

      const x = r * Math.sin(phi) * Math.cos(theta);
      const y = r * Math.sin(phi) * Math.sin(theta);
      const z = r * Math.cos(phi);

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;

      originalPositions[i * 3] = x;
      originalPositions[i * 3 + 1] = y;
      originalPositions[i * 3 + 2] = z;

      scales[i] = Math.random() * 2 + 1;
    }

    particleGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));

    // Particle Material
    const canvas = document.createElement("canvas");
    canvas.width = 16;
    canvas.height = 16;
    const ctx = canvas.getContext("2d");
    if (ctx) {
      const grad = ctx.createRadialGradient(8, 8, 0, 8, 8, 8);
      grad.addColorStop(0, "rgba(255, 255, 255, 1)");
      grad.addColorStop(0.4, "rgba(240, 185, 11, 0.8)");
      grad.addColorStop(1, "rgba(240, 185, 11, 0)");
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, 16, 16);
    }
    const particleTexture = new THREE.CanvasTexture(canvas);

    const particleMat = new THREE.PointsMaterial({
      color: 0xf0b90b,
      size: 0.6,
      map: particleTexture,
      transparent: true,
      opacity: 0.65,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    sceneGroup.add(particles);

    // Mouse Interaction
    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      targetMouseX = (e.clientX / window.innerWidth) * 2 - 1;
      targetMouseY = -(e.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    // Scroll Integration
    let scrollOffset = 0;
    const handleScroll = () => {
      scrollOffset = window.scrollY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Resize handling
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

      // Responsive positioning
      if (window.innerWidth < 768) {
        sceneGroup.position.set(0, 2, -4);
        sphereMesh.scale.set(0.7, 0.7, 0.7);
        coreMesh.scale.set(0.7, 0.7, 0.7);
      } else {
        sceneGroup.position.set(4.5, 0.5, 0);
        sphereMesh.scale.set(1, 1, 1);
        coreMesh.scale.set(1, 1, 1);
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize();

    // Animation Loop
    let animationFrameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse lerp
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      // Group rotation & scroll influence
      sceneGroup.rotation.y = elapsedTime * 0.12 + mouseX * 0.4;
      sceneGroup.rotation.x = Math.sin(elapsedTime * 0.08) * 0.2 + mouseY * 0.3;
      sceneGroup.rotation.z = scrollOffset * 0.0004;

      coreMesh.rotation.y = -elapsedTime * 0.25;
      coreMesh.rotation.x = elapsedTime * 0.15;

      // Particle oscillation
      const pos = particleGeo.attributes.position.array as Float32Array;
      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3;
        pos[i3] = originalPositions[i3] + Math.sin(elapsedTime * 1.2 + i) * 0.3;
        pos[i3 + 1] = originalPositions[i3 + 1] + Math.cos(elapsedTime * 1.5 + i) * 0.3;
      }
      particleGeo.attributes.position.needsUpdate = true;

      // Parallax camera move
      camera.position.x += (mouseX * 1.2 - camera.position.x) * 0.03;
      camera.position.y += (mouseY * 1.2 - camera.position.y) * 0.03;
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      sphereGeo.dispose();
      sphereMat.dispose();
      coreGeo.dispose();
      coreMat.dispose();
      particleGeo.dispose();
      particleMat.dispose();
      particleTexture.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      aria-hidden="true"
    />
  );
}
