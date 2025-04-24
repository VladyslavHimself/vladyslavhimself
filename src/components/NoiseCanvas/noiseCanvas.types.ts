export type Themes = {
    [key in NoiseThemeVariants]: {
        density: number;
        colorFn: () => number;
    }
}

export type NoiseThemeVariants = 'dark' | 'light';