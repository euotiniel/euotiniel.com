"use client";

import * as React from "react";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";

import { Button } from "./ui/button";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const [animating, setAnimating] = React.useState(false);

  React.useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme && savedTheme !== theme) {
      setTheme(savedTheme);
    }
  }, [theme, setTheme]);

  const toggleTheme = () => {
    setAnimating(true);
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);

    setTimeout(() => setAnimating(false), 200);
  };

  return (
    <Button
      variant="link"
      size="sm"
      name="Theme"
      id="theme"
      onClick={toggleTheme}
      className="border-none outline-none hover:bg-none focus-visible:outline-none opacity-75"
    >
      <motion.div
        key={theme} 
        initial={{ rotate: 0, scale: 1 }}
        animate={animating ? { rotate: 80, scale: 1.1 } : {}}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        {theme === "dark" ? (
          <MoonIcon className="h-[1rem] w-[1rem]" />
        ) : (
          <SunIcon className="h-[1rem] w-[1rem]" />
        )}
      </motion.div>
    </Button>
  );
}
