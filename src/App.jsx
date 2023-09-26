import { useEffect, useMemo, useState } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import * as THREE from "three";
import {
  Stats,
  OrbitControls,
  PointerLockControls,
  Circle,
  Environment,
} from "@react-three/drei";
import { Perf } from "r3f-perf";
import { useControls } from "leva"; //Leva is a GUI component that you can add to your React Three Fiber application and interact with your scene.
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import Box from "./Box";
import Polyhedron from "./Polyhedron";
import Polyhedron2 from "./Polyhedron2";
import Polyhedron3 from "./Polyhedron3";
import Polyhedron4 from "./Polyhedron4";
import { Lights } from "./Lights";
import Floor from "./Floor";
import AdvancedGLTF from "./AdvancedGLTF";
import UseGltf from "./UseGltf";
import Annotations from "./Annotations";

export default function App() {
  const [showInstructions, setShowInstructions] = useState(true);

  function pointerlockchange() {
    setShowInstructions(!showInstructions);
  }

  useEffect(() => {
    document.addEventListener("pointerlockchange", pointerlockchange, false);
    return () => {
      document.removeEventListener(
        "pointerlockchange",
        pointerlockchange,
        false
      );
    };
  });

  const polyhedron = [
    new THREE.BoxGeometry(),
    new THREE.SphereGeometry(0.785398),
    new THREE.DodecahedronGeometry(0.785398),
  ];

  const options = useMemo(() => {
    return {
      x: { value: 0, min: 0, max: Math.PI * 2, step: 0.01 },
      y: { value: 0, min: 0, max: Math.PI * 2, step: 0.01 },
      z: { value: 0, min: 0, max: Math.PI * 2, step: 0.01 },
      visible: true,
      color: { value: "lime" },
    };
  }, []);

  const pA = useControls("Polyhedron A", options);
  const pB = useControls("Polyhedron B", options);

  const texture = useLoader(THREE.TextureLoader, "./img/grid.png");
  const gltf = useLoader(GLTFLoader, "./img/TYRANE.glb");

  return (
    <>
      {/* <Canvas camera={{ position: [-1, 4, 2.5] }} shadows>
        {/* <Canvascamera={{ position: [0, 0, 3] }}> */}
      {/* <Canvas camera={{ position: [0, 0, 2] }} frameloop="demand"> */}
      {/* <Box position={[-0.75, 0, 0]} name="A" />
      <Box position={[0.75, 0, 0]} name="B" /> */}

      {/* <Polyhedron position={[-0.75, -0.75, 0]} polyhedron={polyhedron} />
        <Polyhedron position={[0.75, -0.75, 0]} polyhedron={polyhedron} />
        <Polyhedron position={[-0.75, 0.75, 0]} polyhedron={polyhedron} />
        <Polyhedron position={[0.75, 0.75, 0]} polyhedron={polyhedron} /> */}

      {/* <OrbitControls
        // enableDamping={false}
        // enablePan={false}
        // enableRotate={false}
        //   minAzimuthAngle={-Math.PI / 4}
        //   maxAzimuthAngle={Math.PI / 4}
        //   minPolarAngle={Math.PI / 6}
        //   maxPolarAngle={Math.PI - Math.PI / 6}
        /> */}

      {/* <mesh>
          <boxGeometry args={[100, 10, 100, 100, 10, 100]} />
          <meshBasicMaterial wireframe color={"lime"} />
        </mesh>
        <PointerLockControls selector="#button" /> */}
      {/* <axesHelper args={[5]} />
        <gridHelper
          args={[20, 20, 0xff0000, "teal"]}
          //   rotation-x={Math.PI / 4}
          //   rotation={[Math.PI / 4, 0, 0]}
        />
        <Stats />
        <Perf position="top-right" />
        <Floor /> */}

      {/* Leva */}
      {/* <Polyhedron2
          position={[-1, 1, 0]}
          rotation={[pA.x, pA.y, pA.z]}
          visible={pA.visible}
          color={pA.color}
          polyhedron={polyhedron}
        />
        <Polyhedron2
          position={[1, 1, 0]}
          rotation={[pB.x, pB.y, pB.z]}
          visible={pB.visible}
          color={pB.color}
          polyhedron={polyhedron}
        /> */}

      {/* Materials */}
      {/* <directionalLight position={[1, 1, 1]} />
        <Polyhedron3
          name="meshBasicMaterial"
          position={[-3, 1, 0]}
          material={new THREE.MeshBasicMaterial()}
        />
        <Polyhedron3
          name="meshNormalMaterial"
          position={[-1, 1, 0]}
          material={new THREE.MeshNormalMaterial()}
        />
        <Polyhedron3
          name="meshPhongMaterial"
          position={[1, 1, 0]}
          material={new THREE.MeshPhongMaterial()}
        />
        <Polyhedron3
          name="meshStandardMaterial"
          position={[3, 1, 0]}
          material={new THREE.MeshStandardMaterial()}
        /> */}

      {/* Lights */}
      {/* <Lights />
        <Polyhedron4
          name="meshBasicMaterial"
          position={[-3, 1, 0]}
          material={
            new THREE.MeshBasicMaterial({ color: "yellow", flatShading: true })
          }
        />
        <Polyhedron4
          name="meshNormalMaterial"
          position={[-1, 1, 0]}
          material={new THREE.MeshNormalMaterial({ flatShading: true })}
        />
        <Polyhedron4
          name="meshPhongMaterial"
          position={[1, 1, 0]}
          material={
            new THREE.MeshPhongMaterial({ color: "lime", flatShading: true })
          }
        />
        <Polyhedron4
          name="meshStandardMaterial"
          position={[3, 1, 0]}
          material={
            new THREE.MeshStandardMaterial({
              color: 0xff0033,
              flatShading: true,
            })
          }
        /> */}

      {/* loader */}
      {/* <Lights />
        <Polyhedron4
          name="meshBasicMaterial"
          position={[-3, 1, 0]}
          material={new THREE.MeshBasicMaterial({ map: texture })}
        />
        <Polyhedron4
          name="meshNormalMaterial"
          position={[-1, 1, 0]}
          material={
            new THREE.MeshNormalMaterial({
              flatShading: true,
            })
          }
        />
        <Polyhedron4
          name="meshPhongMaterial"
          position={[1, 1, 0]}
          material={
            new THREE.MeshPhongMaterial({
              flatShading: true,
              map: texture,
            })
          }
        />
        <Polyhedron4
          name="meshStandardMaterial"
          position={[3, 1, 0]}
          material={
            new THREE.MeshStandardMaterial({
              flatShading: true,
              map: texture,
            })
          }
        /> */}

      {/* GLTFloader */}
      {/* <directionalLight
          position={[3.3, 1.0, 4.4]}
          castShadow
          intensity={Math.PI * 2}
        />
        <primitive
          object={gltf.scene}
          position={[0, 1, 0]}
          children-0-castShadow
        />
        <Circle args={[10]} rotation-x={-Math.PI / 2} receiveShadow>
          <meshStandardMaterial />
        </Circle> */}

      {/* Environment */}
      {/* <Environment files="./img/venice_sunset_1k.hdr" background blur={0} />
        <directionalLight position={[3.3, 1.0, 4.4]} />
        <primitive object={gltf.scene} position={[0, 1, 0]} /> */}
      {/* </Canvas> */}

      {/* Advancing GLTF Scenes */}
      {/* <AdvancedGLTF /> */}
      {/* <UseGltf /> */}
      {/* <Annotations /> */}
      {/* <div id="instructions" className={showInstructions ? "show" : "hide"}>
        Instructions
        <button id="button">Click To Enter</button>
      </div> */}
    </>
  );
}
