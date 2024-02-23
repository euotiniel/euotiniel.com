import "./globals.css";
import type { Metadata } from "next";
import React, { ReactNode } from "react";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/src/components/ThemeProvider";
import { Toaster } from "@/src/components/ui/toaster";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

interface RootLayoutProps {
  children: ReactNode;
}
export const metadata: Metadata = {
  metadataBase: new URL("https://euotiniel.com/"),
  title: { default: "Otoniel Emanuel", template: "" },
  description: "Aspirante a desenvolvedor de software",
  openGraph: {
    title: "Otoniel Emanuel",
    description: "Aspirante a desenvolvedor de software",
    url: "https://euotiniel.com/",
    siteName: "Otoniel Emanuel",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "Otoniel Emanuel",
    card: "summary_large_image",
  },
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="pt-PT">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
          <Analytics />
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  );
}
