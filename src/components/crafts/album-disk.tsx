"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import type { SVGProps } from "react";

export default function Disk() {
  const [isClicked, setIsClicked] = useState(false);

  const show = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div className="flex flex-col items-center justify-center gap-8 min-h-[500px]">
      <div className="relative flex items-center justify-center">
        <motion.div
          layout
          transition={{ type: "spring" }}
          initial={{ filter: "blur(5px)" }}
          animate={{
            filter: isClicked ? "blur(3px)" : "blur(0px)",
            rotate: isClicked ? 10 : 0,
            x: isClicked ? -140 : 0,
            y: isClicked ? -15 : 0,
            scale: 1,
          }}
          className="w-60 h-56 shadow-lg overflow-hidden relative group z-10 rounded-md shadow-neutral-800 cursor-pointer"
          onClick={show}
        >
          <img
            src="/images/bg.png"
            alt="Album cover background"
            className="absolute inset-0 w-full h-full object-cover filter grayscale"
          />
          <motion.div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/30 to-black/70 group-hover:from-black/0 group-hover:via-black/20 group-hover:to-black/60 transition-opacity duration-300"></motion.div>
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
              backgroundSize: "150px",
            }}
          />
          <div className="relative h-full flex flex-col justify-end p-6 text-neutral-100">
            
            <p className="text-sm opacity-90 drop-shadow-md select-none">
              The big GOAT
            </p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 0, y: 0 }}
          animate={{
            opacity: 1,
            filter: "blur(0px)",
          }}
          exit={{
            opacity: 0,
            filter: "blur(5px)",
            transition: { duration: 0.6 },
          }}
          className={`absolute -mb-7 w-40 h-40 rounded-full overflow-hidden transition-transform duration-500 hover:rotate-12 group shadow-xl`}
        >
          <div className="w-full h-full rounded-full flex items-center justify-center relative bg-black">
            <div
              className="absolute inset-0 rounded-full"
              style={{
                background:
                  "radial-gradient(circle at 20% 20%, rgba(60, 60, 60, 0.5) 0%, rgba(30, 30, 30, 0.5) 20%, rgba(0, 0, 0, 0.5) 50%)",
                boxShadow: "inset 0 0 20px rgba(255, 255, 255, 0.2)",
              }}
            ></div>
            <div
              className="absolute inset-0 rounded-full opacity-40"
              style={{
                background:
                  "repeating-radial-gradient(circle at center, #333, #333 1px, transparent 1px, transparent 4px)",
              }}
            ></div>
            <div className="w-20 h-20 rounded-full bg-neutral-600 flex items-center justify-center overflow-hidden">
              <div className="w-8 h-8 rounded-full bg-white"></div>
            </div>
          </div>
        </motion.div>
      </div>
      <motion.div
        layout
        transition={{ type: "spring", stiffness: 250, damping: 20 }}
        initial={{ opacity: 0, y: -100 }}
        animate={{
          opacity: isClicked ? 1 : 0,
          y: isClicked ? 30 : -100,
        }}
        exit={{ opacity: 0, y: 30 }}
        className=" -mt-10 max-w-[360px] flex flex-col items-center justify-center gap-y-3"
      >
        <h3 className="text-lg text-neutral-700 font-semibold">The big GOAT</h3>
        <span className="text-sm text-neutral-500 font-semibold">
          Release date: October 30, 2024
        </span>
        <button className="flex items-center gap-3 rounded-lg bg-neutral-900 px-6 py-2.5 text-sm font-medium text-neutral-200 shadow-sm">
          <AppleMusic /> Add to Apple Music
        </button>
        <span className="text-xs text-neutral-400 text-center">
          The latest exploration of The Big Goat, a journey immersed in tones
          and textures that explore the beauty of the simple.
        </span>
      </motion.div>
    </div>
  );
}


