import { Leva, useControls } from 'leva';
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { useMediaQuery } from 'react-responsive';
import { PerspectiveCamera, OrbitControls } from '@react-three/drei';
import HaxRoom from '../components/HaxRoom';
import CanvasLoader from '../components/CanvasLoader';
import { calculateSizes } from '../constants';
import Target from '../components/Target';
import ReactLogo from '../components/ReactLogo';
import Cube from '../components/Cube';
import Rings from '../components/Rings';

const Hero = () => {
  // const x = useControls('HaxRoom', {
  //   positionX: {
  //     value: 2.5,
  //     min: -10,
  //     max: 10,
  //   },
  //   positionY: {
  //     value: 2.5,
  //     min: -10,
  //     max: 10,
  //   },
  //   positionZ: {
  //     value: 2.5,
  //     min: -10,
  //     max: 10,
  //   },
  //   rotationX: {
  //     value: 0,
  //     min: -10,
  //     max: 10,
  //   },
  //   rotationY: {
  //     value: 0,
  //     min: -10,
  //     max: 10,
  //   },
  //   rotationZ: {
  //     value: 0,
  //     min: -10,
  //     max: 10,
  //   },
  //   scale: {
  //     value: 1,
  //     min: 0.1,
  //     max: 10,
  //   }
  // }

  // )

  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

  const sizes = calculateSizes(isSmall, isMobile, isTablet);

  return (
    <section className="min-h-screen w-full flex flex-col relative">
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
        <p className="text-white sm:text-3xl text-2xl font-medium text-center font-generalsans">Hi, I am Will <span className="waving-hand">👋</span></p>
        <p className="hero_tag text-gray_gradient text-center">Building Products & Brands</p>
      </div>
      <div className="w-full h-full absolute inset-0">
        {/* <Leva /> */}
        <Canvas className="w-full h-full">
          <Suspense fallback={<CanvasLoader />}>
            <PerspectiveCamera makeDefault position={[0, 0, 20]} />
            <HaxRoom 
              // scale={0.05} 
              // scale={[x.scale, x.scale, x.scale]}
              // scale={[0.1, 0.1, 0.1]}
              // scale={0.1}
              // scale={isMobile ? 0.07 : isTablet ? 0.1 : 0.1}
              scale={sizes.deskScale}
              // position={[0, 0, 0]} 
              // position={[x.positionX, x.positionY, x.positionZ]} 
              // position={[1.1, -8.7, -2.1]}
              position={sizes.deskPosition}  
              // rotation={[0, -Math.PI/2, 0]} 
              // rotation={[x.rotationX, x.rotationY, x.rotationZ]}  
              // rotation={[0.2, -3.6, 0]}
              rotation={[0.2, -Math.PI, 0]}
            />
            <group>
              <Target position={sizes.targetPosition} />
              <ReactLogo position={sizes.reactLogoPosition} />
              <Cube position={sizes.cubePosition} />
              <Rings position={sizes.ringPosition} />
            </group>
            <ambientLight intensity={1} />
            <directionalLight position={[10,10,10]} intensity={0.5} />
          </Suspense>
        </Canvas>
      </div>
    </section>
  )
}

export default Hero