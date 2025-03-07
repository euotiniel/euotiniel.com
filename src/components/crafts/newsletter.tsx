'use client'

import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Spinner } from '@/icons/spinner'
import HeaderDetails from '@/components/layout/header-details'
import Preview from '@/components/layout/preview'
import { toast } from 'sonner'

const buttonCopy = {
  initial: { text: 'Subscribe now' },
  loading: { text: <Spinner size="h-[13px] w-[13px]" /> },
  success: { text: 'Success!' },
}

type ButtonStateKey = 'initial' | 'loading' | 'success'

export default function Newsletter() {
  const [key, setKey] = useState('')
  const [isVisible, setIsVisible] = useState(false)
  const [buttonState, setButtonState] = useState<ButtonStateKey>('initial')

  useEffect(() => {
    if (buttonState === 'success') {
      setTimeout(() => {
        setIsVisible(true)
      }, 2000)
    }
  }, [buttonState])

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setIsVisible(false)
      }, 2500)
      return () => clearTimeout(timer)
    }
  }, [isVisible])

  return (
    <main className="py-6">
      <HeaderDetails title="Newsletter" date="Fev, 2025" />
      <article className="mt-10 max-w-none">
      <p className="text-[14.5px] leading-7 text-neutral-600 dark:text-neutral-400 [&:not(:first-child)]:mt-6">          Desenvolvi este componente para minha newsletter, e a ideia era
          integrar um aviso no mesmo card, mas de uma forma mais diferente e
          minimalista. O detalhe que mais me conquistou foi esse laranja, que dá
          um toque especial ao design.
        </p>

        <Preview height="400px">
          <motion.div className="mx-auto max-w-[400px] space-y-4 rounded-[10px] border border-neutral-950/10 bg-[#1A1A1A] p-2 shadow-md">
            <motion.div className="flex flex-col gap-2 overflow-hidden rounded-[9px] border border-neutral-800 bg-[#1F1F1F]">
              <div className="flex flex-col gap-2 px-3 pt-3">
                <h3 className="mb-1 text-sm font-semibold text-neutral-300">
                  Sign up for my newsletter
                </h3>
                <span className="text-[13px] text-neutral-400">
                  Get the latest updates, insights, and exclusive content—sign
                  up for my{' '}
                  <span className="text-orange-800 line-through">
                    newsletter
                  </span>
                  . today!
                </span>
                <input
                  className="border-neutral-700/35 w-full rounded-md border bg-transparent px-2 py-[7px] text-xs text-neutral-200 outline-none placeholder:text-neutral-500/40 focus:border-neutral-100/10"
                  type="text"
                  value={key}
                  onChange={(e) => setKey(e.target.value)}
                  placeholder="exemple@euotiniel.com"
                />
                <div className="flex justify-end gap-2 pb-2">
                  <button className="h-6 rounded-md px-2 text-xs text-neutral-200 transition-all duration-200 ease-in hover:bg-[#1A1A1A]">
                    Cancel
                  </button>
                  <button
                    className={`h-6 w-28 rounded-md border border-orange-500 bg-gradient-to-t from-orange-700 to-orange-600 text-xs text-neutral-200 transition-all duration-200 ease-in 
                ${key ? 'bg-gradient-to-t ' : 'cursor-not-allowed opacity-40'}`}
                    disabled={!key}
                    onClick={() => {
                      if (buttonState === 'success') return
                      setKey('')
                      setButtonState('loading')
                      setTimeout(() => setButtonState('success'), 2800)
                      setTimeout(() => setButtonState('initial'), 5500)
                    }}
                  >
                    <AnimatePresence mode="wait" initial={false}>
                      <motion.span
                        transition={{
                          type: 'spring',
                          duration: 0.2,
                          bounce: 0.1,
                        }}
                        initial={{ opacity: 0, y: -4 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 9 }}
                        key={buttonState}
                        className="flex h-full flex-row items-center justify-center gap-1.5"
                      >
                        {buttonCopy[buttonState].text}
                      </motion.span>
                    </AnimatePresence>
                  </button>
                </div>
              </div>

              <AnimatePresence>
                {isVisible && (
                  <motion.div
                    layout
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 1 }}
                    transition={{
                      opacity: { duration: 0.2 },
                      height: { duration: 0.4, ease: 'easeInOut' },
                    }}
                    className="overflow-hidden"
                  >
                    <div className="w-full bg-[#1A1A1A] p-3">
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ delay: 0.2, duration: 0.3 }}
                        className="flex rounded-md border border-orange-500/10 bg-orange-500/5 px-2 py-[9.5px]"
                      >
                        <p className="text-xs text-orange-100">
                          Thank you! You&apos;re now subscribed. Stay tuned for
                          updates!
                        </p>
                      </motion.div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </motion.div>
        </Preview>
      </article>
    </main>
  )
}
