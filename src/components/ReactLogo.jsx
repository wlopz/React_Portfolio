import { useGLTF, Float } from '@react-three/drei'

const ReactLogo = (props) => {

  // const reactLogoRef = useRef()
  // // const {scene} = useGLTF('/models/react.glb')
  // useGSAP(() => {
  //   gsap.to(reactLogoRef.current.position, {
  //     y: reactLogoRef.current.position.y + 0.5,
  //     duration: 1.5,
  //     repeat: -1,
  //     yoyo: true
  //   })
  // })
  
  const { nodes, materials } = useGLTF('/models/react.glb')
  return (
    <Float floatIntensity={1}>
      <group position={[8, 8, 0]} {...props} scale={0.3}>
        <mesh
          geometry={nodes['React-Logo_Material002_0'].geometry}
          material={materials['Material.002']}
          position={[0, 0.079, 0.181]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.39, 0.39, 0.5]}
        />
      </group>
    </Float>
  )
}

useGLTF.preload('/models/react.glb')

export default ReactLogo