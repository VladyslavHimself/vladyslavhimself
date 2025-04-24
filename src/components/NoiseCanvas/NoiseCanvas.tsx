'use client';

import React from 'react';
import { generateNoise } from '@/components/NoiseCanvas/noiseCanvas.services';
import {NoiseThemeVariants} from "@/components/NoiseCanvas/noiseCanvas.types";
import {themes} from "@/components/NoiseCanvas/noiseCanvas.constants";

type Props = {
    type: NoiseThemeVariants
}

export default function NoiseCanvas({ type }: Props) {
    const canvasRef = React.useRef<HTMLCanvasElement | null>(null);
    const currentTheme = themes[type];

    React.useEffect(() => {
        generateNoise(canvasRef.current, currentTheme);
    }, [currentTheme]);

    return (
        <canvas
            ref={canvasRef}
            id="noise-canvas"
            style={{
                position: 'fixed',
                inset: 0,
                zIndex: -1,
                width: '100%',
                height: '100%',
                pointerEvents: 'none',
            }}
        />
    );
}