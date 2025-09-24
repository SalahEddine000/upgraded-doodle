"use client";
import { ModeToggle } from "@/components/ModeToggle";
import React, { useEffect, useState } from "react";

const DesktopHeader = () => {
  const navlinks = [
    { title: "Home", url: "#home" },
    { title: "About", url: "#about" },
    { title: "Experience", url: "#experience" },
    { title: "Skills", url: "#skills" },
    { title: "Certifications", url: "#certifications" },
    { title: "Contact", url: "#contact" },
  ];

  const [activeHash, setActiveHash] = useState<string>("#home");

  const getCurrentSection = () => {
    let current = "#home";
    for (const link of navlinks) {
      const section = document.querySelector(link.url);
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 80 && rect.bottom > 80) {
          current = link.url;
          break;
        }
      }
    }
    return current;
  };

  useEffect(() => {
    setActiveHash(window.location.hash || "#home");
    const onScroll = () => {
      setActiveHash(getCurrentSection());
    };
    const onHashChange = () => {
      setActiveHash(window.location.hash || "#home");
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("hashchange", onHashChange);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("hashchange", onHashChange);
    };
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    url: string
  ) => {
    e.preventDefault();
    const element = document.querySelector(url);
    if (element) {
      window.history.pushState(null, "", url);
      setActiveHash(url);
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div className="sticky top-5 z-50 w-full">
      <nav className="hidden md:flex justify-center items-center gap-5 p-2 text-lg font-medium bg-sidebar/50 max-w-3xl mx-auto rounded-full mt-5 backdrop-blur-md border border-border/40 ">
        {navlinks.map((link, index) => (
          <a
            key={index}
            href={link.url}
            onClick={(e) => handleNavClick(e, link.url)}
            className={`hover:text-background hover:bg-primary px-3 py-1 rounded-full hover:border-border cursor-pointer ${
              activeHash === link.url ? "bg-primary text-background" : ""
            }`}
          >
            {link.title}
          </a>
        ))}
        <ModeToggle />
      </nav>
    </div>
  );
};

export default DesktopHeader;
