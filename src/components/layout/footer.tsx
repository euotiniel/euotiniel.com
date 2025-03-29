'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
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
    <footer className="my-8 flex flex-col items-center justify-between text-neutral-600 dark:text-neutral-400 md:my-14 md:flex-row">
      <div className="mt-9 sm:mb-3">
        <small className="text-xs leading-none">
          2025 &copy;{' '}
          <Link olink="https://twitter.com/euotiniel">euotiniel</Link>
        </small>
      </div>
      <div className="mt-4 flex items-center text-center">
        <div className="mr-2 h-2 w-2 animate-pulse rounded-full bg-green-500 dark:bg-green-700"></div>
        <div>
          <motion.p className="text-xs">
            conectado há{' '}
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
