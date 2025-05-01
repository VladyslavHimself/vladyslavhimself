import { useThree } from "@react-three/fiber";
import * as THREE from "three";
import { Plane } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import {mercurianFragmentShader, mercurianVertexShader} from "@/shaders/mercurian.glsl";
import React from "react";

export default function MercurianShader() {
    const { size } = useThree();
    const resolution = React.useRef(new THREE.Vector2(size.width, size.height));

    const uniforms = React.useMemo(() => ({
        time: { value: 0 },
        scale: { value: 1.02 },
        resolution: { value: resolution.current },
        color1: { value: new THREE.Color('#A6D0F0') },
        color2: { value: new THREE.Color('#8A81EA') },
        color3: { value: new THREE.Color('#ACC3EA') },
        color4: { value: new THREE.Color('#929AEF') },
        ax: { value: 1.7 },
        ay: { value: 7.9 },
        az: { value: 5.8 },
        aw: { value: 4.5 },
        bx: { value: 0.62 },
        by: { value: 1 },
    }), []);

    React.useEffect(() => {
        resolution.current.set(size.width, size.height);
    }, [size]);

    useFrame(() => {
        uniforms.time.value += 0.05;
    });

    return (
        <Plane args={[2, 2]}>
            <shaderMaterial
                vertexShader={mercurianVertexShader}
                fragmentShader={mercurianFragmentShader}
                uniforms={uniforms}
            />
        </Plane>
    );
}
