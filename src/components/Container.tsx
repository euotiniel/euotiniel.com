import React from "react";

type ContainerProps = {
  children: React.ReactNode;
};

export default function Container({ children }: ContainerProps) {
  return (
    <section className="container mt-12 px-5 md:px-20 lg:px-56 xl:px-80 flex flex-col gap-3">
      {children}
    </section>
  );
}