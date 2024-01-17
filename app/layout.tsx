"use client"
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/src/components/ThemeProvider";
import { MDXProvider } from '@mdx-js/react';

const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
          <MDXProvider>
          {children}
          </MDXProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
