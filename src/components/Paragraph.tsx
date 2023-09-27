import React from "react";

type ParagraphProps = {
  children: React.ReactNode;
};

export default function Paragraph({ children }: ParagraphProps) {
  return (
    <p className="leading-7 tracking-wide [&:not(:first-child)]:mt-6">
      {children}
    </p>
  );
}