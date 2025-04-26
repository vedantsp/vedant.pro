// src/sections/Hero.jsx
import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Leva } from 'leva'
import { useMediaQuery } from 'react-responsive'
import { PerspectiveCamera, Loader } from '@react-three/drei'

import HackerRoom from '../components/HackerRoom.jsx'
import HeroCamera from '../components/HeroCamera.jsx'
import Target     from '../components/Target.jsx'
import ReactLogo  from '../components/ReactLogo.jsx'
import Rings      from '../components/Rings.jsx'
import Cube       from '../components/Cube.jsx'
import Button     from '../components/Button.jsx'
import { calculateSizes } from '../constants/index.js'

export default function Hero() {
  const isSmall  = useMediaQuery({ maxWidth: 440 })
  const isMobile = useMediaQuery({ maxWidth: 768 })
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 })
  const sizes    = calculateSizes(isSmall, isMobile, isTablet)

  return (
    <section id="home" className="relative min-h-screen w-full flex flex-col">
      {/* ─── HERO TEXT: outside of the Canvas ─── */}
      <div className="relative z-10 flex justify-center mt-20 sm:mt-36">
        <div className="inline-block bg-black px-6 py-3 rounded-lg">
          <p
            className="
              sm:text-3xl text-xl font-medium 
              text-gray-300 text-center font-generalsans
              
            ">
            Hi, I am Vedant <span className="waving-hand">👋</span>
          </p>
          <p
            className="
              hero_tag text-offwhite text-center text-center
              drop-shadow-[0_0_4px_rgba(255,255,255,0.6)]
            ">
            Building Products & Brands
          </p>
        </div>
      </div>

      {/* ─── 3D CANVAS + VIGNETTE ─── */}
      <div className="absolute inset-0 left-10 right-10 top-20 sm:top-36 bottom-0 z-0 overflow-hidden">
        <Canvas
          className="w-full h-full"
          shadows
          gl={{ antialias: true }}
          camera={{ position: [0, 2, 5], near: 0.1, far: 100 }}
        >
          <Leva hidden />
          <Suspense fallback={null}>
            <PerspectiveCamera makeDefault position={[0, 2, 5]} />
            <HeroCamera isMobile={isMobile}>
              <HackerRoom scale={5} position={[0, 0, 0]} rotation={[0, Math.PI / 6, 0]} />
            </HeroCamera>
            <group>
              <Target    position={sizes.targetPosition} />
              <ReactLogo position={sizes.reactLogoPosition} />
              <Rings     position={[sizes.ringPosition[0] + 1, sizes.ringPosition[1] - 2, sizes.ringPosition[2]]} />
              <Cube      position={sizes.cubePosition} />
            </group>
            <ambientLight intensity={1} />
            <directionalLight position={[10, 10, 10]} intensity={0.5} />
          </Suspense>
        </Canvas>

        <Loader />

        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background: `radial-gradient(
              ellipse at center,
              rgba(0,0,0,0)    30%,
              rgba(0,0,0,0.9)  70%,
              rgba(0,0,0,1)   100%
            )`,
          }}
        />
      </div>

      {/* ─── CALL TO ACTION ─── */}
      <div className="absolute bottom-7 left-0 right-0 z-10 flex justify-center">
        <a href="#about" className="w-fit">
          <Button
            name="Let's work together"
            isBeam
            containerClass="sm:w-fit w-full sm:min-w-96"
          />
        </a>
      </div>
    </section>
  )
}
