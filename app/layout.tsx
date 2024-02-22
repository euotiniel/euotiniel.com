"use client";
import "./globals.css";
import React, { ReactNode } from "react";
import { IPadCursorProvider, useIPadCursor } from "ipad-cursor/react";
import type { IpadCursorConfig } from "ipad-cursor";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/src/components/ThemeProvider";
import { MDXProvider } from "@mdx-js/react";
import { Toaster } from "@/src/components/ui/toaster"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from '@vercel/analytics/react';

interface RootLayoutProps {
  children: ReactNode;
}

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: RootLayoutProps) {
  const config: IpadCursorConfig = {};
  useIPadCursor();
  return (
    <html lang="pt">
      <body className={inter.className}>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <IPadCursorProvider config={config}>
            <MDXProvider>{children}</MDXProvider>
            <Toaster />
            <Analytics />
            <SpeedInsights />
          </IPadCursorProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
