"use client";

import React, { Suspense, useLayoutEffect, useMemo, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls, useGLTF } from "@react-three/drei";
import { Box3, Group, Vector3 } from "three";
import { useIsMobile } from "@/hooks/use-is-mobile"; 
const MODEL_URL = "/ampul.glb";

// ✅ عدّل هدول بس:
const TARGET_SIZE = 2.6; // حجم الموديل
const Y_OFFSET = 0.12;   // ارفعو شوي لتفادي القص من تحت

useGLTF.preload(MODEL_URL);

function AmpulModel({ targetSize, yOffset }: { targetSize: number; yOffset: number }) {
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
    const s = targetSize / maxAxis;
    groupRef.current.scale.setScalar(s);

    groupRef.current.position.y += yOffset;
  }, [targetSize, yOffset]);

  return (
    <group ref={groupRef}>
      <primitive object={model} />
    </group>
  );
}

export function Hero3D() {
  const isMobile = useIsMobile(768);

  const targetSize = isMobile ? 3.4 : 2.6;   // ✅ الموديل أكبر بالموبايل
  const yOffset = isMobile ? 0.18 : 0.12;    // ✅ رفع بسيط
  const cameraZ = isMobile ? 3.2 : 3.6;      // ✅ قرّب الكاميرا بالموبايل

  return (
    <div className="h-full w-full overflow-visible">
      <Canvas
        camera={{ position: [0, 0.55, cameraZ], fov: 40 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        {/* ... */}
        <Suspense fallback={null}>
          <AmpulModel targetSize={targetSize} yOffset={yOffset} />
          <Environment preset="city" />
        </Suspense>
        {/* ... */}
      </Canvas>
    </div>
  );
}
