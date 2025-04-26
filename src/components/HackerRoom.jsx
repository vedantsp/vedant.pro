// src/components/HackerRoom.jsx
import * as THREE from 'three'
import React, { useEffect } from 'react'
import { useGLTF, useTexture } from '@react-three/drei'

export function HackerRoom(props) {
  // 1) Load the GLTF
  const { nodes, materials } = useGLTF('/models/scene.glb')

  // 2) Load your four custom maps
  const bodyMap        = useTexture('/textures/lost-programmer/body_baseColor.png')
  const clothMap       = useTexture('/textures/lost-programmer/cloth_baseColor.png')
  const laptopMap      = useTexture('/textures/lost-programmer/laptop_tex_baseColor.png')
  const laptopEmissive = useTexture('/textures/lost-programmer/laptop_tex_emissive.png')

  useEffect(() => {
    // make sure the textures aren’t flipped upside‐down
    ;[bodyMap, clothMap, laptopMap, laptopEmissive].forEach(tex => {
      tex.flipY = false
      tex.needsUpdate = true
    })

    // set correct color space for PBR
    laptopMap.encoding = THREE.sRGBEncoding
    laptopEmissive.encoding = THREE.sRGBEncoding
    materials.body.color.multiplyScalar(0.6)
    materials.cloth.color.multiplyScalar(0.6)
    

    // inject into the gltf materials (for your character clothing/etc)
    materials.body.map                     = bodyMap
    materials.cloth.map                    = clothMap
    materials.laptop_tex.map               = laptopMap
    materials.laptop_tex.emissiveMap       = laptopEmissive
    materials.laptop_tex.emissiveIntensity = 1

    materials.body.needsUpdate       = true
    materials.cloth.needsUpdate      = true
    materials.laptop_tex.needsUpdate = true
  }, [bodyMap, clothMap, laptopMap, laptopEmissive, materials])

  

  return (
    <group {...props} dispose={null}>
      {/* keep the exact rotations & positions from gltfjsx */}
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group position={[0, 0.75, -0.09]} rotation={[1.26, 0, 0]}>
          <primitive object={nodes.my_rig_rootJoint} />

          {/* hair */}
          <skinnedMesh
            geometry={nodes.hair_0.geometry}
            skeleton={nodes.hair_0.skeleton}
            material={materials.cloth}
          />
          <skinnedMesh
            geometry={nodes.hair_1.geometry}
            skeleton={nodes.hair_1.skeleton}
            material={materials.solidify}
          />

          {/* body / clothes */}
          <skinnedMesh
            geometry={nodes.me_0.geometry}
            skeleton={nodes.me_0.skeleton}
            material={materials.body}
          />
          <skinnedMesh
            geometry={nodes.me_1.geometry}
            skeleton={nodes.me_1.skeleton}
            material={materials.solidify}
          />
          <skinnedMesh
            geometry={nodes.me002_0.geometry}
            skeleton={nodes.me002_0.skeleton}
            material={materials.cloth}
          />
          <skinnedMesh
            geometry={nodes.me002_1.geometry}
            skeleton={nodes.me002_1.skeleton}
            material={materials.solidify}
          />
          <skinnedMesh
            geometry={nodes.kemeja_0.geometry}
            skeleton={nodes.kemeja_0.skeleton}
            material={materials.cloth}
          />
          <skinnedMesh
            geometry={nodes.kemeja_1.geometry}
            skeleton={nodes.kemeja_1.skeleton}
            material={materials.solidify}
          />
        </group>

        {/* ==== override the laptop screen to show your map at full brightness ==== */}
        <mesh
          geometry={nodes.Cube005_0.geometry}
          position={[-0.03, -0.44, -0.47]}
          rotation={[2.38, 0, 0]}
          scale={0.15}
          castShadow
          receiveShadow
        >
          <meshBasicMaterial
            map={laptopMap}
            transparent
            toneMapped={false}
          />
        </mesh>

        {/* floating prop */}
        <mesh
          geometry={nodes.bool1185_0.geometry}
          material={materials.Material}
          position={[2.4, 0.75, -0.43]}
          rotation={[-0.46, 0.3, -0.93]}
          scale={0.11}
          castShadow
          receiveShadow
        />
      </group>
    </group>
  )
}

useGLTF.preload('/models/scene.glb')
export default HackerRoom
