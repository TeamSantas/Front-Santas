import React, {Suspense, useRef} from 'react'
import {useFrame, useLoader} from "@react-three/fiber";
import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader";
import {Html, OrbitControls, useProgress} from "@react-three/drei";

function Loader() {
    const { progress } = useProgress();
    return <Html center>{progress} % 스노우볼 만드는 중</Html>
}

export default function Model() {
    const ref = useRef<any>();
    useFrame((state, delta) => (ref.current.rotation.y += 0.005));
    const snowBall3D = useLoader(GLTFLoader, '/snow_3Dball.glb')
    return (
        <>
            <Suspense fallback={<Loader/>}>
                <ambientLight intensity={0.05} />
                <spotLight position={[5, 10, 30]} angle={0.8} intensity={0.7}/>
                <pointLight position={[-10, -10, -10]} intensity={0.7}/>
                <mesh ref={ref} scale={3}>
                        <primitive object={snowBall3D.scene}/>
                </mesh>
                {/*마우스 컨트롤*/}
                <OrbitControls />
            </Suspense>
        </>

    )
}
