import React from "react";

type SubtitleProps = {
  children: React.ReactNode;
};

export default function Subtitle({ children }: SubtitleProps) {
  return (
    <h2 className="mt-2 sm:mt-4 md:mt-6 lg:mt-8 xl:mt-10 pb-2 font-extrabold text-lg sm:text-lg md:text-lg lg:text-xl xl:text-xl tracking-tight first:mt-0">
      {children}
    </h2>
  );
}
