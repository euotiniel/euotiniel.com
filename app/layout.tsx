import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/src/components/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://euotiniel.com/'),
  title: {
    default: 'Otoniel Emanuel',
    template: '%s | Otoniel Emanuel',
  },
  description: 'Aspirante a desenvolvedor de software',
  openGraph: {
    title: 'Otoniel Emanuel',
    description: 'Aspirante a desenvolvedor de software',
    url: 'https://euotiniel.com/',
    siteName: 'Otoniel Emanuel',
    locale: 'pt_PT',
    type: 'website',
  },
   robots: {
     index: true,
     follow: true,
     googleBot: {
       index: true,
       follow: true,
       'max-video-preview': -1,
       'max-image-preview': 'large',
       'max-snippet': -1,
     },
   },
  twitter: {
    title: 'Otoniel Emanuel',
    card: 'summary_large_image',
  },
};
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
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
