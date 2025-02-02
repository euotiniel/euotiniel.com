"use client";

import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { icon } from "@/icons";

const buttonCopy = {
  initial: {
    text: "Submit form",
    icon: "",
    sty: "to-blue-500 from-blue-600",
  },
  loading: {
    text: "Waiting...",
    icon: <icon.Spinner />,
    sty: "bg-blue-600/80",
  },
  success: {
    text: "Done!",
    icon: <CheckIcon />,
    sty: "to-green-500 from-green-600",
  },
};

type ButtonStateKey = "initial" | "loading" | "success";

interface ButtonCopy {
  text: string | any;
  sty: string;
  icon?: string;
}

export default function SmoothButton() {
  const [buttonState, setButtonState] = useState<ButtonStateKey>("initial");

  return (
      <button
        className={`${buttonCopy[buttonState].sty} text-sm font-semibold bg-gradient-to-t text-neutral-100 h-8 w-[140px] rounded-lg`}
        disabled={buttonState === "loading"}
        onClick={() => {
          if (buttonState === "success") return;

          setButtonState("loading");

          setTimeout(() => {
            setButtonState("success");
          }, 2500);

          setTimeout(() => {
            setButtonState("initial");
          }, 5500);
        }}
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            transition={{ type: "spring", duration: 0.6, bounce: 0.1 }}
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 9 }}
            key={buttonState}
            className="flex flex-row items-center justify-center gap-1.5 text-sm font-medium h-full"
          >
            {buttonCopy[buttonState].icon}
            {buttonCopy[buttonState].text}
          </motion.span>
        </AnimatePresence>
      </button>
  );
}

function CheckIcon() {
  return (
    <Image src="/images/check.png" alt="Check icon" height={16} width={16} />
  );
}

function LoaderIcon() {
  return (
    <div className="animate-spin360">
        <Image src="/images/loader.png" alt="Check icon" height={16} width={16} />
    </div>
  );
}
