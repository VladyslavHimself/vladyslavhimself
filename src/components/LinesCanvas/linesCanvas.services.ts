export const generateFallingLines = (
    canvas: HTMLCanvasElement | null,
    {
        count = 100,
        baseSpeed = 0.4,
        fastSpeed = 2.0,
        fastLineRatio = 0.2,
        lineColor = 'rgb(255,255,255)',
        lineWidth = 1,
        fullScreen = true,
    } = {}
) => {
    if (!canvas) return;
    const ctx = canvas.getContext('2d')!;
    let w = fullScreen ? window.innerWidth : canvas.width;
    let h = fullScreen ? window.innerHeight : canvas.height;

    const createLine = () => {
        const angle = Math.random() < 0.5 ? Math.PI / 4 : -Math.PI / 4;
        const length = 250 + Math.random() * 1750;
        const x = Math.random() * w;
        const y = Math.random() * h;
        const isFast = Math.random() < fastLineRatio;
        const speed = isFast ? fastSpeed : baseSpeed;

        return {
            x1: x,
            y1: y,
            x2: x - Math.cos(angle) * length,
            y2: y - Math.sin(angle) * length,
            dx: Math.cos(angle) * speed,
            dy: Math.sin(angle) * speed,
        };
    };

    let lines = Array.from({ length: count }, createLine);

    const draw = () => {
        ctx.clearRect(0, 0, w, h);
        ctx.strokeStyle = lineColor;
        ctx.lineWidth = lineWidth;
        ctx.beginPath();

        for (const l of lines) {
            ctx.moveTo(l.x1, l.y1);
            ctx.lineTo(l.x2, l.y2);

            l.x1 += l.dx;
            l.y1 += l.dy;
            l.x2 += l.dx;
            l.y2 += l.dy;

            if (l.y1 > h + 100 || l.x1 < -100 || l.x1 > w + 100) {
                Object.assign(l, createLine());
            }
        }

        ctx.stroke();
        requestAnimationFrame(draw);
    };

    const resize = () => {
        w = fullScreen ? window.innerWidth : canvas.width;
        h = fullScreen ? window.innerHeight : canvas.height;
        canvas.width = w;
        canvas.height = h;
        lines = Array.from({ length: count }, createLine);
    };

    if (fullScreen) {
        window.addEventListener('resize', () => {
            clearTimeout(resizeThrottle);
            resizeThrottle = setTimeout(resize, 200);
        });
    }

    let resizeThrottle: any;
    resize();
    draw();
};