const AppleMusic = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    viewBox="0 0 361 361"
    width="1.2em"
    height="1.2em"
    {...props}
  >
    <linearGradient
      id="a"
      x1={180}
      x2={180}
      y1={358.605}
      y2={7.759}
      gradientUnits="userSpaceOnUse"
    >
      <stop
        offset={0}
        style={{
          stopColor: "#fa233b",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#fb5c74",
        }}
      />
    </linearGradient>
    <path
      d="M360 112.61c0-4.3 0-8.6-.02-12.9-.02-3.62-.06-7.24-.16-10.86-.21-7.89-.68-15.84-2.08-23.64-1.42-7.92-3.75-15.29-7.41-22.49a75.633 75.633 0 0 0-33.06-33.05c-7.19-3.66-14.56-5.98-22.47-7.41C287 .86 279.04.39 271.15.18c-3.62-.1-7.24-.14-10.86-.16-4.3-.02-8.6-.02-12.9-.02H112.61c-4.3 0-8.6 0-12.9.02-3.62.02-7.24.06-10.86.16C80.96.4 73 .86 65.2 2.27c-7.92 1.42-15.28 3.75-22.47 7.41A75.633 75.633 0 0 0 9.67 42.73c-3.66 7.2-5.99 14.57-7.41 22.49C.86 73.02.39 80.98.18 88.86.08 92.48.04 96.1.02 99.72 0 104.01 0 108.31 0 112.61v134.77c0 4.3 0 8.6.02 12.9.02 3.62.06 7.24.16 10.86.21 7.89.68 15.84 2.08 23.64 1.42 7.92 3.75 15.29 7.41 22.49a75.633 75.633 0 0 0 33.06 33.05c7.19 3.66 14.56 5.98 22.47 7.41 7.8 1.4 15.76 1.87 23.65 2.08 3.62.1 7.24.14 10.86.16 4.3.03 8.6.02 12.9.02h134.77c4.3 0 8.6 0 12.9-.02 3.62-.02 7.24-.06 10.86-.16 7.89-.21 15.85-.68 23.65-2.08 7.92-1.42 15.28-3.75 22.47-7.41a75.633 75.633 0 0 0 33.06-33.05c3.66-7.2 5.99-14.57 7.41-22.49 1.4-7.8 1.87-15.76 2.08-23.64.1-3.62.14-7.24.16-10.86.03-4.3.02-8.6.02-12.9V112.61z"
      style={{
        fillRule: "evenodd",
        clipRule: "evenodd",
        fill: "url(#a)",
      }}
    />
    <path
      d="M254.5 55c-.87.08-8.6 1.45-9.53 1.64l-107 21.59-.04.01c-2.79.59-4.98 1.58-6.67 3-2.04 1.71-3.17 4.13-3.6 6.95-.09.6-.24 1.82-.24 3.62v133.92c0 3.13-.25 6.17-2.37 8.76s-4.74 3.37-7.81 3.99l-6.99 1.41c-8.84 1.78-14.59 2.99-19.8 5.01-4.98 1.93-8.71 4.39-11.68 7.51-5.89 6.17-8.28 14.54-7.46 22.38.7 6.69 3.71 13.09 8.88 17.82 3.49 3.2 7.85 5.63 12.99 6.66 5.33 1.07 11.01.7 19.31-.98 4.42-.89 8.56-2.28 12.5-4.61 3.9-2.3 7.24-5.37 9.85-9.11 2.62-3.75 4.31-7.92 5.24-12.35.96-4.57 1.19-8.7 1.19-13.26V142.81c0-6.22 1.76-7.86 6.78-9.08 0 0 88.94-17.94 93.09-18.75 5.79-1.11 8.52.54 8.52 6.61v79.29c0 3.14-.03 6.32-2.17 8.92-2.12 2.59-4.74 3.37-7.81 3.99l-6.99 1.41c-8.84 1.78-14.59 2.99-19.8 5.01-4.98 1.93-8.71 4.39-11.68 7.51-5.89 6.17-8.49 14.54-7.67 22.38.7 6.69 3.92 13.09 9.09 17.82 3.49 3.2 7.85 5.56 12.99 6.6 5.33 1.07 11.01.69 19.31-.98 4.42-.89 8.56-2.22 12.5-4.55 3.9-2.3 7.24-5.37 9.85-9.11 2.62-3.75 4.31-7.92 5.24-12.35.96-4.57 1-8.7 1-13.26V64.46c.02-6.16-3.23-9.96-9.02-9.46z"
      style={{
        fillRule: "evenodd",
        clipRule: "evenodd",
        fill: "#fff",
      }}
    />
  </svg>
);
