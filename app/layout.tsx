"use client";
import "./globals.css";
import React, { ReactNode } from "react";
import { IPadCursorProvider, useIPadCursor } from "ipad-cursor/react";
import type { IpadCursorConfig } from "ipad-cursor";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/src/components/ThemeProvider";
import { MDXProvider } from "@mdx-js/react";

interface RootLayoutProps {
  children: ReactNode;
  title?: string;
}

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children, title }: RootLayoutProps) {
  const config: IpadCursorConfig = {};
  useIPadCursor();
  return (
    <html lang="pt">
      <head>
        <title>{title}</title>
      </head>
      <body className={inter.className}>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <IPadCursorProvider config={config}>
            <MDXProvider>{children}</MDXProvider>
          </IPadCursorProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
