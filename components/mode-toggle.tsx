"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

export function ModeToggle() {
  const { setTheme, theme } = useTheme();

  return (
    <>
      {theme === "dark" ? (
        <Button
          onClick={() => setTheme("light")}
          className="bg-gray-800 text-white hover:bg-gray-900"
        >
          <Sun />
        </Button>
      ) : (
        <Button
          onClick={() => setTheme("dark")}
          className="bg-white text-mainColor hover:bg-gray-100"
        >
          <Moon />
        </Button>
      )}
    </>
  );
}
