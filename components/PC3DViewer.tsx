"use client"

import { Canvas } from "@react-three/fiber"
import { OrbitControls, useGLTF } from "@react-three/drei"
import { Suspense } from "react"

export default function PC3DViewer() {
  const FullPCModel = () => {
    const gltf = useGLTF("/3dmodels/fullpc.glb")
    return (
      <primitive
        object={gltf.scene}
        scale={1.0} // 👈 Reduced from 1.2
        position={[0, -0.7, 0]} // 👈 Shifted down less
      />
    )
  }

  return (
    <div className="w-full h-[320px]"> {/* 👈 Reduced height */}
      <Canvas
        camera={{ position: [0, 1.5, 6.5], fov: 50 }} // 👈 Pulled back slightly
        gl={{ preserveDrawingBuffer: true }}
        frameloop="demand"
      >
        <ambientLight intensity={1.2} />
        <pointLight intensity={2} position={[5, 5, 5]} />
        <Suspense fallback={null}>
          <FullPCModel />
        </Suspense>
        <OrbitControls enableZoom={true} />
      </Canvas>
    </div>
  )
}