import React, { useEffect, useRef, useMemo } from 'react'
import { useGraph } from '@react-three/fiber'
import { useGLTF, useFBX, useAnimations } from '@react-three/drei'
import { SkeletonUtils } from 'three-stdlib'

const Developer = ({ animationName = 'idle', ...props }) => {
  const group = useRef()

  // 1) Load and clone the GLTF scene
  const { scene } = useGLTF('/models/animations/developer.glb')
  const clone = useMemo(() => SkeletonUtils.clone(scene), [scene])
  const { nodes, materials } = useGraph(clone)

  // 2) Load FBX clips
  const { animations: idleClips }    = useFBX('/models/animations/idle.fbx')
  const { animations: saluteClips }  = useFBX('/models/animations/salute.fbx')
  const { animations: clapClips }    = useFBX('/models/animations/clapping.fbx')
  const { animations: victoryClips } = useFBX('/models/animations/victory.fbx')

  // 3) Rename clips safely
  const clips = []
  if (idleClips[0])    { idleClips[0].name    = 'idle';    clips.push(idleClips[0]) }
  if (saluteClips[0])  { saluteClips[0].name  = 'salute';  clips.push(saluteClips[0]) }
  if (clapClips[0])    { clapClips[0].name    = 'clapping';clips.push(clapClips[0]) }
  if (victoryClips[0]) { victoryClips[0].name = 'victory'; clips.push(victoryClips[0]) }

  // 4) Hook up animations on the cloned scene
  const { actions } = useAnimations(clips, group)

  // 5) Play/transition to the requested animation only if it exists
  useEffect(() => {
    const action = actions[animationName]
    if (!action) return
    action.reset().fadeIn(0.5).play()
    return () => action.fadeOut(0.5)
  }, [animationName, actions])

  return (
    <group ref={group} {...props} dispose={null}>
      <primitive object={nodes.Hips} />
      <skinnedMesh
        name="EyeLeft"
        geometry={nodes.EyeLeft.geometry}
        material={materials.Wolf3D_Eye}
        skeleton={nodes.EyeLeft.skeleton}
        morphTargetDictionary={nodes.EyeLeft.morphTargetDictionary}
        morphTargetInfluences={nodes.EyeLeft.morphTargetInfluences}
      />
      <skinnedMesh
        name="EyeRight"
        geometry={nodes.EyeRight.geometry}
        material={materials.Wolf3D_Eye}
        skeleton={nodes.EyeRight.skeleton}
        morphTargetDictionary={nodes.EyeRight.morphTargetDictionary}
        morphTargetInfluences={nodes.EyeRight.morphTargetInfluences}
      />
      <skinnedMesh
        name="Wolf3D_Head"
        geometry={nodes.Wolf3D_Head.geometry}
        material={materials.Wolf3D_Skin}
        skeleton={nodes.Wolf3D_Head.skeleton}
        morphTargetDictionary={nodes.Wolf3D_Head.morphTargetDictionary}
        morphTargetInfluences={nodes.Wolf3D_Head.morphTargetInfluences}
      />
      <skinnedMesh
        name="Wolf3D_Teeth"
        geometry={nodes.Wolf3D_Teeth.geometry}
        material={materials.Wolf3D_Teeth}
        skeleton={nodes.Wolf3D_Teeth.skeleton}
        morphTargetDictionary={nodes.Wolf3D_Teeth.morphTargetDictionary}
        morphTargetInfluences={nodes.Wolf3D_Teeth.morphTargetInfluences}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Hair.geometry}
        material={materials.Wolf3D_Hair}
        skeleton={nodes.Wolf3D_Hair.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Body.geometry}
        material={materials.Wolf3D_Body}
        skeleton={nodes.Wolf3D_Body.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Outfit_Bottom.geometry}
        material={materials.Wolf3D_Outfit_Bottom}
        skeleton={nodes.Wolf3D_Outfit_Bottom.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Outfit_Footwear.geometry}
        material={materials.Wolf3D_Outfit_Footwear}
        skeleton={nodes.Wolf3D_Outfit_Footwear.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Outfit_Top.geometry}
        material={materials.Wolf3D_Outfit_Top}
        skeleton={nodes.Wolf3D_Outfit_Top.skeleton}
      />
    </group>
  )
}

useGLTF.preload('/models/animations/developer.glb')

export default Developer