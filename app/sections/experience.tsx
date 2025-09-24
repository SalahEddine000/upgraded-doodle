import React from "react";
import { FadeInSection } from "@/components/fade-in";
import Timeline from "@/components/timeline-04/timeline-04";

const ExperienceSection = () => {
  return (
    <section
      id="experience"
      className="w-full py-12 transition-all duration-400"
    >
      <FadeInSection>
        <Timeline />
      </FadeInSection>
    </section>
  );
};

export default ExperienceSection;
