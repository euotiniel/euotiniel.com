'use client'

import React, { useState, useEffect } from 'react'
import { MotionConfig, motion } from 'framer-motion'
import classNames from 'classnames'
import HeaderDetails from '@/components/layout/header-details'
import Preview from '@/components/layout/preview'

export default function AnimatedForm() {
  const [username, setUsername] = useState('')
  const [comment, setComment] = useState('')
  const [isSubmited, setIsSubmited] = useState(false)

  const handleSubmitUsername = async (event: React.FormEvent) => {
    event.preventDefault()
    if (!username) {
      return
    }
    setUsername('')
    setIsSubmited(true)
  }

  useEffect(() => {}, [isSubmited])

  const handleSubmitComment = async (event: React.FormEvent) => {
    event.preventDefault()
    if (!comment) {
      return
    }
    setComment('')
    setIsSubmited(false)
  }

  const formClass = classNames({
    'flex flex-row items-center gap-1 py-1 px-1': !isSubmited,
    'w-[280px] flex flex-col items-end gap-1 py-1 px-1 duration-500':
      isSubmited,
  })

  const inputClass = classNames(
    'p-1 text-xs rounded-md focus:outline-none w-[170px]',
    {
      hidden: isSubmited,
      block: !isSubmited,
    },
  )

  const textAreaClass = classNames(
    'p-1 w-full h-24 text-xs rounded-lg resize-none focus:outline-none mt-0.5',
    {
      hidden: !isSubmited,
      block: isSubmited,
    },
  )

  const TRANSITION = {
    type: 'spring',
    bounce: 0.05,
    duration: 0.3,
  }

  return (
    <main className="py-6">
      <HeaderDetails title="Animated Form" date="Aug, 2024" />
      <article className="mt-10 max-w-none">
      <p className="text-[14.5px] leading-7 text-neutral-600 dark:text-neutral-400 [&:not(:first-child)]:mt-6">          Aqui temos uma entrada interativa, que se expande dinamicamente para
          uma área de texto quando preenchida corretamente. O objetivo era criar
          uma experiência fluida e intuitiva.
        </p>

        <Preview height="400px">
          <MotionConfig transition={TRANSITION}>
            <motion.div
              layout
              className="rounded-lg bg-neutral-200 dark:bg-neutral-800"
            >
              <form
                onSubmit={
                  !isSubmited ? handleSubmitUsername : handleSubmitComment
                }
                className={formClass}
              >
                <motion.input
                  type="text"
                  placeholder="Type your username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  animate={{
                    opacity: isSubmited ? 0 : 1,
                    scale: isSubmited ? 0.95 : 1,
                  }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                  className={inputClass}
                />
                <motion.textarea
                  placeholder="Write a review"
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  animate={{
                    opacity: isSubmited ? 1 : 0,
                    scale: isSubmited ? 1 : 0.95,
                  }}
                  transition={{ duration: 0.3, delay: 0.4 }}
                  className={textAreaClass}
                />
                <motion.div layout>
                  <button
                    type="submit"
                    className="rounded-md bg-gradient-to-t from-gray-500 to-gray-400 px-5 py-1 text-xs text-neutral-50 duration-700 dark:from-gray-600 dark:to-gray-700"
                  >
                    Submit
                  </button>
                </motion.div>
              </form>
            </motion.div>
          </MotionConfig>
        </Preview>
      </article>
    </main>
  )
}
