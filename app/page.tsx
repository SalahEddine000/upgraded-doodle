import Image from "next/image";
import DesktopHeader from "./sections/headers/desktopHeader";
import MobileHeader from "./sections/headers/mobileHeader";
import HeroSection from "./sections/hero";
import AboutSection from "./sections/about";
import ExperienceSection from "./sections/experience";
import CertificationSection from "./sections/certification";
import SkillsSection from "./sections/skills";
import ContactSection from "./sections/contact";

export default function Home() {
  return (
    <div>
      <DesktopHeader />
      <MobileHeader />
      <div>
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <SkillsSection />
        <CertificationSection />
        <ContactSection />
      </div>
    </div>
  );
}
