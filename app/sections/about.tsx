import React from "react";
import {
  AnimatedSpan,
  Terminal,
  TypingAnimation,
} from "@/components/ui/terminal";
import { FadeInSection } from "@/components/fade-in";

const AboutSection = () => {
  const aboutData = [
    { title: "Name", data: "Salah Eddine Soussi" },
    { title: "Role", data: "Cloud Support Engineer" },
    {
      title: "Description",
      data: "Cloud Support Engineer passionate about designing and implementing Azure solutions and building web apps that solve real-world challenges. Holder of multiple Microsoft Azure, M365, and Power Platform certifications. Combines cloud expertise with development skills to automate workflows and improve efficiency.",
    },
  ];
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-12 sm:py-16"
    >
      <FadeInSection>
        <Terminal
          className="w-full max-w-full sm:max-w-xl md:max-w-2xl lg:max-w-3xl mx-auto"
          startOnView={true}
        >
          <TypingAnimation className="font-bold text-base sm:text-lg md:text-xl">
            &gt; whoami
          </TypingAnimation>
          {aboutData.map((item, index) => (
            <AnimatedSpan
              key={index}
              className={`text-green-500 w-full leading-relaxed text-sm sm:text-base md:text-lg ${
                item.title === "Description"
                  ? "flex flex-col whitespace-pre-line break-words"
                  : "flex flex-row flex-wrap items-center gap-1 sm:gap-2"
              }`}
            >
              ✔ {item.title}: {item.data}
            </AnimatedSpan>
          ))}

          <TypingAnimation className="text-muted-foreground font-bold text-base sm:text-lg">
            Success! Introduction completed.
          </TypingAnimation>
        </Terminal>
      </FadeInSection>
    </section>
  );
};

export default AboutSection;
