"use client";

import { type ReactElement, useCallback } from "react";
import type { Engine } from "tsparticles-engine";
import { Particles as ReactParticles } from "react-particles";
import { loadFull } from "tsparticles";
import { particlesConfig } from "./particles.config";

export const Particles = (): ReactElement => {
  const particlesInit = useCallback(async(engine: Engine) => await loadFull(engine), []);

  return <ReactParticles id="tsparticles" options={particlesConfig} init={particlesInit} />;
};