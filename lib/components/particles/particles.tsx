"use client";

import { type ReactElement } from "react";
import type { Engine } from "tsparticles-engine";
import { Particles as ReactParticles } from "react-particles";
import { loadFull } from "tsparticles";
import { particlesConfig } from "./particles.config";
import { useIsDomLoaded } from "@lib/hooks/is-dom-loaded";

export const Particles = (): ReactElement | null => {
  const isDomLoaded = useIsDomLoaded();
  if (!isDomLoaded) return null;

  const particlesInit = async(engine: Engine): Promise<void> => {
    await loadFull(engine);
  };

  return <ReactParticles id="tsparticles" options={particlesConfig} init={particlesInit} />;
};