import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, Environment, Float } from "@react-three/drei";
import { useRef, useEffect, useState } from "react";
import * as THREE from "three";

// Base rotation for roboaiq-model
const BASE_ROTATION = [0, 0, 0];

/**
 * Robot Component - Mouse-tracking 3D character
 */
function Robot({ scene }) {
    const group = useRef();

    // Enhanced cursor-follow logic with smooth interpolation
    useFrame((state) => {
        if (!group.current) return;

        // Map mouse position [-1, 1] to rotation for 360° turn
        const targetY = state.mouse.x * Math.PI;
        const targetX = (state.mouse.y * Math.PI) / 8; // Slight vertical tilt

        // Smooth interpolation for premium feel
        group.current.rotation.y += (targetY - group.current.rotation.y) * 0.1;
        group.current.rotation.x += (targetX - group.current.rotation.x) * 0.1;
    });

    return (
        <group ref={group} rotation={BASE_ROTATION}>
            <primitive object={scene} scale={2.5} />
        </group>
    );
}

/**
 * LoadingFallback - Lightweight skeleton while model loads
 */
function LoadingFallback() {
    return (
        <div
            style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'transparent',
            }}
        >
            <div
                style={{
                    width: '120px',
                    height: '120px',
                    borderRadius: '50%',
                    border: '4px solid rgba(255, 255, 255, 0.1)',
                    borderTopColor: '#FF6B35',
                    animation: 'spin 1s linear infinite',
                }}
            />
            <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
        </div>
    );
}

/**
 * RobotCanvas - Lazy-loaded 3D canvas with performance optimizations
 * This component is code-split and loaded asynchronously to prevent blocking page load
 */
export default function RobotCanvas() {
    const [isLoaded, setIsLoaded] = useState(false);
    const { scene } = useGLTF("/assets/models/roboaiq-model.glb");

    useEffect(() => {
        if (scene) {
            setIsLoaded(true);
        }
    }, [scene]);

    return (
        <div className="hero-canvas" style={{ position: 'relative' }}>
            {!isLoaded && <LoadingFallback />}
            <Canvas
                camera={{ position: [0, 1, 4], fov: 45 }}
                shadows
                // Performance optimizations for mobile
                dpr={[1, 1.5]} // Limit pixel ratio to reduce GPU load on mobile
                gl={{
                    antialias: true,
                    alpha: true,
                    powerPreference: 'high-performance', // Request high-performance GPU
                }}
                style={{
                    opacity: isLoaded ? 1 : 0,
                    transition: 'opacity 0.5s ease-in',
                }}
            >
                {/* Optimized lighting setup */}
                <ambientLight intensity={1.4} />
                <directionalLight position={[8, 6, 5]} intensity={2.5} castShadow />
                <pointLight position={[-5, 3, 2]} intensity={1.2} />
                <Environment preset="city" intensity={0.8} />

                {/* Floating robot with mouse tracking */}
                <Float speed={1.2} rotationIntensity={0} floatIntensity={0.4}>
                    <Robot scene={scene} />
                </Float>
            </Canvas>
        </div>
    );
}

// NOTE: Removed preload to prevent blocking initial page load
// Model will load lazily when component mounts
