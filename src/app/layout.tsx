import { ThemeProvider } from '@/app/providers'
import { WEBSITE_HOST_URL } from '@/lib/constants'
import type { Metadata } from 'next'
import './global.css'
import { Inter } from 'next/font/google'
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/react';
import { Toaster } from 'sonner'
import BlurTop from "@/components/layout/blur-top"
import BlurBottom from '@/components/layout/blur-bottom'

const meta = {
  title: 'Otoniel Emanuel',
  description:
    'front-end developer & ui designer',
  image: `${WEBSITE_HOST_URL}/og-preview.jpg`,
}

export const metadata: Metadata = {
  title: {
    default: meta.title,
    template: '%s - euotiniel',
  },
  keywords: [
    "Otoniel Emanuel",
    "Otoniel",
    "Emanuel",
    "euotiniel",
    "euotiniel.com",
    "UI Design",
    "Design Engineer",
    "Front-end Developer",
    "Frontend",
    "Developer",
    "Software",
    "Design",
    "Angola",
    "Luanda",
    "Vercel",
    "Next.js",
    "TailwindCSS",
    "Blog",
    "Open source",
  ],
  description: meta.description,
  openGraph: {
    title: meta.title,
    description: meta.description,
    url: WEBSITE_HOST_URL,
    siteName: meta.title,
    locale: 'en-US',
    type: 'website',
      
  },
  alternates: {
    canonical: WEBSITE_HOST_URL,
  },
}

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt">
      <body className={`overflow-y-auto h-[500px] scrollbar-custom ${inter.className}`}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <BlurTop />
          {children}
          <BlurBottom />
          <Toaster />
        </ThemeProvider>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  )
}
