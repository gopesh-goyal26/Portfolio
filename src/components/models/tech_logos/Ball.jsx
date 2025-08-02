import { Suspense } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";

import CanvasLoader from "../../Loader";

const Ball = ({ imgUrl, position }) => {
  const [decal] = useTexture([imgUrl]);

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <group position={position}>
        <mesh castShadow receiveShadow scale={1.2}>
          <icosahedronGeometry args={[1, 1]} />
          <meshStandardMaterial
            color='#fff8eb'
            polygonOffset
            polygonOffsetFactor={-5}
            flatShading
          />
          <Decal
            position={[0, 0, 1]}
            rotation={[2 * Math.PI, 0, 6.25]}
            scale={1}
            map={decal}
            flatShading
          />
        </mesh>
      </group>
    </Float>
  );
};

const TechBallsScene = ({ technologies }) => {
  const { viewport } = useThree();

  // Calculate responsive balls per row based on viewport width
  const getBallsPerRow = () => {
    const viewportWidth = viewport.width;
    if (viewportWidth < 8) return 2; // Mobile
    if (viewportWidth < 12) return 3; // Small tablet
    if (viewportWidth < 16) return 4; // Tablet
    if (viewportWidth < 20) return 5; // Small desktop
    return 6; // Large desktop
  };

  const ballsPerRow = Math.min(getBallsPerRow(), technologies.length);
  
  // Adjust spacing based on viewport size - reduce on larger screens
  const getSpacing = () => {
    const viewportWidth = viewport.width;
    if (viewportWidth < 16) {
      return Math.max(2.8, (viewport.width / ballsPerRow) * 0.8);
    } else {
      // Reduce spacing on larger viewports to keep balls within canvas
      return Math.min(4.0, (viewport.width / ballsPerRow) * 0.7);
    }
  };
  
  const spacing = getSpacing();
  console.log(spacing);

  return (
    <>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      {technologies.map((technology, index) => {
        const row = Math.floor(index / ballsPerRow);
        const col = index % ballsPerRow;
        const x = (col - (ballsPerRow - 1) / 2) * spacing;
        const y =
          (row - (Math.ceil(technologies.length / ballsPerRow) - 1) / 2) *
          -spacing;

        return (
          <Ball
            key={technology.name}
            imgUrl={technology.icon}
            position={[x, y, 0]}
          />
        );
      })}
    </>
  );
};

const TechBallsCanvas = ({ technologies }) => {
  return (
    <Canvas
      frameloop='demand'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{ position: [0, 0, 15], fov: 50 }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} enablePan={false} />
        <TechBallsScene technologies={technologies} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default TechBallsCanvas;