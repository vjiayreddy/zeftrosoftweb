"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motionDefaults } from "./defaults";

let registered = false;

export function registerMotion() {
  if (registered || typeof window === "undefined") return;

  gsap.registerPlugin(useGSAP, ScrollTrigger);
  gsap.defaults({
    ease: motionDefaults.ease,
    duration: motionDefaults.duration,
  });
  registered = true;
}

registerMotion();

export { gsap, ScrollTrigger, useGSAP };
