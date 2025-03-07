'use client'
import {
  PanInfo,
  motion,
  useAnimation,
  useMotionValue,
  useMotionValueEvent,
  useTransform,
} from 'framer-motion'
import { useRef, useState } from 'react'
import HeaderDetails from '@/components/layout/header-details'
import Preview from '@/components/layout/preview'

const menuItems = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

const angleIncrement = 360 / menuItems.length
const dragFactor = 0.01
const correctCombination = ['1', '2', '3']

export default function Vault() {
  const controls = useAnimation()
  const rotation = useMotionValue(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const [middleItem, setMiddleItem] = useState(menuItems[0])
  const [combination, setCombination] = useState<string[]>([])
  const [message, setMessage] = useState('')
  const [isSuccess, setIsSuccess] = useState(false)

  useMotionValueEvent(rotation, 'change', (value) => {
    const adjustedRotation = ((value % 360) + 360) % 360
    const middleIndex =
      Math.round(adjustedRotation / angleIncrement) % menuItems.length
    const actualMiddleItem =
      menuItems[(menuItems.length - middleIndex) % menuItems.length]
    setMiddleItem(actualMiddleItem)
  })

  const onDrag = (_: any, info: PanInfo) => {
    const currentRotation = rotation.get() + info.offset.y * dragFactor

    rotation.set(currentRotation)
  }

  const onDragEnd = (_: any, info: PanInfo) => {
    const endRotation = rotation.get() + info.velocity.y * dragFactor
    controls.start({
      rotate: endRotation,
      transition: { type: 'spring', mass: 0.1 },
    })
    updateCombination()
  }

  const updateCombination = () => {
    setCombination((prev) => {
      const newCombination = [...prev, middleItem]
      if (newCombination.length === correctCombination.length) {
        setTimeout(() => {
          if (
            JSON.stringify(newCombination) ===
            JSON.stringify(correctCombination)
          ) {
            setMessage('Safe opened successfully!')
            setIsSuccess(true)
          } else {
            setMessage('Incorrect combination, try again...')
            setIsSuccess(false)
          }
          setCombination([])
        }, 2000)
        return newCombination
      }
      return newCombination
    })
  }

  const transform = useTransform(rotation, (value) => {
    return `rotate(${value}deg)`
  })

  return (
    <main className="py-6">
      <HeaderDetails title="Virtual Vault" date="Aug, 2024" />
      <article className="mt-10 max-w-none">
      <p className="text-[14.5px] leading-7 text-neutral-600 dark:text-neutral-400 [&:not(:first-child)]:mt-6">          Um layout seguro e dinâmico para armazenar informações confidenciais,
          simulando a interface de um cofre digital. Este componente ainda
          precisa de muitos ajustes, mas decidi compartilhá-lo de qualquer
          maneira. Foi inspirado no incrível trabalho de @Ibelick, especialmente
          no componente &apos;dcm&apos;.
        </p>

        <Preview height="500px">
          <div
            className="relative flex h-screen w-full items-center justify-center overflow-hidden"
            ref={containerRef}
          >
            <div className="pointer-events-none absolute left-0 top-0 z-50 bg-neutral-100 to-transparent backdrop-blur-xl [-webkit-mask-image:linear-gradient(to_bottom,black,transparent)] dark:bg-neutral-900"></div>
            <motion.div
              className="relative flex h-[70px] w-[70px] cursor-grab items-center justify-center active:cursor-grabbing"
              animate={controls}
              style={{
                transformOrigin: 'center center',
                transform,
                rotate: rotation,
              }}
              drag="y"
              onDrag={onDrag}
              onDragEnd={onDragEnd}
            >
              {menuItems.map((item, index) => {
                const rotate = angleIncrement * index

                return (
                  <motion.div
                    transition={{ duration: 0.8 }}
                    initial={{ opacity: 0, filter: 'blur(10px)' }}
                    animate={{ opacity: 1, filter: 'blur(0px)' }}
                    exit={{ opacity: 0, filter: 'blur(10px)' }}
                    key={`${item}-${index}`}
                    className={`absolute ${
                      item === middleItem
                        ? 'text-lg font-semibold text-green-400'
                        : 'text-lg font-semibold text-neutral-900 dark:text-neutral-300'
                    } transition-colors duration-150 `}
                    style={{
                      left: '50%',
                      transform: `rotate(${rotate}deg) translateX(120px)`,
                      transformOrigin: 'left center',
                    }}
                    tabIndex={0}
                    // onFocus={() => console.log(`Focused on: ${item}`)}
                  >
                    {item}
                  </motion.div>
                )
              })}
            </motion.div>
            <motion.div
              transition={{ duration: 0.1 }}
              initial={{ opacity: 0, filter: 'blur(10px)' }}
              animate={{ opacity: 1, filter: 'blur(0px)' }}
              exit={{ opacity: 0, filter: 'blur(10px)' }}
              className="pointer-events-none absolute bottom-0 left-0 z-50 dark:bg-neutral-900"
            ></motion.div>
            {message && (
              <motion.div
                transition={{ duration: 0.8 }}
                initial={{ opacity: 0, filter: 'blur(10px)' }}
                animate={{ opacity: 1, filter: 'blur(0px)' }}
                exit={{ opacity: 0, filter: 'blur(10px)' }}
                className={`${
                  isSuccess ? 'text-green-300' : 'text-red-300'
                } absolute bottom-32 left-1/2 -translate-x-1/2 transform rounded-xl p-4 text-center text-sm`}
              >
                {message}
              </motion.div>
            )}

            {combination.length > 0 && (
              <div className="absolute left-1/2 -translate-x-1/2 transform rounded-lg border border-neutral-100 bg-white p-2 dark:border-neutral-800 dark:bg-transparent">
                <div className="flex items-center justify-center space-x-5 px-2">
                  {combination.map((num, index) => (
                    <motion.span
                      transition={{ duration: 0.8 }}
                      initial={{ opacity: 0, filter: 'blur(10px)' }}
                      animate={{ opacity: 1, filter: 'blur(0px)' }}
                      exit={{ opacity: 0, filter: 'blur(10px)' }}
                      key={index}
                      className="text-lg font-bold"
                    >
                      {num}
                    </motion.span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </Preview>
      </article>
    </main>
  )
}
