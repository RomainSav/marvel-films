"use client";

import { type ReactElement } from "react";
import type { Engine } from "tsparticles-engine";
import { Particles as ReactParticles } from "react-particles";
import { loadFull } from "tsparticles";
import { particlesConfig } from "./particles.config";

export const Particles = (): ReactElement | null => {
  const particlesInit = async(engine: Engine): Promise<void> => {
    await loadFull(engine);
  };

  if (typeof window === "undefined") return null;

  return <ReactParticles id="tsparticles" options={particlesConfig} init={particlesInit} />;
};