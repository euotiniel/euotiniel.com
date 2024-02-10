"use client";
import "./globals.css";
import { IPadCursorProvider, useIPadCursor } from "ipad-cursor/react";
import type { IpadCursorConfig } from "ipad-cursor";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/src/components/ThemeProvider";
import { MDXProvider } from "@mdx-js/react";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const config: IpadCursorConfig = {};
  useIPadCursor();
  return (
    <html lang="pt">
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
