'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from '@/components/links'
import { calculateTimeElapsed } from '@/lib/timeUtils'
import { calculateTimeElapsedStr } from '@/lib/strTimeUtils'

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
        <span className='text-xs'>Built by</span>
        <a
          target="_blank"
          href="https://x.com/smintfy"
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
            online {' '}
            <motion.span
              key={timeElapsed}
              initial={{ opacity: 0, filter: 'blur(4px)' }}
              animate={{ opacity: 1, filter: 'blur(0px)' }}
              transition={{ duration: 0.4 }}
            >
              {timeElapsed}
            </motion.span>
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
