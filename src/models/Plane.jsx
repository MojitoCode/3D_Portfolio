import React from 'react'
import planeScene from '../assets/3d/plane.glb'
import { useGLTF } from '@react-three/drei'

{/*START HERE - 54:59*/}
const Plane = () => {
    const { scene, animations } = useGLTF(planeScene)
  
    return (
        
    <mesh scale={[3,3,3]}>
        <primitive object={scene} />
    </mesh>
  )
}

export default Plane