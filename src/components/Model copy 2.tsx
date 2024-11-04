import { MeshTransmissionMaterial, useGLTF } from "@react-three/drei";
import { useRef, useEffect } from "react";
import { useThree, useLoader } from "@react-three/fiber";
import * as THREE from "three";

export const Model = () => {
  const modelRef = useRef<THREE.Group>(null);
  const cardTexture = useLoader(THREE.TextureLoader, "/textures/card_texture.png");
  const cardPinTexture = useLoader(THREE.TextureLoader, "/textures/card_pin_texture.png");
  const cardTextMaterial = new THREE.MeshStandardMaterial({ map: cardTexture, transparent: true });
  const cardMaterial = new THREE.MeshStandardMaterial({ color: 0xff0000 });

  // cardTexture.encoding = THREE.sRGBEncoding; // Asegura el espacio de color correcto
  const { nodes } = useGLTF("/models/metal_credit_card.glb");
  console.log("MODEL", nodes);
  const { camera } = useThree();

  // Configuración de la cámara inicial
  useEffect(() => {
    camera.position.set(0, 0, 1000); // Ajusta la cámara para estar cerca del modelo
  }, [camera]);

  // Propiedades del material de transmisión
  const materialProps = {
    thickness: 0.1,
    roughness: 0.2,
    transmission: 0.8,
    ior: 0.8,
    chromaticAberration: 0.15,
    backside: true
  };

  // Configuración del material para Backdrop (Shape_0)
  const backdropMaterialProps = {
    map: cardTexture,
    // alphaMap: cardTexture,
    transparent: true,
    alphaTest: 0.5,
    depthWrite: false,
    opacity: 0.9,
    roughness: 0, // Brillante
    metalness: 0.9, // Muy reflectante
    emissive: new THREE.Color(1, 1, 1), // Emisión blanca
    emissiveIntensity: 1, // Intensidad total de luz emitida
    color: 0xffffff // Color blanco
  };

  const pinImageMaterial = {
    map: cardPinTexture,
    transparent: true,
    opacity: 0.6,
    // alphaTest: 0.5,
    // depthWrite: false,
    // roughness: 0, // Brillante
    // metalness: 0.9, // Muy reflectante
    // emissive: new THREE.Color(1, 1, 1), // Emisión blanca
    // emissiveIntensity: 1, // Intensidad total de luz emitida
    color: 0x000000 // Color blanco
  };

  return (
    <group ref={modelRef}>
      {/* Luz ambiental para iluminación general */}
      <ambientLight color={"white"} intensity={1000} />
      {/* Luz direccional ajustada */}
      <directionalLight position={[5, 5, 5]} intensity={70} color="white" />

      {/* Aplicar textura y material a Shape_0 (Backdrop) */}
      {nodes.Shape_0 && nodes.Shape_0 instanceof THREE.Mesh && (
        <mesh geometry={nodes.Shape_0.geometry} position={nodes.Shape_0.position} scale={nodes.Shape_0.scale} rotation={nodes.Shape_0.rotation}>
          <meshStandardMaterial {...backdropMaterialProps} />
          {/* <meshStandardMaterial {...{ color: 0x000000, roughness: 0.5, metalness: 0.7 }} /> */}
        </mesh>
      )}

      {/* Aplicar textura y material a Shape_1 */}
      {nodes.Shape_1 && nodes.Shape_1 instanceof THREE.Mesh && (
        <mesh geometry={nodes.Shape_1.geometry} position={nodes.Shape_1.position} scale={nodes.Shape_1.scale} rotation={nodes.Shape_1.rotation}>
          <meshStandardMaterial {...{ color: 0x000000, roughness: 0.5, metalness: 0.7 }} />
          <meshStandardMaterial {...pinImageMaterial} />
        </mesh>
      )}
    </group>
  );
};
