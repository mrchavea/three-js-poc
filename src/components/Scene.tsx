"use client";
import { useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { Model } from "./Model";
import { Environment, OrbitControls } from "@react-three/drei";

export const Scene = () => {
  return (
    <Canvas camera={{ position: [0, 0, 15], fov: 75 }}>
      {/* <directionalLight intensity={0.3} position={[0, 3, 2]} /> */}
      <ambientLight position={[200, 200, 200]} color={"#ff00ee"} intensity={100000} />
      <directionalLight position={[200, 300, 300]} intensity={0.5} color={"white"} />
      <directionalLight position={[-200, 0, 0]} castShadow intensity={80} color={"#1768ff"} />
      <directionalLight position={[-200, 0, 0]} castShadow intensity={90} color={"#17ff32"} />
      <Environment preset="studio" />
      {/* <OrbitControls autoRotate autoRotateSpeed={4} enablePan={false} enableZoom={false} minPolarAngle={Math.PI / 2.1} maxPolarAngle={Math.PI / 2.1} /> */}
      <Model />
    </Canvas>
  );
};
