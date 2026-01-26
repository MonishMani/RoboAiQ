import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, Environment, Float } from "@react-three/drei";
import { motion } from "framer-motion";
import { useRef } from "react";
import * as THREE from "three";

// Model rotation to face front
const BASE_ROTATION = [0, 0, 0];

function Robot({ scene }) {
  const group = useRef();

  // Cursor-follow + return to front
  useFrame((state) => {
    if (!group.current) return;

    const targetX = (state.mouse.y * Math.PI) / 12;
    const targetY = (state.mouse.x * Math.PI) / 12;

    group.current.rotation.x += (targetX - group.current.rotation.x) * 0.08;
    group.current.rotation.y += (targetY - group.current.rotation.y) * 0.08;
  });

  return (
    <group ref={group} rotation={BASE_ROTATION}>
      <primitive object={scene} scale={2.5} />
    </group>
  );
}

export default function Hero3DModel() {
  const { scene } = useGLTF("/assets/Model/Roboaiq_model.glb");

  return (
    <motion.div
      className="hero-canvas"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
    >
      <Canvas camera={{ position: [0, 1, 4], fov: 45 }} shadows>
        <ambientLight intensity={1.4} />
        <directionalLight 
          position={[8, 6, 5]} 
          intensity={2.5}
          castShadow
        />
        <pointLight position={[-5, 3, 2]} intensity={1.2} />
        <Environment preset="city" intensity={0.8} />

        <Float speed={1.2} rotationIntensity={0} floatIntensity={0.4}>
          <Robot scene={scene} />
        </Float>
      </Canvas>
    </motion.div>
  );
}

useGLTF.preload("/assets/Model/Roboaiq_model.glb");
