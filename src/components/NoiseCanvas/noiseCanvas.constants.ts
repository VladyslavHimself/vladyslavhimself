import {Themes} from "@/components/NoiseCanvas/noiseCanvas.types";

const colors = {
    WHITE: 0x90ffffff,
    BLACK: 0xff000000
}

const themes: Themes  = {
    dark: {
        density: 0.015,
        colorFn: () => 0xff000000,
    },
    light: {
        density: 0.05,
        colorFn: () => 0x90ffffff,
    }
}

export { colors, themes };