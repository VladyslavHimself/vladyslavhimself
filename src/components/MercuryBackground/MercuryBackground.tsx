import React from "react";
import {Canvas} from "@react-three/fiber";
import MercurianShader from "@/components/MercuryBackground/MercurianShader";
import styles from './mercuryBackground.module.scss';

export default function MercuryBackground() {
    return (
        <div className={styles['mercury-background-canvas']}>
            <Canvas camera={{ position: [0, 0, 1], fov: 90}} >
                <MercurianShader />
            </Canvas>
        </div>

    );
}