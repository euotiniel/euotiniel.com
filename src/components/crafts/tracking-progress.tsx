"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeftIcon } from "@/icons/arrow-left";
import HeaderDetails from "@/components/layout/header-details";
import Preview from "@/components/layout/preview";

export default function TrackingProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [title, setTitle] = useState("Tracking progress");
  const [isVisible, setIsVisible] = useState(false);

  const titles = [
    { id: "intro", label: "Introduction" },
    { id: "explore", label: "Exploring the Topic" },
    { id: "critical", label: "Critical Analysis" },
    { id: "conclusion", label: "Conclusion" },
  ];

  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout;

    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;
      const progress = (scrollTop / (scrollHeight - clientHeight)) * 100;
      setScrollProgress(progress);
      const middleOfScreen = window.innerHeight / 2 + 150;

      // Update the title based on the section in view
      titles.forEach((section) => {
        const sectionElement = document.getElementById(section.id);
        if (sectionElement) {
          const { top, bottom } = sectionElement.getBoundingClientRect();
          if (top <= middleOfScreen && bottom >= 0) {
            setTitle(section.label);
          }
        }
      });

      // Hide the arrow when the user is scrolling
      if (scrollTop <= 4) {
        setIsVisible(false);
        setTitle("Tracking progress");
      }

      // If there's no movement after 1 second, show the arrow
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        if (scrollTop > 4) {
          setIsVisible(true);
        }
      }, 100);
    };

    window.addEventListener("scroll", updateProgress);
    return () => {
      window.removeEventListener("scroll", updateProgress);
      clearTimeout(scrollTimeout);
    };
  }, []);

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <div>
      {/* Progress Bar */}
      <motion.div className="absolute top-8 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3 bg-white border px-3 py-[6px] shadow-sm rounded-full">
        <div className="relative w-8 h-8">
          <svg viewBox="0 0 32 32">
            <circle
              className="text-neutral-100"
              strokeWidth="2"
              stroke="currentColor"
              fill="transparent"
              r="14"
              cx="16"
              cy="16"
            />
            <motion.circle
              className="text-neutral-500"
              strokeWidth="2"
              strokeDasharray={87.96}
              strokeDashoffset={87.96 * (1 - scrollProgress / 100)}
              strokeLinecap="round"
              stroke="currentColor"
              fill="transparent"
              r="14"
              cx="16"
              cy="16"
              animate={{ strokeDashoffset: 87.96 * (1 - scrollProgress / 100) }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            />
            <text
              x="16"
              y="16"
              className="text-[9px] text-neutral-500"
              dominantBaseline="central"
              textAnchor="middle"
              fill="currentColor"
            >
              {Math.round(scrollProgress)}%
            </text>
          </svg>
        </div>

        <AnimatePresence mode="wait">
          <motion.span
            key={title}
            transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            initial={{ width: 140, filter: "blur(4px)" }}
            animate={{ width: "auto", filter: "blur(0px)" }}
            exit={{ width: 140, filter: "blur(4px)" }}
            className="text-sm text-gray-600 truncate select-none"
          >
            {title}
          </motion.span>
        </AnimatePresence>

        {/* Icon visible only when `isVisible` is active */}
        <AnimatePresence>
          {isVisible && (
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: "auto", opacity: 1 }}
              exit={{ width: 0, opacity: 0 }}
              transition={{ ease: [0.25, 0.1, 0.25, 1] }}
              className="flex items-center overflow-hidden cursor-pointer"
              onClick={scrollToTop}
            >
              <span className="text-sm text-gray-200 mx-2">|</span>
              <motion.div
                transition={{ type: "spring", duration: 1, bounce: 0.1 }}
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -9 }}
              >
                <div className="rounded-full border-transparent text-secondary-foreground hover:bg-neutral-100/50 opacity-40 rotate-90">
                  <ArrowLeftIcon />
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Simulated long article */}
      <div className="py-60 flex flex-col w-full max-w-[540px] gap-6 px-4 font-mono">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">Tracking progress</h1>
          <p className="mb-8 text-[14.5px] leading-7 text-neutral-700 [&:not(:first-child)]:mt-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius, nunc vel tincidunt tincidunt, libero risus dictum nunc, vel
            faucibus orci mi id sapien. Sed posuere mi vel ligula interdum, ac
            pretium nunc vulputate. Phasellus id eros sit amet justo volutpat
            lacinia vel ut arcu.
          </p>
          <p className="mb-8 text-[14.5px] leading-7 text-neutral-700 [&:not(:first-child)]:mt-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius, nunc vel tincidunt tincidunt, libero risus dictum nunc, vel
            faucibus orci mi id sapien. Sed posuere mi vel ligula interdum, ac
            pretium nunc vulputate. Phasellus id eros sit amet justo volutpat
            lacinia vel ut arcu.
          </p>
          <p className="mb-8 text-[14.5px] leading-7 text-neutral-700 [&:not(:first-child)]:mt-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius, nunc vel tincidunt tincidunt, libero risus dictum nunc, vel
            faucibus orci mi id sapien. Sed posuere mi vel ligula interdum, ac
            pretium nunc vulputate. Phasellus id eros sit amet justo volutpat
            lacinia vel ut arcu.
          </p>

          <h2 id="intro" className="text-2xl font-semibold mt-10 mb-4">
            Introduction
          </h2>
          <p className="mb-8 text-[14.5px] leading-7 text-neutral-700 [&:not(:first-child)]:mt-6">
            Integer euismod, est in eleifend euismod, elit arcu tincidunt lacus,
            nec dapibus metus felis non est. Quisque varius quam id nunc
            venenatis, vel congue magna fermentum. Curabitur convallis quam at
            turpis bibendum, et viverra odio tempor.
          </p>
          <p className="mb-8 text-[14.5px] leading-7 text-neutral-700 [&:not(:first-child)]:mt-6">
            Integer euismod, est in eleifend euismod, elit arcu tincidunt lacus,
            nec dapibus metus felis non est. Quisque varius quam id nunc
            venenatis, vel congue magna fermentum. Curabitur convallis quam at
            turpis bibendum, et viverra odio tempor.
          </p>
          <p className="mb-8 text-[14.5px] leading-7 text-neutral-700 [&:not(:first-child)]:mt-6">
            Integer euismod, est in eleifend euismod, elit arcu tincidunt lacus,
            nec dapibus metus felis non est. Quisque varius quam id nunc
            venenatis, vel congue magna fermentum. Curabitur convallis quam at
            turpis bibendum, et viverra odio tempor.
          </p>

          <h2 id="explore" className="text-2xl font-semibold mt-10 mb-4">
            Exploring the Topic
          </h2>
          <p className="mb-8 text-[14.5px] leading-7 text-neutral-700 [&:not(:first-child)]:mt-6">
            Nulla tincidunt tellus ut ex hendrerit, sed facilisis nunc
            tincidunt. Duis vestibulum justo at quam lacinia. Maecenas imperdiet
            orci a massa sodales, vel volutpat felis auctor. Fusce ultricies
            elit sit amet diam porttitor, id lobortis ipsum aliquet.
          </p>
          <p className="mb-8 text-[14.5px] leading-7 text-neutral-700 [&:not(:first-child)]:mt-6">
            Nulla tincidunt tellus ut ex hendrerit, sed facilisis nunc
            tincidunt. Duis vestibulum justo at quam lacinia. Maecenas imperdiet
            orci a massa sodales, vel volutpat felis auctor. Fusce ultricies
            elit sit amet diam porttitor, id lobortis ipsum aliquet.
          </p>
          <p className="mb-8 text-[14.5px] leading-7 text-neutral-700 [&:not(:first-child)]:mt-6">
            Nulla tincidunt tellus ut ex hendrerit, sed facilisis nunc
            tincidunt. Duis vestibulum justo at quam lacinia. Maecenas imperdiet
            orci a massa sodales, vel volutpat felis auctor. Fusce ultricies
            elit sit amet diam porttitor, id lobortis ipsum aliquet.
          </p>

          <h2 id="critical" className="text-2xl font-semibold mt-10 mb-4">
            Critical Analysis
          </h2>
          <p className="mb-8 text-[14.5px] leading-7 text-neutral-700 [&:not(:first-child)]:mt-6">
            Aliquam erat volutpat. Sed convallis magna sed purus euismod, non
            dapibus elit faucibus. Integer in feugiat lectus, ut viverra tortor.
            Cras tristique lacinia lorem sit amet fermentum. Sed placerat
            suscipit magna, sit amet tincidunt ligula.
          </p>
          <p className="mb-8 text-[14.5px] leading-7 text-neutral-700 [&:not(:first-child)]:mt-6">
            Aliquam erat volutpat. Sed convallis magna sed purus euismod, non
            dapibus elit faucibus. Integer in feugiat lectus, ut viverra tortor.
            Cras tristique lacinia lorem sit amet fermentum. Sed placerat
            suscipit magna, sit amet tincidunt ligula.
          </p>
          <p className="mb-8 text-[14.5px] leading-7 text-neutral-700 [&:not(:first-child)]:mt-6">
            Aliquam erat volutpat. Sed convallis magna sed purus euismod, non
            dapibus elit faucibus. Integer in feugiat lectus, ut viverra tortor.
            Cras tristique lacinia lorem sit amet fermentum. Sed placerat
            suscipit magna, sit amet tincidunt ligula.
          </p>

          <h2 id="conclusion" className="text-2xl font-semibold mt-10 mb-4">
            Conclusion
          </h2>
          <p className="mb-8 text-[14.5px] leading-7 text-neutral-700 [&:not(:first-child)]:mt-6">
            Morbi et orci vitae risus efficitur maximus. Duis ac tincidunt mi.
            Integer vel luctus libero, et eleifend enim. Pellentesque lacinia
            augue vel augue suscipit, a tempor mi congue. Vivamus auctor mi id
            nibh facilisis, vel venenatis metus euismod.
          </p>
          <p className="mb-8 text-[14.5px] leading-7 text-neutral-700 [&:not(:first-child)]:mt-6">
            Morbi et orci vitae risus efficitur maximus. Duis ac tincidunt mi.
            Integer vel luctus libero, et eleifend enim. Pellentesque lacinia
            augue vel augue suscipit, a tempor mi congue. Vivamus auctor mi id
            nibh facilisis, vel venenatis metus euismod.
          </p>
          <p className="mb-8 text-[14.5px] leading-7 text-neutral-700 [&:not(:first-child)]:mt-6">
            Morbi et orci vitae risus efficitur maximus. Duis ac tincidunt mi.
            Integer vel luctus libero, et eleifend enim. Pellentesque lacinia
            augue vel augue suscipit, a tempor mi congue. Vivamus auctor mi id
            nibh facilisis, vel venenatis metus euismod.
          </p>
        </div>
      </div>
    </div>
  );
}
