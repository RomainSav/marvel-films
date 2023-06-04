"use client";

import { type ReactElement, useCallback } from "react";
import type { Engine } from "tsparticles-engine";
import { Particles as ReactParticles } from "react-particles";
import { loadFull } from "tsparticles";
import { particlesConfig } from "./particles.config";
import { useIsDomLoaded } from "@lib/hooks/is-dom-loaded";

export const Particles = (): ReactElement | null => {
  const isDomLoaded = useIsDomLoaded();

  const particlesInit = useCallback(async(engine: Engine) => await loadFull(engine), []);

  if (!isDomLoaded) return null;

  return <ReactParticles id="tsparticles" options={particlesConfig} init={particlesInit} />;
};