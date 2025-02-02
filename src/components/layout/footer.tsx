"use client";

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Link from "@/components/links";
import { calculateTimeElapsed } from '@/lib/timeUtils';

export default function Footer() {
  const [timeElapsed, setTimeElapsed] = useState('');
  const [timeUnit, setTimeUnit] = useState('');

  useEffect(() => {
    const storedStartTime = sessionStorage.getItem('startTime');
    const currentTime = new Date().getTime();

    const startTime = storedStartTime ? parseInt(storedStartTime, 10) : currentTime;
    if (!storedStartTime) {
      sessionStorage.setItem('startTime', currentTime.toString());
    }

    const updateTime = () => {
      const elapsedTime = calculateTimeElapsed(startTime);
      const newTimeUnit = getTimeUnit(elapsedTime);
      setTimeElapsed(elapsedTime);
      setTimeUnit(newTimeUnit);
    };

    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  const getTimeUnit = (elapsedTime) => {
    const [unit] = elapsedTime.split(' ');
    return unit;
  };

  return (
    <footer className="flex flex-col md:flex-row items-center justify-between my-8 md:my-14 text-neutral-600 dark:text-neutral-400">
      <div className="mt-9 sm:mb-3">
        <small className="text-xs leading-none">
          2025 &copy;{" "}
          <Link olink="https://twitter.com/euotiniel">euotiniel</Link>
        </small>
      </div>
      <div className="mt-4 flex items-center text-center">
      <div className="mr-2 h-2 w-2 rounded-full bg-green-300 dark:bg-green-800 animate-pulse"></div>
        <div>
          <motion.p className="text-xs">
            há{' '}
            <motion.span
              key={timeElapsed}
              initial={{ opacity: 0, filter: 'blur(4px)' }}
              animate={{ opacity: 1, filter: 'blur(0px)' }}
              transition={{ duration: 0.4 }}
            >
              {timeElapsed}
            </motion.span>
          </motion.p>
        </div>
      </div>
    </footer>
  );
}
