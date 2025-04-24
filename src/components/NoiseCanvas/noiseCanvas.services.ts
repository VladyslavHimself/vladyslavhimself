export const generateNoise = (
    canvas: HTMLCanvasElement | null,
    options?: {
        frames?: number;
        density?: number;
        colorFn?: () => number;
        fps?: number;
        fullScreen?: boolean;
        width?: number;
        height?: number;
    }
) => {
    if (!canvas) return;

    const {
        frames = 10,
        density = 0.5,
        colorFn = () => 0xff000000,
        fps = 25,
        fullScreen = true,
        width = window.innerWidth,
        height = window.innerHeight,
    } = options || {};

    const ctx: CanvasRenderingContext2D = canvas.getContext('2d')!;
    let wWidth = fullScreen ? window.innerWidth : width;
    let wHeight = fullScreen ? window.innerHeight : height;
    let noiseFrames: ImageData[] = [];
    let frame = 0;
    let loopTimeout: number;

    const createNoiseFrames = () => {
        noiseFrames = [];
        for (let i = 0; i < frames; i++) {
            const imageData = ctx.createImageData(wWidth, wHeight);
            const buffer32 = new Uint32Array(imageData.data.buffer);
            for (let j = 0; j < buffer32.length; j++) {
                buffer32[j] = Math.random() < density ? colorFn() : 0x00000000;
            }
            noiseFrames.push(imageData);
        }
    };

    const paintNoise = () => {
        frame = (frame + 1) % noiseFrames.length;
        ctx.putImageData(noiseFrames[frame], 0, 0);
    };

    const loop = () => {
        paintNoise();
        loopTimeout = window.setTimeout(() => {
            requestAnimationFrame(loop);
        }, 1000 / fps);
    };

    const setup = () => {
        wWidth = fullScreen ? window.innerWidth : width;
        wHeight = fullScreen ? window.innerHeight : height;
        canvas.width = wWidth;
        canvas.height = wHeight;
        createNoiseFrames();
        loop();
    };

    let resizeThrottle: number;
    window.addEventListener(
        'resize',
        () => {
            if (!fullScreen) return;
            clearTimeout(resizeThrottle);
            resizeThrottle = window.setTimeout(() => {
                clearTimeout(loopTimeout);
                setup();
            }, 200);
        },
        false
    );

    setup();
};
