import React, { useCallback, useEffect } from 'react';
import Particles from "react-tsparticles";
//import Particles from "@tsparticles/react";
//import {tsParticles} from "tsparticles-engine"
import { loadFull } from "tsparticles";

const ParticleBackground = () => {
  console.log("ParticleBackground component rendered");

  const particlesInit = useCallback(async (engine) => {
    console.log("Initializing tsParticles");
    try {
      await loadFull(engine);
      //await tsParticles.load("tsparticles", { /* options */ });
      console.log("tsParticles loaded");
    } catch (error) {
      console.error("Error loading tsParticles", error);
    }
    //await loadSlim(engine);
    //await import("@tsparticles/slim").then((module) => {
    //  module.loadSlim(engine);
    //});
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    console.log("Particles loaded", container); // Add this line
  }, []);

  useEffect(() => {
    console.log("Particles useEffect called");
  }, []);

  return (
      <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        background: {
          color: {
            value: '#transparent',
          },
        },
        fullScreen: { enable: false },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: "#000000",
          },
          links: {
            color: "#000000",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 2,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 10,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 5 },
          },
        },
        detectRetina: true,
      }}
      style={{
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
      }}
    />
  );
};

export default ParticleBackground;