import React from "react";

type ItalicProps = {
  children: React.ReactNode;
};

export default function Italic({ children }: ItalicProps) {
  return (
    <div className="italic border-l-[3px] p-3 text-gray-500 leading-7">
      {children}
    </div>
  );
}