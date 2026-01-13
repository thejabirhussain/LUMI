"use client";

import { Button } from "./ui/button";
import { Moon, Sun } from "lucide-react";
import Github from "./logos/GitHub";
import pkg from "@/package.json";
import { useTheme } from "next-themes";

export const Nav = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="fixed top-0 left-0 right-0 px-6 py-4 flex items-center h-20 z-50 pointer-events-none">
      <div className="bg-background/80 backdrop-blur-md border border-border/50 rounded-full px-6 py-3 flex items-center justify-between w-full max-w-4xl mx-auto shadow-sm pointer-events-auto transition-all">
        {/* Company Name */}
        <div className="font-serif text-2xl font-bold text-primary tracking-tight">
          Coach Lumi™
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <Button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            variant="ghost"
            size="icon"
            className="rounded-full hover:bg-muted text-muted-foreground transition-colors"
          >
            {theme === "dark" ? (
              <Sun className="size-5" />
            ) : (
              <Moon className="size-5" />
            )}
            <span className="sr-only">{theme === "dark" ? "Light" : "Dark"} Mode</span>
          </Button>
        </div>
      </div>
    </div>
  );
};
