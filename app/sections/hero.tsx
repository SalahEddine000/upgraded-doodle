import React from "react";
import emojiImage from "@/public/assets/Emoji.png";
import Image from "next/image";
import { TextLoop } from "@/components/motion-primitives/text-loop";
import { Button } from "@/components/ui/button";
import { FaDownload } from "react-icons/fa";
import { FadeInSection } from "@/components/fade-in";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen py-32 flex flex-col gap-8 items-center justify-center"
    >
      <FadeInSection>
        <div className="flex flex-col items-center mb-8">
          <Image
            src={emojiImage}
            alt="Person saying Hi!"
            width={100}
            height={100}
          />
          <div className="flex flex-row gap-4 items-center bg-card border border-border px-4 py-1.5 rounded-xl text-card-foreground hover:bg-primary hover:text-background">
            <div className="bg-green-500 size-2.5 rounded-full"> </div>
            <div className="font-medium text-md lg:text-lg cursor-default">
              Available for new challenges
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-5 items-center">
          <div className="flex flex-row flex-wrap justify-center items-center text-center max-w-4xl mx-5">
            <div className="text-2xl lg:text-4xl font-bold">
              Cloud Support
              <TextLoop
                className="overflow-y-clip mx-2 text-primary"
                transition={{
                  type: "spring",
                  stiffness: 900,
                  damping: 80,
                  mass: 10,
                }}
                variants={{
                  initial: {
                    y: 20,
                    rotateX: 90,
                    opacity: 0,
                    filter: "blur(4px)",
                  },
                  animate: {
                    y: 0,
                    rotateX: 0,
                    opacity: 1,
                    filter: "blur(0px)",
                  },
                  exit: {
                    y: -20,
                    rotateX: -90,
                    opacity: 0,
                    filter: "blur(4px)",
                  },
                }}
              >
                <span>Engineer</span>
                <span>Passionate</span>
                <span>Enthusiast</span>
              </TextLoop>
              | Growing Developer{" "}
            </div>
            <p className="text-foreground/70 md:text-xl text-xs font-sans mt-2 max-w-md lg:max-w-3xl">
              Exploring the intersection of cloud technologies and software
              development, where scalable infrastructure meets creative
              problem-solving
            </p>
          </div>

          <div className="font-semibold flex flex-col md:flex-row justify-center items-center gap-x-5 gap-2  max-w-xs px-5">
            <a href="/SalahEddineSoussi.pdf" target="_blank">
              <Button
                size="lg"
                className="bg-primary/80 hover:bg-primary cursor-pointer border border-border rounded-full w-full md:w-auto"
              >
                <FaDownload /> Download CV
              </Button>
            </a>
            <a href="#contact" className="w-full">
              <Button
                size="lg"
                variant="outline"
                className="font-semibold cursor-pointer hover:text-foreground hover:bg-secondary/50 border border-border rounded-full w-full md:w-auto"
              >
                👋 Contact Me
              </Button>
            </a>
          </div>
        </div>
      </FadeInSection>
    </section>
  );
};

export default HeroSection;
