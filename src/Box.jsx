import { useRef, useEffect, useLayoutEffect, useState, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function Box(props) {
  const ref = useRef();
  const [hovered, setHover] = useState(false);
  const [rotate, setRotate] = useState(false);
  const [count, setCount] = useState(0);
  const geometry = useMemo(
    () => [new THREE.BoxGeometry(), new THREE.SphereGeometry(0.785398)],
    []
  );

  useEffect(() => {
    console.log(ref.current.geometry.uuid);
  });

  //   useEffect(() => {
  //     // using useEffect, when you refresh the browser, you may see the right box flash as its position.y is modified from 0 to 1.
  //     if (ref.current.name === "B") {
  //       ref.current.position.y = 1;
  //     }
  //   });

  //   useLayoutEffect(() => {
  // // using useLayoutEffect, when you refresh the browser, you shouldn't see the flash as the boxes position.y is modified from 0 to 1.
  //     if (ref.current.name === "B") {
  //       ref.current.position.y = 1;
  //     }
  //   });

  useFrame((_, delta) => {
    //The useFrame hook is a React Three Fiber hook, and is useful if you want to execute code before every rendered frame.
    // When React calls our useFrame hook, it gives us a state object of the Three.js scene, and a clock delta indicating how many milliseconds since the last time the delta was set. The delta time shows the milliseconds between renders and can be used to change an object over time at a consistent speed independent of the clients frame rate.
    // The useFrame hook will be invoked after the JSX is converted into Three.js objects and just before the current frame is rendered to the canvas.

    // if (rotate) {
    ref.current.rotation.x += delta;
    ref.current.rotation.y += 0.5 * delta;
    // }
  });

  return (
    <mesh
      {...props}
      ref={ref}
      //   scale={hovered ? [1.1, 1.1, 1.1] : [1, 1, 1]}
      //   onPointerDown={() => setRotate(!rotate)}
      //   onPointerOver={() => setHover(true)}
      //   onPointerOut={() => setHover(false)}
      onPointerDown={() => setCount((count + 1) % 2)}
      geometry={geometry[count]}
    >
      <boxGeometry />
      {/* <meshBasicMaterial color={hovered ? 0xff0000 : 0x00ff00} wireframe /> */}
      <meshBasicMaterial color={"lime"} wireframe />
    </mesh>
  );
}
