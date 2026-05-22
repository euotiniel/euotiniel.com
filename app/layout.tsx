import cn from "clsx";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const sans = localFont({
  src: "./_fonts/InterVariable.woff2",
  variable: "--sans",
  display: "swap",
});

const mono = localFont({
  src: "./_fonts/IosevkaFixedCurly-ExtendedMedium.woff2",
  variable: "--mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "%s",
    default: "Otoniel Emanuel",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt">
      <body
        className={cn(
          sans.variable,
          mono.variable,
          "text-14 leading-6 sm:text-[15px] sm:leading-7 md:text-base md:leading-7",
          "text-rurikon-600",
        )}
      >
        {children}
      </body>
    </html>
  );
}