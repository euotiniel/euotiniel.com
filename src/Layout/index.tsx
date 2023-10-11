"use client";

import Container from "@/src/components/Container";
import Header from "@/src/components/Header";
import Footer from "@/src/components/Footer";
import { IPadCursorProvider, useIPadCursor } from "ipad-cursor/react";
import type { IpadCursorConfig } from "ipad-cursor";


export default function Layout({ children }: { children: React.ReactNode }) {
  const config: IpadCursorConfig = {};
  useIPadCursor();
  return (
    
    <IPadCursorProvider config={config}>
    <Container>
      <Header />
      <div className="my-12">{children}</div>
      <Footer />
    </Container>
    </IPadCursorProvider>
  );
}


