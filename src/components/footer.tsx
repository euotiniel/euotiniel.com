"use client";

import { useEffect, useState } from 'react';
import Link from "@/components/links";
import { calculateTimeElapsed } from '@/lib/timeUtils';

export default function Footer() {
  const [timeElapsed, setTimeElapsed] = useState('');

  useEffect(() => {
    const startTime = new Date().getTime();

    const interval = setInterval(() => {
      setTimeElapsed(calculateTimeElapsed(startTime));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="flex flex-col md:flex-row items-center justify-between my-8 md:my-14 text-neutral-600 dark:text-neutral-400">
      <div className="mt-9 sm:mb-3">
        <small className="text-[13.5px] font-normal leading-none">
          2024 &copy;{" "}
          <Link olink="https://twitter.com/euotiniel">euotiniel</Link> . Hosted
          on <Link olink="https://vercel.com/"> ▲ </Link>{" "}
        </small>
      </div>
      <div className="mt-4 text-center">
        <p className="text-[13.5px]">
          Está ligado há {timeElapsed}
        </p>
      </div>
    </footer>
  );
}