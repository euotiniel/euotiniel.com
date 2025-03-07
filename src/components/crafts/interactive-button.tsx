'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Spinner } from '@/icons/spinner'
import CircleDone from '@/icons/circle-done'
import HeaderDetails from '@/components/layout/header-details'
import Preview from '@/components/layout/preview'

const buttonCopy = {
  initial: {
    text: 'Submit form',
    icon: '',
    sty: 'to-blue-500 from-blue-600',
  },
  loading: {
    text: 'Waiting...',
    icon: <Spinner size="h-[16px] w-[16px]" />,
    sty: 'bg-blue-600',
  },
  success: {
    text: 'Done!',
    icon: <CircleDone />,
    sty: 'to-green-500 from-green-700',
  },
}

type ButtonStateKey = 'initial' | 'loading' | 'success'

interface ButtonCopy {
  text: string | any
  sty: string
  icon?: string
}

export default function SmoothButton() {
  const [buttonState, setButtonState] = useState<ButtonStateKey>('initial')

  return (
    <main className="py-6">
      <HeaderDetails title="Interactive button" date="Out, 2024" />
      <article className="mt-10 max-w-none">
        <p className="text-[14.5px] leading-7 text-neutral-600 dark:text-neutral-400 [&:not(:first-child)]:mt-6">
          {' '}
          Este componente foi de uma demonstração incrível do curso de Emil
          Kowalski. Desde então, tenho pensado em maneiras de melhorá-lo ainda
          mais. Adoro como ele responde às interações do usuário, trazendo um
          toque de fluidez e animação que faz toda a diferença. Este é, sem
          dúvida, um dos meus favoritos!
        </p>

        <Preview height="400px">
          <button
            className={`${buttonCopy[buttonState].sty} h-8 w-[120px] cursor-pointer rounded-md bg-gradient-to-t text-sm font-semibold text-neutral-100`}
            disabled={buttonState === 'loading'}
            onClick={() => {
              if (buttonState === 'success') return

              setButtonState('loading')

              setTimeout(() => {
                setButtonState('success')
              }, 2000)

              setTimeout(() => {
                setButtonState('initial')
              }, 4000)
            }}
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                transition={{ type: 'spring', duration: 0.3, bounce: 0.2 }}
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 9 }}
                key={buttonState}
                className="flex h-full flex-row items-center justify-center gap-1.5 font-sans text-[14.5px] font-medium"
              >
                {buttonCopy[buttonState].icon}
                {buttonCopy[buttonState].text}
              </motion.span>
            </AnimatePresence>
          </button>
        </Preview>
      </article>
    </main>
  )
}
