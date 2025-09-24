import { FadeInSection } from "@/components/fade-in";
import React from "react";
import Orbit from "@/components/orbit";

import { AnimatedListDemo } from "@/components/animated-list";
import {
  FaRobot,
  FaShieldAlt,
  FaGlobe,
  FaMoneyBill,
  FaEye,
  FaPhp,
  FaJs,
  FaPython,
  FaLaravel,
  FaVuejs,
  FaReact,
} from "react-icons/fa";
import {
  SiTypescript,
  SiIonic,
  SiDotnet,
  SiExpress,
  SiNextdotjs,
  SiTailwindcss,
} from "react-icons/si";
import { TbBrandCSharp, TbBrandReactNative } from "react-icons/tb";

const SkillsSection = () => {
  const cloudFirstOrbit = ["vm", "blob", "vnet", "sdk", "backup", "cdn"];
  const cloudSecondOrbit = ["teams", "dotnet", "k8s", "azure"];
  const codingFirstOrbit = ["php", "JavaScript", "Python"];
  const codingSecondOrbit = ["TypeScript", "Csharp"];
  const frameworksFirstOrbit = [
    "next",
    "express",
    "dotnet",
    "ionic",
    "reactnative",
  ];
  const frameworksSecondOrbit = ["react", "laravel", "vuejs", "tailwind"];
  const CloudSkills = ["Cloud", "Skills"];
  const CodingLanguages = ["Coding", "Languages"];
  const Frameworks = ["Frameworks", "Libraries"];

  let CloudSkillsList = [
    {
      name: "Automation",
      time: "2y ago",
      icon: <FaRobot />,
      color: "#00C9A7",
    },
    {
      name: "Security",
      time: "4y ago",
      icon: <FaShieldAlt />,
      color: "#FFB800",
    },
    {
      name: "Networking",
      time: "7y ago",
      icon: <FaGlobe />,
      color: "#FF3D71",
    },
    {
      name: "Cost Optimization",
      time: "2y ago",
      icon: <FaMoneyBill />,
      color: "#1E86FF",
    },
    {
      name: "Monitoring",
      time: "2y ago",
      icon: <FaEye />,
      color: "#FF3D71",
    },
  ];

  let CodingLanguagesSkills = [
    {
      name: "PHP",
      time: "1y ago",
      icon: <FaPhp />,
      color: "#00C9A7",
    },
    {
      name: "JavaScript",
      time: "1y ago",
      icon: <FaJs />,
      color: "#FFB800",
    },
    {
      name: "csharp",
      time: "7y ago",
      icon: <TbBrandCSharp />,
      color: "#9d4e96",
    },
    {
      name: "TypeScript",
      time: "1y ago",
      icon: <SiTypescript />,
      color: "#1E86FF",
    },
    {
      name: "Python",
      time: "1y ago",
      icon: <FaPython />,
      color: "#FFB800",
    },
  ];

  let FrameworksSkills1 = [
    {
      name: "Laravel",
      time: "1y ago",
      icon: <FaLaravel />,
      color: "#F05340",
    },
    {
      name: "VueJs",
      time: "1y ago",
      icon: <FaVuejs />,
      color: "#FFB800",
    },
    {
      name: "ReactJs",
      time: "6m ago",
      icon: <FaReact />,
      color: "#9d4e96",
    },
    {
      name: "React Native",
      time: "6m ago",
      icon: <TbBrandReactNative />,
      color: "#1E86FF",
    },
  ];
  let FrameworksSkills2 = [
    {
      name: "Ionic",
      time: "8m ago",
      icon: <SiIonic />,
      color: "#FFB800",
    },
    {
      name: "Dotnet",
      time: "1y ago",
      icon: <SiDotnet />,
      color: "#F05340",
    },
    {
      name: "ExpressJs",
      time: "6m ago",
      icon: <SiExpress />,
      color: "#FFB800",
    },
    {
      name: "NextJs",
      time: "2m ago",
      icon: <SiNextdotjs />,
      color: "#9d4e96",
    },
    {
      name: "TailwindCss",
      time: "2y ago",
      icon: <SiTailwindcss />,
      color: "#1E86FF",
    },
  ];
  return (
    <section id="skills" className="flex items-center justify-center py-32">
      <FadeInSection>
        <div className="flex flex-col items-center   gap-20">
          <div className="flex flex-col-reverse md:flex-row items-center  justify-center gap-x-10 ">
            <AnimatedListDemo notifications={CloudSkillsList} />
            <Orbit
              firstOrbit={cloudFirstOrbit}
              secondOrbit={cloudSecondOrbit}
              morphinText={CloudSkills}
            />
          </div>
          <div className="flex flex-col-reverse  md:flex-row-reverse items-center justify-center gap-x-10 ">
            <AnimatedListDemo notifications={CodingLanguagesSkills} />
            <Orbit
              morphinText={CodingLanguages}
              firstOrbit={codingFirstOrbit}
              secondOrbit={codingSecondOrbit}
            />
          </div>
          <div className="flex flex-col-reverse  md:flex-row items-center justify-center gap-x-10 ">
            <div className="flex flex-col gap-0">
              <AnimatedListDemo
                notifications={FrameworksSkills1}
                className="h-[370px] mt-10"
              />
              <AnimatedListDemo
                notifications={FrameworksSkills2}
                className="py-0 mt-0"
              />
            </div>
            <Orbit
              morphinText={Frameworks}
              firstOrbit={frameworksFirstOrbit}
              secondOrbit={frameworksSecondOrbit}
            />
          </div>
        </div>
      </FadeInSection>
    </section>
  );
};

export default SkillsSection;
