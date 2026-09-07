"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function ThreeShaderCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    try {
      const canvas = document.createElement("canvas");
      const gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
      if (!gl) return;
    } catch {
      return;
    }

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      0.1,
      100
    );
    camera.position.set(0, 0, 22);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    const objectGroup = new THREE.Group();
    scene.add(objectGroup);

    // Precise African Continent Contour (Normalized 2D Coordinates)
    const africaContour: [number, number][] = [
      [-0.45, 0.95],  // Morocco / Tangier
      [-0.20, 0.97],  // Algeria coast
      [0.05, 0.98],   // Algiers
      [0.28, 0.98],   // Tunisia (Cape Angela)
      [0.32, 0.88],   // Gulf of Gabes
      [0.45, 0.82],   // Tripoli / Libya
      [0.58, 0.80],   // Gulf of Sidra
      [0.72, 0.82],   // Benghazi / Cyrenaica
      [0.85, 0.78],   // Alexandria / Egypt
      [0.90, 0.70],   // Suez / Sinai
      [0.92, 0.52],   // Red Sea (Sudan)
      [1.02, 0.35],   // Eritrea
      [1.12, 0.28],   // Djibouti / Bab-el-Mandeb
      [1.38, 0.22],   // Horn of Africa (Ras Hafun, Somalia)
      [1.25, 0.05],   // Mogadishu
      [1.08, -0.15],  // Kismayo
      [0.95, -0.32],  // Kenya / Mombasa
      [0.90, -0.52],  // Tanzania / Dar es Salaam
      [0.85, -0.72],  // Mozambique / Beira
      [0.78, -0.92],  // Maputo
      [0.68, -1.08],  // Durban, South Africa
      [0.48, -1.25],  // Port Elizabeth
      [0.32, -1.28],  // Cape Agulhas / Cape of Good Hope
      [0.22, -1.18],  // Cape Town
      [0.15, -0.95],  // Namibia (Luderitz)
      [0.18, -0.72],  // Walvis Bay
      [0.22, -0.48],  // Angola (Namibe)
      [0.25, -0.28],  // Luanda
      [0.18, -0.10],  // Congo River mouth
      [0.12, 0.08],   // Gabon / Libreville
      [0.10, 0.18],   // Cameroon / Douala
      [0.02, 0.18],   // Niger Delta, Nigeria
      [-0.15, 0.18],  // Lagos, Nigeria
      [-0.32, 0.16],  // Ghana / Accra
      [-0.52, 0.18],  // Ivory Coast / Abidjan
      [-0.72, 0.22],  // Liberia / Monrovia
      [-0.85, 0.32],  // Sierra Leone / Freetown
      [-0.92, 0.45],  // Guinea-Bissau
      [-0.95, 0.58],  // Dakar, Senegal (Cap-Vert)
      [-0.88, 0.72],  // Mauritania (Nouakchott)
      [-0.72, 0.82],  // Western Sahara
      [-0.58, 0.90],  // Agadir, Morocco
      [-0.45, 0.95],  // Close loop
    ];

    // Point in polygon test
    function isInsideContour(x: number, y: number): boolean {
      let inside = false;
      for (let i = 0, j = africaContour.length - 1; i < africaContour.length; j = i++) {
        const xi = africaContour[i][0];
        const yi = africaContour[i][1];
        const xj = africaContour[j][0];
        const yj = africaContour[j][1];

        const intersect = yi > y !== yj > y && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi;
        if (intersect) inside = !inside;
      }
      return inside;
    }

    // Generate Volumetric 3D African Continent Particles
    const positions: number[] = [];
    const scale = 5.2;

    // 1. Dense Interior and Topography Grid
    const step = 0.045;
    for (let x = -1.05; x <= 1.45; x += step) {
      for (let y = -1.35; y <= 1.05; y += step) {
        if (isInsideContour(x, y)) {
          // Elevation curvature: Central plateau & East African Rift higher
          const distFromCenter = Math.sqrt(x * x + y * y);
          const baseZ = Math.sin(x * 2.0) * Math.cos(y * 2.0) * 0.4;
          
          // Layer depth (layered sandwich for thick 3D topography)
          const layers = 6;
          for (let l = 0; l < layers; l++) {
            const zOffset = (l - (layers - 1) / 2) * 0.28 + (Math.random() - 0.5) * 0.12;
            const jitterX = (Math.random() - 0.5) * step * 0.6;
            const jitterY = (Math.random() - 0.5) * step * 0.6;

            positions.push(
              (x + jitterX) * scale,
              (y + jitterY) * scale,
              (baseZ + zOffset) * scale * 0.4
            );
          }
        }
      }
    }

    // 2. High-Density Perimeter Coastline Ribbon
    for (let i = 0; i < africaContour.length - 1; i++) {
      const p1 = africaContour[i];
      const p2 = africaContour[i + 1];
      const segments = 16;
      for (let s = 0; s < segments; s++) {
        const t = s / segments;
        const x = p1[0] + (p2[0] - p1[0]) * t;
        const y = p1[1] + (p2[1] - p1[1]) * t;
        for (let z = -0.7; z <= 0.7; z += 0.22) {
          positions.push(
            x * scale + (Math.random() - 0.5) * 0.04,
            y * scale + (Math.random() - 0.5) * 0.04,
            z * scale * 0.4
          );
        }
      }
    }

    // 3. Madagascar Island
    for (let my = -0.45; my >= -0.92; my -= 0.04) {
      const mx = 1.15 + (my + 0.65) * 0.35;
      for (let w = -0.06; w <= 0.06; w += 0.03) {
        for (let mz = -0.4; mz <= 0.4; mz += 0.2) {
          positions.push(
            (mx + w + (Math.random() - 0.5) * 0.02) * scale,
            (my + (Math.random() - 0.5) * 0.02) * scale,
            mz * scale * 0.35
          );
        }
      }
    }

    // 4. Kenule Headquarters Spotlight Node (Jos, Plateau State, Nigeria: ~0.08, 0.28)
    const hqX = 0.08 * scale;
    const hqY = 0.28 * scale;
    for (let k = 0; k < 80; k++) {
      const theta = Math.random() * Math.PI * 2;
      const rad = Math.random() * 0.5;
      positions.push(
        hqX + Math.cos(theta) * rad,
        hqY + Math.sin(theta) * rad,
        (Math.random() - 0.5) * 1.8
      );
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));

    // Custom Shaders for Classic Technical African Matrix
    const vertexShader = `
      uniform float uTime;
      uniform float uDistortion;
      uniform float uSize;
      uniform vec2 uMouse;
      varying float vZ;
      varying float vNoise;

      void main() {
          vec3 pos = position;
          
          // Organic breathing waves across the continent
          float wave = sin(pos.x * 0.6 + uTime * 1.2) * cos(pos.y * 0.6 + uTime * 0.9) * 0.35;
          pos.z += wave;

          // Interactive cursor repulsion / tilt
          float dist = distance(uMouse * 12.0, pos.xy);
          float interaction = smoothstep(6.5, 0.0, dist);
          pos.z += interaction * 1.8;

          vZ = pos.z;
          vNoise = wave;

          vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
          gl_Position = projectionMatrix * mvPosition;
          gl_PointSize = uSize * (26.0 / -mvPosition.z);
      }
    `;

    const fragmentShader = `
      uniform vec3 uColorPrimary;
      uniform vec3 uColorAccent;
      varying float vZ;
      varying float vNoise;

      void main() {
          vec2 center = gl_PointCoord - vec2(0.5);
          float dist = length(center);
          if (dist > 0.48) discard;

          // Smooth radial dot falloff
          float alpha = smoothstep(0.48, 0.1, dist);

          // Blend from deep obsidian to warm golden amber on elevated crests
          vec3 color = mix(uColorPrimary, uColorAccent, clamp((vZ + 1.2) * 0.35, 0.0, 1.0));
          
          gl_FragColor = vec4(color, alpha * 0.85);
      }
    `;

    const uniforms = {
      uTime: { value: 0 },
      uDistortion: { value: 0.2 },
      uSize: { value: 2.1 },
      uColorPrimary: { value: new THREE.Color("#111827") }, // Deep obsidian
      uColorAccent: { value: new THREE.Color("#f0b90b") },  // Warm African gold
      uMouse: { value: new THREE.Vector2(0, 0) },
    };

    const material = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms,
      transparent: true,
      blending: THREE.NormalBlending,
      depthWrite: false,
    });

    const points = new THREE.Points(geometry, material);
    objectGroup.add(points);

    // Initial 3D tilt
    objectGroup.rotation.x = 0.25;
    objectGroup.rotation.y = -0.2;

    let time = 0;
    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(e.clientY / window.innerHeight) * 2 + 1;
      uniforms.uMouse.value.x += (mouseX - uniforms.uMouse.value.x) * 0.04;
      uniforms.uMouse.value.y += (mouseY - uniforms.uMouse.value.y) * 0.04;
    };

    document.addEventListener("mousemove", handleMouseMove);

    const adjustLayout = () => {
      const w = window.innerWidth;
      if (w < 768) {
        // Mobile layout: centered subtle background
        objectGroup.position.set(0, 1.5, -4);
        objectGroup.scale.set(0.68, 0.68, 0.68);
      } else if (w < 1200) {
        // Tablet layout
        objectGroup.position.set(3.5, 1.8, -2);
        objectGroup.scale.set(0.85, 0.85, 0.85);
      } else {
        // Large desktop layout: floating prominently on the hero right
        objectGroup.position.set(4.8, 1.2, 0);
        objectGroup.scale.set(1.05, 1.05, 1.05);
      }
    };

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      adjustLayout();
    };

    window.addEventListener("resize", handleResize);
    adjustLayout();

    const handleScroll = () => {
      const scrollY = window.scrollY;
      objectGroup.rotation.y = -0.2 + scrollY * 0.0006;
      objectGroup.rotation.x = 0.25 + scrollY * 0.0003;
      
      const w = window.innerWidth;
      const baseY = w < 768 ? 1.5 : 1.2;
      objectGroup.position.y = baseY - scrollY * 0.004;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    let animationId: number;
    function animate() {
      animationId = requestAnimationFrame(animate);
      time += 0.012;
      
      // Gentle floating oscillation
      objectGroup.rotation.y += Math.sin(time * 0.8) * 0.0008;
      objectGroup.position.z = Math.sin(time * 0.5) * 0.3;
      
      uniforms.uTime.value = time;
      camera.position.x += (mouseX * 0.8 - camera.position.x) * 0.03;
      camera.position.y += (mouseY * 0.8 - camera.position.y) * 0.03;
      camera.lookAt(0, 0, 0);
      renderer.render(scene, camera);
    }
    animate();

    return () => {
      cancelAnimationFrame(animationId);
      document.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      geometry.dispose();
      material.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      id="canvas-container"
      className="fixed inset-0 z-0 opacity-100 pointer-events-none"
      aria-hidden="true"
    />
  );
}

