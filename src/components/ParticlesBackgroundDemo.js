import React from "react";
import Particles from "react-tsparticles";
import { loadColorUpdater } from "tsparticles-updater-color";
import { loadCircleShape } from "tsparticles-shape-circle";
import { loadLineShape } from "tsparticles-shape-line";
import { loadBaseMover } from "tsparticles-move-base";
import { loadSizeUpdater } from "tsparticles-updater-size";
import { loadOpacityUpdater } from "tsparticles-updater-opacity";
import { loadOutModesUpdater } from "tsparticles-updater-out-modes";
import { loadParticlesLinksInteraction } from "tsparticles-interaction-particles-links";

async function particlesInit(engine) {
  await loadColorUpdater(engine);
  await loadCircleShape(engine);
  await loadLineShape(engine);
  await loadBaseMover(engine);
  await loadSizeUpdater(engine);
  await loadOpacityUpdater(engine);
  await loadOutModesUpdater(engine);
  await loadParticlesLinksInteraction(engine);
}

const particlesOptions = {
  fpsLimit: 60,
  background: {
    color: "#eeeeee"
  },
  fullScreen: { enable: false },
  particles: {
    color: { value: "aaaaaa" },
    move: {
      direction: "none",
      enable: true,
      outModes: "out",
      random: false,
      speed: 2,
      straight: false
    },
    links: {
      color: "#aaaaaa",
      distance: 200,
      enable: true,
      opacity: 0.2,
      width: 1,
    },
    number: { density: { enable: true, area: 100 }, value: 10 },
    opacity: {
      value: 0.5
    },
    shape: {
      type: "circle"
    },
    size: {
      value: { min: 5, max: 5 }
    }
  }
};

const ParticlesBackgroundDemo = () => {
  return (
    <Particles
      init={particlesInit}
      options={particlesOptions}
      style={{
        width: '100%',
        height: '100%',
        position: 'relative',
        top: 0,
        left: 0,
      }}
    />
  );
}

export default React.memo(ParticlesBackgroundDemo);