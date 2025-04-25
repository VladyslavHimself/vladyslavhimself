'use client';

import React from 'react';
import {generateFallingLines} from "@/components/LinesCanvas/linesCanvas.services";

export function LinesCanvas() {
    const linesRef = React.useRef<HTMLCanvasElement | null>(null);
    const milkywayLinesRef= React.useRef<HTMLCanvasElement | null>(null);


    React.useEffect(() => {
        generateFallingLines(linesRef.current, {
            count: 50,
            baseSpeed: 0.4,
            fastSpeed: 6,
            lineColor: 'rgba(255,255,255,0.015)',
            lineWidth: 1.5
        });

        generateFallingLines(milkywayLinesRef.current, {
            count: 10,
            baseSpeed: 0.4,
            fastSpeed: 0.6,
            lineColor: 'rgba(255,255,255,0.005)',
            lineWidth: 150,
        });
    }, []);

    return (
       <>
           <canvas
               id="lines-canvas"
               ref={linesRef}
               style={{
                   position: 'fixed',
                   inset: 0,
                   zIndex: -2,
                   width: '100%',
                   height: '100%',
                   pointerEvents: 'none',
               }}
           />
           <canvas
               id="milkyway-lines-canvas"
               ref={milkywayLinesRef}
               style={{
                   position: 'fixed',
                   inset: 0,
                   zIndex: -3,
                   width: '100%',
                   height: '100%',
                   pointerEvents: 'none',
               }}
           />
       </>
    );
};