import { Canvas } from "@react-three/fiber";
import { Particles } from "./particles";

const config = {
  speed: 1.0,
  focus: 3.8,
  aperture: 1.79,
  size: 512,
  noiseScale: 0.6,
  noiseIntensity: 0.52,
  timeScale: 1,
  pointSize: 10.0,
  opacity: 0.6,
  planeScale: 10.0,
};

interface GLProps {
  hovering: boolean;
  isDark: boolean;
}

export const GL = ({ hovering, isDark }: GLProps) => {
  // Colors matching design system
  // Light: slate-400 (#94a3b8) particles on white-ish bg
  // Dark: slate-400 (#94a3b8) particles on slate-900 (#0f172a) bg
  const bgColor = isDark ? "#0f172a" : "#ffffff";

  return (
    <div id="webgl">
      <Canvas
        camera={{
          position: [1.26, 2.66, -1.82],
          fov: 50,
          near: 0.01,
          far: 300,
        }}
      >
        <color attach="background" args={[bgColor]} />
        <Particles
          speed={config.speed}
          aperture={config.aperture}
          focus={config.focus}
          size={config.size}
          noiseScale={config.noiseScale}
          noiseIntensity={config.noiseIntensity}
          timeScale={config.timeScale}
          pointSize={config.pointSize}
          opacity={config.opacity}
          planeScale={config.planeScale}
          useManualTime={false}
          manualTime={0}
          introspect={hovering}
          isDark={isDark}
        />
      </Canvas>
    </div>
  );
};
