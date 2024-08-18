'use client';
import { OrbitControls } from '@react-three/drei';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { useRef } from 'react';
import * as THREE from 'three';
import { TextureLoader } from 'three';

export default function Cube() {
  return (
    <div className=' h-screen'>
      <Canvas className='bg-teal-100'>
        <OrbitControls enableZoom={false} enablePan={false} />
        <ambientLight intensity={2} />
        <directionalLight position={[2, 1, 1]} intensity={1} />
        <CubeFigure />
      </Canvas>
    </div>
  );
}

function CubeFigure() {
  const mesh = useRef<THREE.Mesh>(null);
  useFrame((state, delta) => {
    if (mesh.current) {
      mesh.current.rotation.x += delta * 0.25;
      mesh.current.rotation.y += delta * 0.25;
      mesh.current.rotation.z += delta * 0.25;
    }
  });

  const texture_1 = useLoader(
    TextureLoader,
    'https://images.pexels.com/photos/290595/pexels-photo-290595.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  );
  const texture_2 = useLoader(
    TextureLoader,
    'https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg?auto=compress&cs=tinysrgb&w=800'
  );
  const texture_3 = useLoader(
    TextureLoader,
    'https://images.pexels.com/photos/691668/pexels-photo-691668.jpeg?auto=compress&cs=tinysrgb&w=800'
  );
  const texture_4 = useLoader(
    TextureLoader,
    'https://images.pexels.com/photos/33041/antelope-canyon-lower-canyon-arizona.jpg?auto=compress&cs=tinysrgb&w=800'
  );
  const texture_5 = useLoader(
    TextureLoader,
    'https://images.pexels.com/photos/36478/amazing-beautiful-beauty-blue.jpg?auto=compress&cs=tinysrgb&w=800'
  );
  const texture_6 = useLoader(
    TextureLoader,
    'https://images.pexels.com/photos/982263/pexels-photo-982263.jpeg?auto=compress&cs=tinysrgb&w=800'
  );

  return (
    <mesh ref={mesh}>
      <boxGeometry args={[3, 3, 3]} />
      <meshStandardMaterial map={texture_1} attach='material-0' />
      <meshStandardMaterial map={texture_2} attach='material-1' />
      <meshStandardMaterial map={texture_3} attach='material-2' />
      <meshStandardMaterial map={texture_4} attach='material-3' />
      <meshStandardMaterial map={texture_5} attach='material-4' />
      <meshStandardMaterial map={texture_6} attach='material-5' />
    </mesh>
  );
}
