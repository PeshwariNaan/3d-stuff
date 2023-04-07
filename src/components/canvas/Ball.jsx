import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from '@react-three/drei';
import CanvasLoader from '../Loader';

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);
  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#fff8eb"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          map={decal}
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 2 * Math.PI]}
        />
        <Decal
          map={decal}
          position={[1, 0, 0]}
          rotation={[2 * Math.PI, Math.PI / 2, 2 * Math.PI]}
        />
        <Decal
          debug
          map={decal}
          position={[0, 1, 0]}
          rotation={[-Math.PI / 2, 2 * Math.PI, -Math.PI / 2]}
        />
        <Decal
          map={decal}
          position={[0, -1, 0]}
          rotation={[Math.PI / 2, 2 * Math.PI, Math.PI / 2]}
        />
        <Decal
          map={decal}
          position={[0, 0, -1]}
          rotation={[-Math.PI, 0, -Math.PI]}
        />
        <Decal
          map={decal}
          position={[-1, 0, 0]}
          rotation={[-2 * Math.PI, -Math.PI / 2, -2 * Math.PI]}
        />
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon }) => {
  return (
    <Canvas frameloop="always" gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Ball imgUrl={icon} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
