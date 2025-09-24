import { OrbitingCircles } from "./ui/orbiting-circles";

import { MorphingText } from "@/components/ui/morphing-text";

import React from "react";
import Image from "next/image";

interface OrbitProps {
  firstOrbit?: string[];
  secondOrbit?: string[];
  morphinText?: string[];
}

const Orbit = ({
  firstOrbit = [],
  secondOrbit = [],
  morphinText = [],
}: OrbitProps) => {
  const firstOrbitimgs = firstOrbit.map((slug) => `/skills/${slug}.svg`);
  const secondOrbitimgs = secondOrbit.map((slug) => `/skills/${slug}.svg`);
  return (
    <div>
      <div className="relative h-[500px] w-[500px] mx-auto flex items-center justify-center">
        {/* First Orbit */}
        <div className="absolute inset-0 flex items-center justify-center">
          <OrbitingCircles>
            {firstOrbitimgs.map((src, index) => (
              <Image key={index} src={src} alt={src} width={30} height={30} />
            ))}
          </OrbitingCircles>
        </div>
        {/* Second Orbit */}
        <div className="absolute inset-0 flex items-center justify-center">
          <OrbitingCircles radius={120} reverse>
            {secondOrbitimgs.map((src, index) => (
              <Image key={index} src={src} alt={src} width={30} height={30} />
            ))}
          </OrbitingCircles>
        </div>
        {/* Centered MorphingText */}
        <div className="absolute mb-10 md:mb-0 inset-0 md:ml-1 md:mt-15 flex items-center justify-center">
          <MorphingText texts={morphinText} />
        </div>
      </div>
    </div>
  );
};

export default Orbit;
