import React, { Suspense, useLayoutEffect, useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, OrbitControls, useGLTF } from "@react-three/drei";
import { Box3, Group, Vector3 } from "three";
import { Hero3DLoader } from "./hero.2d-loader";


const MODEL_URL = "/ampul.glb";

const TARGET_SIZE = 2.6;
const Y_OFFSET = 0.12;

useGLTF.preload(MODEL_URL);

function AmpulModel() {
  const groupRef = useRef<Group>(null);

  const gltf = useGLTF(MODEL_URL);
  const model = useMemo(() => gltf.scene.clone(true), [gltf.scene]);

  useLayoutEffect(() => {
    if (!groupRef.current) return;

    const box = new Box3().setFromObject(groupRef.current);
    const size = new Vector3();
    const center = new Vector3();
    box.getSize(size);
    box.getCenter(center);

    groupRef.current.position.sub(center);

    const maxAxis = Math.max(size.x, size.y, size.z) || 1;
    const s = TARGET_SIZE / maxAxis;
    groupRef.current.scale.setScalar(s);

    groupRef.current.position.y += Y_OFFSET;
  }, []);

  useFrame((_, delta) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y += delta * 0.6;
  });

  return (
    <group ref={groupRef}>
      <primitive object={model} />
    </group>
  );
}

export function Hero3D() {
  return (
    <div className="h-full w-full overflow-visible touch-none">
      <Canvas
        style={{ touchAction: "none" }}
        camera={{ position: [0, 0.55, 3.6], fov: 40 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.9} />
        <directionalLight position={[3, 3, 2]} intensity={1.2} />
        <directionalLight position={[-3, 2, -2]} intensity={0.7} />

        <Suspense fallback={<Hero3DLoader />}>
          <AmpulModel />
          <Environment preset="city" />
        </Suspense>

        <OrbitControls
          makeDefault
          enableRotate
          enableZoom={false}
          enablePan={false}
          enableDamping
          dampingFactor={0.08}
          rotateSpeed={0.9}
          target={[0, 0.1, 0]}
        />
      </Canvas>
    </div>
  );
}
