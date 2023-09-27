import React from "react";

type SubtitleProps = {
  children: React.ReactNode;
};

export default function Subtitle({ children }: SubtitleProps) {
  return (
    <h2 className="mt-10 border-b pb-2 text-[20px] sm:text-[19px] md:text-[28px] lg:text-[32px] xl:text-[30px] font-bold tracking-tight transition-colors first:mt-0">
      {children}
    </h2>
  );
}