'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import Link from '@/components/links'
import { calculateTimeElapsed } from '@/lib/timeUtils'
import { calculateTimeElapsedStr } from '@/lib/strTimeUtils'

function AnimatedNumber({ value }: { value: string }) {
  const [prev, setPrev] = useState(value)

  useEffect(() => {
    setPrev(value)
  }, [value])

  // Separa número e unidade (ex: "20 min" => ["20", "min"])
  const match = value.match(/^(\d+)\s*(\w*)$/)
  const number = match ? match[1] : value
  const unit = match ? match[2] : ''

  return (
    <span className="inline-flex items-center">
      {number.split('').map((digit, idx) => (
        <span
          key={idx}
          className="relative w-[0.65em] h-[1em] inline-block overflow-hidden"
        >
          <AnimatePresence initial={false}>
            <motion.span
              key={digit + idx}
              initial={{ y: -12, opacity: 0, filter: 'blur(4px)' }}
              animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
              exit={{ y: 12, opacity: 0, filter: 'blur(4px)' }}
              transition={{
                y: { duration: 0.28, ease: [0.215, 0.61, 0.355, 1] },
                opacity: { duration: 0.22, ease: [0.215, 0.61, 0.355, 1] },
                filter: { duration: 0.22, ease: [0.215, 0.61, 0.355, 1] },
              }}
              className="absolute left-0 top-0 w-full text-xs"
              style={{ willChange: 'transform, opacity, filter' }}
            >
              {digit}
            </motion.span>
          </AnimatePresence>
        </span>
      ))}
      <span className="ml-0.5">{unit}</span>
    </span>
  )
}

export default function Footer() {
  const [timeElapsed, setTimeElapsed] = useState('')
  const [timeElapsedStr, setTimeElapsedStr] = useState('')
  const [timeUnit, setTimeUnit] = useState('')

  useEffect(() => {
    const storedStartTime = sessionStorage.getItem('startTime')
    const currentTime = new Date().getTime()

    const startTime = storedStartTime
      ? parseInt(storedStartTime, 10)
      : currentTime
    if (!storedStartTime) {
      sessionStorage.setItem('startTime', currentTime.toString())
    }

    const updateTime = () => {
      const elapsedTime = calculateTimeElapsed(startTime)
      const elapsedTimeSrt = calculateTimeElapsedStr(startTime)
      const newTimeUnit = getTimeUnit(elapsedTime)
      const newTimeUnitStr = getTimeUnitStr(elapsedTime)
      setTimeElapsed(elapsedTime)
      setTimeElapsedStr(elapsedTimeSrt)
      setTimeUnit(newTimeUnit)
      setTimeUnit(newTimeUnitStr)
    }

    const interval = setInterval(updateTime, 1000)

    return () => clearInterval(interval)
  }, [])

  const getTimeUnit = (elapsedTime) => {
    const [unit] = elapsedTime.split(' ')
    return unit
  }

  const getTimeUnitStr = (elapsedTimeStr) => {
    const [unit] = elapsedTimeStr.split(' ')
    return unit
  }

  return (
    <footer className="my-8 flex flex-col items-center justify-between text-neutral-600 dark:text-neutral-400 md:my-14 md:flex-row opacity-50">
      <div className="flex items-center gap-1.5 ">
        <span className="text-xs">Built by</span>
        <a
          target="_blank"
          href="https://x.com/euotiniel"
          className="hover:text-tertiary flex h-5 items-center gap-0.5 rounded-full bg-neutral-100 dark:bg-neutral-800 pr-1.5 pl-0.5 hover:bg-[#f0f0f0] text-xs"
        >
          <img
            src="https://github.com/euotiniel.png"
            alt="Logotipo Otoniel Emanuel"
            width={16}
            height={16}
            className="rounded-full outline-1 outline-black/5 dark:invert dark:opacity-50"
          />
          euotiniel
        </a>
      </div>
      <div className="mt-4 flex items-center text-center">
        <div className="mr-2 h-2 w-2 animate-pulse rounded-full bg-green-500 dark:bg-green-700"></div>
        <div>
          <motion.p className="text-xs">
            online{' '}
            <AnimatedNumber value={timeElapsed} />
            <motion.span
              key={timeElapsedStr}
              initial={{ opacity: 0, filter: 'blur(4px)' }}
              animate={{ opacity: 1, filter: 'blur(0px)' }}
              transition={{ duration: 0.4 }}
            >
              {timeElapsedStr}
            </motion.span>
          </motion.p>
        </div>
      </div>
    </footer>
  )
}
