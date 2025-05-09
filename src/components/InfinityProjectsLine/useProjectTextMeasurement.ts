import React from "react";

export default function useProjectTextMeasurement(text: string, font: string) {
    const [width, setWidth] = React.useState(0);
    const canvasRef = React.useRef<HTMLCanvasElement | null>(null);

    React.useEffect(() => {
        if (!canvasRef.current) {
            canvasRef.current = document.createElement("canvas");
        }
        const context = canvasRef.current.getContext("2d");
        if (context) {
            context.font = font;
            const metrics = context.measureText(text);
            setWidth(metrics.width);
        }
    }, [text, font]);

    return width;
};