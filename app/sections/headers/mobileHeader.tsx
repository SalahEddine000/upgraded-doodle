"use client";
import { ModeToggle } from "@/components/ModeToggle";
import { useState, useEffect } from "react";
import { MdMenu } from "react-icons/md";

const MobileHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeHash, setActiveHash] = useState<string>("#home");

  const navlinks = [
    { title: "Home", url: "#home" },
    { title: "About", url: "#about" },
    { title: "Experience", url: "#experience" },
    { title: "Skills", url: "#skills" },
    { title: "Certifications", url: "#certifications" },
    { title: "Contact", url: "#contact" },
  ];

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
    setMenuOpen(false); // Close mobile menu
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
    <>
      {/* Fixed mobile controls */}
      <div className="md:hidden fixed top-0 left-0 right-0 border-b border-border z-40 bg-background/70 backdrop-blur-xs transition-all duration-400">
        <div className="flex flex-row justify-between">
          <button
            className="p-3 focus:outline-none cursor-pointer text-2xl"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            <MdMenu />
          </button>
          <div className="p-3 text-lg font-medium">
            <ModeToggle />
          </div>
        </div>
      </div>

      {/* Mobile menu overlay */}
      <div
        className={`fixed top-0 left-0 h-full w-2/3 max-w-xs bg-sidebar z-50 transform ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button
          className="absolute top-4 right-4 text-2xl font-bold focus:outline-none cursor-pointer"
          onClick={() => setMenuOpen(false)}
          aria-label="Close menu"
        >
          &times;
        </button>
        <nav className="flex flex-col justify-between gap-3 p-6 text-md font-medium">
          {navlinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              onClick={(e) => handleNavClick(e, link.url)}
              className={`hover:text-background hover:bg-primary px-3 py-1 rounded-full max-w-28 cursor-pointer ${
                activeHash === link.url ? "bg-primary text-background" : ""
              }`}
            >
              {link.title}
            </a>
          ))}
        </nav>
      </div>

      {/* Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 backdrop-blur-xs bg-opacity-40 z-40 "
          onClick={() => setMenuOpen(false)}
        />
      )}
    </>
  );
};

export default MobileHeader;
