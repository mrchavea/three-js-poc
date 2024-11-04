import { MeshTransmissionMaterial, useGLTF } from "@react-three/drei";
import { useRef, useEffect } from "react";
import { useThree, useFrame } from "@react-three/fiber";
import * as THREE from "three";

export const Model = () => {
  const group1Ref = useRef<THREE.Group>(null); // Ref para el primer grupo de estrellas
  const group2Ref = useRef<THREE.Group>(null); // Ref para el segundo grupo de estrellas
  const star1Ref = useRef<THREE.Mesh>(null); // Ref para la primera estrella
  const star2Ref = useRef<THREE.Mesh>(null); // Ref para la segunda estrella
  const star3Ref = useRef<THREE.Mesh>(null); // Ref para la tercera estrella

  const { nodes } = useGLTF("/models/ai.glb");
  const { camera } = useThree();

  // Configuración de la cámara inicial
  useEffect(() => {
    camera.position.set(0, 0, 100); // Ajusta la cámara para estar cerca del modelo
  }, [camera]);

  // Propiedades del material de transmisión
  const materialProps = {
    thickness: 2.2,
    roughness: 0.1,
    transmission: 1,
    ior: 1.5,
    chromaticAberration: 0.5,
    anisotropy: 1,
    backside: true,
    color: "#861b9f"
  };

  // Animación de rotación para cada estrella individualmente
  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();
    const rotationAngle = Math.sin(time) * 0.25; // Ángulo de rotación

    // Rotación individual de cada estrella
    if (star1Ref.current) {
      star1Ref.current.rotation.x = -rotationAngle * 0.5; // Estrella 2 - rotación hacia la derecha
      star1Ref.current.rotation.y = -rotationAngle * 0.5; // Estrella 2 - rotación hacia la derecha
      star1Ref.current.rotation.z = -rotationAngle * 0.5;
    }

    if (star2Ref.current) {
      star2Ref.current.rotation.x = -rotationAngle; // Estrella 2 - rotación hacia la derecha
      star2Ref.current.rotation.y = -rotationAngle; // Estrella 2 - rotación hacia la derecha
    }

    if (star3Ref.current) {
      star3Ref.current.rotation.x += rotationAngle * 0.15; // Estrella 1 - rotación hacia la izquierda
      star3Ref.current.rotation.y += rotationAngle * 0.15; // Estrella 1 - rotación hacia la izquierda
      star3Ref.current.rotation.z = rotationAngle;
    }
  });

  return (
    <group scale={1.1}>
      {/* Grupo 1: Primer grupo de estrellas */}
      <group ref={group1Ref}>
        <mesh ref={star1Ref} {...nodes.Star}>
          <MeshTransmissionMaterial {...materialProps} />
        </mesh>

        <mesh ref={star2Ref} {...nodes.Star_2}>
          <MeshTransmissionMaterial {...materialProps} />
        </mesh>
      </group>

      {/* Grupo 2: Segundo grupo de estrellas */}
      <group ref={group2Ref} {...nodes.Group_2}>
        <mesh ref={star3Ref} {...nodes.Group_2.children[0].children[0]}>
          <MeshTransmissionMaterial {...materialProps} />
        </mesh>
      </group>
    </group>
  );
};
