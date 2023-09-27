import React from "react";

type ContainerProps = {
  children: React.ReactNode;
};

export default function Container({ children }: ContainerProps) {
  return (
    <section className="container mt-10 md:mt-20 lg:mt-32px  px-1 md:px-3 lg:px-80 flex flex-col gap-3">
      {children}
    </section>
  );
}