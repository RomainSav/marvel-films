"use client";

import { type ReactElement } from "react";
import type { Engine } from "tsparticles-engine";
import { Particles as ReactParticles } from "react-particles";
import { loadFull } from "tsparticles";
import { particlesConfig } from "./particles.config";

export const Particles = (): ReactElement | null => {
  if (typeof window !== "undefined") {
    const particlesInit = async(engine: Engine): Promise<void> => {
      await loadFull(engine);
    };

    return <ReactParticles id="tsparticles" options={particlesConfig} init={particlesInit} />;
  }

  return null;
};