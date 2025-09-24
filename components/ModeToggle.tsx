"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export function ModeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = resolvedTheme === "dark";

  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark");
  };

  return (
    <Button
      variant="outline"
      size="icon"
      aria-label="Toggle theme"
      onClick={toggleTheme}
      className="bg-transparent border-0 shadow-none hover:bg-transparent hover:text-foreground cursor-pointer"
    >
      {mounted ? (
        <>
          <Sun
            className={`h-[1.2rem] w-[1.2rem] transition-all duration-500 ${
              isDark ? "scale-0 -rotate-90 absolute" : "scale-100 rotate-0"
            }`}
          />
          <Moon
            className={`h-[1.2rem] w-[1.2rem] transition-all duration-500 bg-transparent ${
              isDark ? "scale-100 rotate-0" : "scale-0 rotate-90 absolute"
            }`}
          />
        </>
      ) : (
        // Optionally render nothing or a placeholder
        <span className="h-[1.2rem] w-[1.2rem]" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
