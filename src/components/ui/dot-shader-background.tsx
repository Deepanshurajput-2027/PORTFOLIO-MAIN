'use client'

import { useMemo, useEffect } from 'react'
import { Canvas, useFrame, useThree} from '@react-three/fiber'
import { shaderMaterial, useTrailTexture } from '@react-three/drei'
import { useTheme } from 'next-themes'
import * as THREE from 'three'
import { extend } from '@react-three/fiber'

// Create Shadow Material
const DotMaterial = shaderMaterial(
    {
        time: 0,
        resolution: new THREE.Vector2(),
        dotColor: new THREE.Color('#FFFFFF'),
        bgColor: new THREE.Color('#050505'),
        mouseTrail: null,
        render: 0,
        rotation: 0,
        gridSize: 50,
        dotOpacity: 0.05
    },
  /* glsl */ `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      // Force the vertex to clip space (-1 to 1) directly.
      // This ignores the camera and transform for drawing, ensuring fullscreen.
      // We rely on the mesh scale only for raycasting/physics.
      gl_Position = vec4(position.xy, 0.0, 1.0);
    }
  `,
  /* glsl */ `
    uniform float time;
    uniform int render;
    uniform vec2 resolution;
    uniform vec3 dotColor;
    uniform vec3 bgColor;
    uniform sampler2D mouseTrail;
    uniform float rotation;
    uniform float gridSize;
    uniform float dotOpacity;
    
    varying vec2 vUv;

    vec2 rotate(vec2 uv, float angle) {
        float s = sin(angle);
        float c = cos(angle);
        mat2 rotationMatrix = mat2(c, -s, s, c);
        return rotationMatrix * (uv - 0.5) + 0.5;
    }

    float sdfCircle(vec2 p, float r) {
        return length(p - 0.5) - r;
    }

    void main() {
      // Use gl_FragCoord for screen-space effects regardless of geometry
      vec2 screenUv = gl_FragCoord.xy / resolution;
      
      // Aspect Corrected UVs for Grid (Preserve square grid cells)
      float aspect = resolution.x / resolution.y;
      vec2 aspectUv = screenUv;
      aspectUv.x *= aspect;

      // Grid Logic
      vec2 rotatedUv = rotate(aspectUv, rotation);
      vec2 gridUv = fract(rotatedUv * gridSize);
      vec2 gridIndex = floor(rotatedUv * gridSize);

      // Mouse Interaction
      vec2 cellCenterAspect = (gridIndex + 0.5) / gridSize;
      vec2 unrotatedCenterAspect = rotate(cellCenterAspect, -rotation);
      vec2 cellScreenUv = unrotatedCenterAspect;
      cellScreenUv.x /= aspect; 

      float mouseInfluence = texture2D(mouseTrail, cellScreenUv).r;

      // Dynamic Dot Size
      float baseSize = 0.35; 
      
      float currentSize = baseSize + mouseInfluence * 0.4;
      currentSize = clamp(currentSize, 0.0, 0.55);

      // Draw Dot
      float dist = sdfCircle(gridUv, currentSize);
      float smoothDot = smoothstep(0.05, 0.0, dist);

      // Colors
      float currentOpacity = dotOpacity + mouseInfluence * 0.8;
      
      // Vignette
      float distFromCenter = length(screenUv - 0.5);
      float vignette = 1.0 - smoothstep(0.4, 1.5, distFromCenter);
      
      vec3 color = mix(bgColor, dotColor, smoothDot * currentOpacity * vignette);

      gl_FragColor = vec4(color, 1.0);

      #include <tonemapping_fragment>
      #include <colorspace_fragment>
    }
  `
)

extend({ DotMaterial })

type DotMaterialType = {
    uniforms: {
        time: { value: number }
        resolution: { value: THREE.Vector2 }
        dotColor: { value: THREE.Color }
        bgColor: { value: THREE.Color }
        mouseTrail: { value: THREE.Texture | null }
        render: { value: number }
        rotation: { value: number }
        gridSize: { value: number }
        dotOpacity: { value: number }
    }
}

function Scene() {
    const size = useThree((s) => s.size)
    const viewport = useThree((s) => s.viewport)
    const { theme } = useTheme()

    const rotation = 0.2 // Slight rotation for style
    const gridSize = 80 // Reasonable density

    // Modified colors to match your existing dark theme
    const getThemeColors = () => {
        return {
            dotColor: '#eab308', // Accent color (yellow)
            bgColor: '#050505', // Your background color
            dotOpacity: 0.15
        }
    }

    const themeColors = getThemeColors()

    const [trail, onMove] = useTrailTexture({
        size: 512,
        radius: 0.15, // Increased radius for better visibility
        maxAge: 400,
        interpolate: 1,
        ease: (x) => {
            return x < 0.5 ? (1 - Math.sqrt(1 - Math.pow(2 * x, 2))) / 2 : (Math.sqrt(1 - Math.pow(-2 * x + 2, 2)) + 1) / 2
        }
    })

    const dotMaterial = useMemo(() => {
        return new DotMaterial()
    }, []) as unknown as DotMaterialType

    useEffect(() => {
        const color = new THREE.Color(themeColors.dotColor)
        const bgColor = new THREE.Color(themeColors.bgColor)

        dotMaterial.uniforms.dotColor.value.copy(color)
        dotMaterial.uniforms.bgColor.value.copy(bgColor)
        dotMaterial.uniforms.dotOpacity.value = themeColors.dotOpacity
    }, [theme, dotMaterial, themeColors])

    useFrame((state) => {
        dotMaterial.uniforms.time.value = state.clock.elapsedTime
        // Explicitly update trail uniform to ensure it catches React state updates 
        if (trail) dotMaterial.uniforms.mouseTrail.value = trail
    })

    const handlePointerMove = (e: any) => {
        onMove(e)
    }

    // We use a 2x2 plane geometry to ensure full screen coverage in the vertex shader (clip space -1 to 1).
    // However, for raycasting (mouse trail) to work with correct UVs (0 to 1), the physical mesh 
    // must match the viewport size exactly.
    // Since geometry is size 2, we scale by viewport / 2.
    const scale = [viewport.width / 2, viewport.height / 2, 1] as [number, number, number]
    const dpr = viewport.dpr || 1;

    return (
        <mesh scale={scale} onPointerMove={handlePointerMove} frustumCulled={false}>
            {/* Plane args [2,2] ensures vertices go from -1 to 1, covering full clip space in custom vertex shader */}
            <planeGeometry args={[2, 2]} />
            <primitive
                object={dotMaterial}
                attach="material"
                resolution={[size.width * dpr, size.height * dpr]}
                rotation={rotation}
                gridSize={gridSize}
                mouseTrail={trail}
                render={0}
                transparent={true}
            />
        </mesh>
    )
}

export const DotScreenShader = () => {
    return (
        <Canvas
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                pointerEvents: 'auto', // Important for mouse trail
                zIndex: 0
            }}
            gl={{
                antialias: true,
                powerPreference: 'high-performance',
                outputColorSpace: THREE.SRGBColorSpace,
                toneMapping: THREE.NoToneMapping
            }}
            camera={{ position: [0, 0, 1] }}
        >
            <Scene />
        </Canvas>
    )
}
