"use client";

import { Button } from "./ui/button";
import { Moon, Sun } from "lucide-react";
import Github from "./logos/GitHub";
import pkg from "@/package.json";
import { useTheme } from "next-themes";

export const Nav = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="fixed top-0 left-0 right-0 px-4 py-2 flex items-center h-14 z-50 backdrop-blur">
      
      {/* Company Name */}
      <div className="font-semibold text-sm tracking-wide">
        Imaginary Hub
      </div>

      {/* Actions */}
      <div className="ml-auto flex items-center gap-1">
        
        <Button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          variant="ghost"
          className="flex items-center gap-1.5 rounded-full"
        >
          {theme === "dark" ? (
            <Sun className="size-4" />
          ) : (
            <Moon className="size-4" />
          )}
          <span>{theme === "dark" ? "Light" : "Dark"} Mode</span>
        </Button>
      </div>
    </div>
  );
};
