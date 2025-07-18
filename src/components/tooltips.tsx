"use client"; 
import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";



type TooltipProps = {
  text: string;
} & React.ComponentProps<"div">;

export default function Tooltip({ text, children, className }: TooltipProps) {
  const [isToastVisible, setIsToastVisible] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsToastVisible(true)}
      onMouseLeave={() => setIsToastVisible(false)}
      className="relative inline-block"
    >
      <motion.div
        className={cn(
          "absolute -top-4 left-1/2 whitespace-nowrap rounded-md border border-neutral-300 bg-neutral-50 [translate:-50%_-50%]",
          "px-2 py-1 text-xs text-black dark:border-[#262626a4] dark:bg-neutral-900 dark:text-white",
          className,
        )}
        initial={{ opacity: 0, y: 5, filter: "blur(5px)", scale: 0.9 }}
        animate={{
          opacity: isToastVisible ? 1 : 0,
          y: isToastVisible ? 0 : 5,
          filter: isToastVisible ? "blur(0px)" : "blur(5px)",
          scale: isToastVisible ? 1 : 0.9,
        }}
        transition={{ ease: "easeInOut", duration: 0.15 }}
      >
        <span>{text}</span>
      </motion.div>

      {children}
    </div>
  );
}
