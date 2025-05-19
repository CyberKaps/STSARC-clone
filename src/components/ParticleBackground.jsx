import { useCallback } from "react";
import { loadFull } from "tsparticles";
import Particles from "react-tsparticles";
// import { Engine } from "tsparticles-engine";

export default function ParticleBackground() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: false },
        background: {
          color: {
            value: "#fff9f2",
          },
        },
        particles: {
          number: {
            value: 50,
            density: {
              enable: true,
              area: 800,
            },
          },
          color: {
            value: "#f96a50",
          },
          shape: {
            type: "circle",
          },
          opacity: {
            value: 0.4,
          },
          size: {
            value: 3,
            random: true,
          },
          move: {
            enable: true,
            speed: 1.5,
            direction: "none",
            outModes: "out",
          },
        },
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            repulse: {
              distance: 100,
              duration: 0.4,
            },
          },
        },
        detectRetina: true,
      }}
    />
  );
}
