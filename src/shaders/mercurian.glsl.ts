export const mercurianFragmentShader = `
precision highp float;
varying vec2 vUv;
uniform float time;
uniform float scale;
uniform vec2 resolution;
uniform vec3 color1;
uniform vec3 color2;
uniform vec3 color3;
uniform vec3 color4;
uniform float ax, ay, az, aw;
uniform float bx, by;

float cheapNoise(vec3 stp) {
    vec3 p = vec3(stp.st, stp.p);
    vec4 a = vec4(ax, ay, az, aw);
    return mix(
    sin(p.z + p.x * a.x + cos(p.x * a.x - p.z)) *
    cos(p.z + p.y * a.y + cos(p.y * a.x + p.z)),
    sin(1. + p.x * a.z + p.z + cos(p.y * a.w - p.z)) *
    cos(1. + p.y * a.w + p.z + cos(p.x * a.x + p.z)),
    0.436
    );
}

void main() {
    vec2 aR = vec2(resolution.x/resolution.y, 1.);
    vec2 st = vUv * aR * scale;
    float S = sin(time * 0.005);
    float C = cos(time * 0.005);
    vec2 v1 = vec2(cheapNoise(vec3(st, 2.)), cheapNoise(vec3(st, 1.)));
    vec2 v2 = vec2(
    cheapNoise(vec3(st + bx*v1 + vec2(C * 1.7, S * 9.2), 0.15 * time)),
    cheapNoise(vec3(st + by*v1 + vec2(S * 8.3, C * 2.8), 0.126 * time))
    );
    float n = 0.5 + 0.5 * cheapNoise(vec3(st + v2, 0.));

    vec3 color = mix(color1, color2, clamp((n*n)*8., 0.0, 1.0));
    color = mix(color, color3, clamp(length(v1), 0.0, 1.0));
    color = mix(color, color4, clamp(length(v2.x), 0.0, 1.0));
    color /= n*n + n * 7.;

    gl_FragColor = vec4(color, 1.0);
}
`;

export const mercurianVertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }`;