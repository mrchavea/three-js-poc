import { MeshTransmissionMaterial, Text, useGLTF } from "@react-three/drei";
import { useRef, useState, useEffect } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

export const Model = () => {
  const modelRef = useRef<THREE.Mesh>(null);
  const textRef = useRef<THREE.Mesh>(null); // Referencia al texto
  const { nodes } = useGLTF("/models/metal_credit_card.gltf");
  const { viewport, camera } = useThree();
  console.log("MODEL", nodes);

  const [rotationActive, setRotationActive] = useState(true); // Rotación inicial suave
  const [textMoved, setTextMoved] = useState(false); // Controla el movimiento del texto
  const [transitionProgress, setTransitionProgress] = useState(0); // Progreso de la transición

  const initialRotationSpeed = 0.005; // Velocidad lenta al inicio

  // Rotación inicial (cualquiera al inicio) y final paralela a la cámara (0, 0, 0)
  const finalRotation = new THREE.Euler(0, 0, 0); // Paralelo a la cámara

  const targetPosition = new THREE.Vector3(0, -1, -1.5); // Posición final del modelo
  const textFinalPosition = new THREE.Vector3(0, 2.2, -5); // Posición final del texto arriba

  // Temporizadores para controlar la rotación y el movimiento del texto
  // useEffect(() => {
  //   const moveTextTimeout = setTimeout(() => setTextMoved(true), 3000); // Mover texto después de 3s
  //   const stopRotationTimeout = setTimeout(() => setRotationActive(false), 4200); // Iniciar transición en 3.5s

  //   return () => {
  //     clearTimeout(moveTextTimeout);
  //     clearTimeout(stopRotationTimeout);
  //   };
  // }, []);

  // Animación de rotación + transición suave del modelo
  useFrame((_, delta) => {
    if (modelRef.current) {
      if (rotationActive) {
        // Rotación suave inicial
        modelRef.current.rotation.x += initialRotationSpeed;
        modelRef.current.rotation.y += initialRotationSpeed;
        modelRef.current.rotation.z += initialRotationSpeed;
      } else if (transitionProgress < 1) {
        // Incrementar el progreso de la transición suavemente (ease-in-out)
        const newProgress = Math.min(transitionProgress + delta / 1.5, 1);
        setTransitionProgress(newProgress);

        // Interpolación de rotación hacia la rotación final paralela a la cámara
        modelRef.current.rotation.x = THREE.MathUtils.lerp(modelRef.current.rotation.x + 0.4, finalRotation.x, newProgress);
        modelRef.current.rotation.y = THREE.MathUtils.lerp(modelRef.current.rotation.y + 0.25, finalRotation.y, newProgress); // 1 vuelta completa en Y
        modelRef.current.rotation.z = THREE.MathUtils.lerp(modelRef.current.rotation.z + 0.4, finalRotation.z, newProgress);

        // Interpolación de la posición hacia la posición final
        modelRef.current.position.lerp(targetPosition, newProgress);
      }
    }

    // Mover el texto hacia arriba si el estado está activado
    if (textRef.current && textMoved) {
      textRef.current.position.lerp(textFinalPosition, delta * 2); // Movimiento rápido hacia la posición final
    }
  });

  // Ajuste inicial de la cámara
  useEffect(() => {
    camera.position.set(0, 0, 20); // Alejar la cámara en Z
  }, [camera]);

  const materialProps = {
    thickness: 0.1,
    roughness: 0.2,
    transmission: 0.8,
    ior: 0.8,
    chromaticAberration: 0.15,
    backside: true
  };

  return (
    <group scale={viewport.width / 6}>
      {/* Texto */}
      <Text
        ref={textRef}
        textAlign="center"
        fontSize={1.2}
        fontWeight={800}
        position={[0, 0, -5]} // Posición inicial en el centro
      >
        {"El banco \ndel futuro"}
      </Text>

      {/* Modelo */}
      {/* <group {...nodes.Group} scale={viewport.width / 20}>
        <mesh {...nodes.Shape_0} />
        <mesh {...nodes.Shape_1} />
      </group>
    </group> */}
      <mesh ref={modelRef} {...nodes.Shape_0}>
        <MeshTransmissionMaterial {...materialProps} />
      </mesh>
    </group>
  );
};
