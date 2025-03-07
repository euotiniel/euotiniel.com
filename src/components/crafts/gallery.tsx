'use client'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { MapPin, Aperture, Clock1 } from 'lucide-react'
import HeaderDetails from '@/components/layout/header-details'
import Preview from '@/components/layout/preview'

export default function Gallery() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <main className="py-6">
      <HeaderDetails title="Gallery (Challenge)" date="Aug, 2024" />
      <article className="mt-10 max-w-none">
        <p className="text-[14.5px] leading-7 text-neutral-600 dark:text-neutral-400 [&:not(:first-child)]:mt-6">
          {' '}
          Esse componente veio de um
          <Link
            href="https://x.com/wickedmishra/status/1828092758701342835/video/1"
            className="border-b border-neutral-700"
            target="_blank"
          >
            desafio que vi no Twitter (#buildshit)
          </Link>
          , postado por Preet. Foi um experimento divertido porque há muitas
          maneiras de obter esse efeito, mas decidi por essa abordagem na época.
          Talvez um dia eu o revise e faça melhorias.
        </p>

        <Preview height="500px">
          <div className="flex flex-col items-center justify-center">
            <div
              className="group relative h-[400px] w-[350px] overflow-hidden rounded-2xl"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div className="opacity-45 relative h-full w-full">
                <Image
                  src="/images/photo-buildshit1.avif"
                  alt="Image"
                  height={600}
                  width={350}
                  className="h-full transform object-cover transition-transform duration-300 ease-in-out group-hover:scale-y-125"
                />
              </div>
              <motion.div
                layout
                className={`absolute inset-x-0 bottom-0 z-50 bg-black/70 p-4 backdrop-blur-sm transition-all duration-300 ease-in-out ${
                  isHovered ? 'rounded-t-2xl backdrop-blur-xl' : ''
                }`}
              >
                <h3 className="text-lg font-semibold text-neutral-200">
                  Grigorii Shcheglov
                </h3>
                <p className="text-sm text-neutral-400">@shegiva on Unsplash</p>
                <AnimatePresence>
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{
                      opacity: isHovered ? 1 : 0,
                      height: isHovered ? 'auto' : 0,
                    }}
                    transition={{
                      duration: 0.2,
                      ease: 'easeInOut',
                    }}
                    className="overflow-hidden"
                  >
                    <div className="mt-5 flex select-none flex-col gap-2">
                      <span className="flex items-center gap-2 text-sm text-neutral-400">
                        <MapPin className="h-4 w-4" /> Bogliasco, Italy
                      </span>
                      <span className="flex items-center gap-2 text-sm text-neutral-400">
                        <Aperture className="h-4 w-4" /> FUJIFILM, X-T30 II
                      </span>
                      <span className="flex items-center gap-2 text-sm text-neutral-400">
                        <Clock1 className="h-4 w-4" /> November 11, 1987
                      </span>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </motion.div>
            </div>
          </div>
        </Preview>
      </article>
    </main>
  )
}
