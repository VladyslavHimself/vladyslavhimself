import { useEffect, useState } from "react";

type FluidFontOptions = {
    minSize: number;
    maxSize: number;
    minViewport?: number;
    maxViewport?: number;
};

export default function useFluidFont({
                                 minSize,
                                 maxSize,
                                 minViewport = 320,
                                 maxViewport = 1280,
                             }: FluidFontOptions): number {
    const [fontSize, setFontSize] = useState<number | null>(null);

    useEffect(() => {
        const calc = () => {
            const width = typeof window !== "undefined" ? window.innerWidth : minViewport;
            const newSize = clampFluidFont(width, minSize, maxSize, minViewport, maxViewport);
            setFontSize(newSize);
        };

        calc();
        window.addEventListener("resize", calc);
        return () => window.removeEventListener("resize", calc);
    }, [minSize, maxSize, minViewport, maxViewport]);

    return fontSize ?? minSize;
}

function clampFluidFont(
    viewportWidth: number,
    minSize: number,
    maxSize: number,
    minViewport: number,
    maxViewport: number
) {
    const clampedWidth = Math.min(Math.max(viewportWidth, minViewport), maxViewport);
    const slope = (maxSize - minSize) / (maxViewport - minViewport);
    return minSize + slope * (clampedWidth - minViewport);
}
