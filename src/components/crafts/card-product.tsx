'use client'

import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import HeaderDetails from '@/components/layout/header-details'
import Preview from '@/components/layout/preview'

export default function CardProduct() {
  const [quantity, setQuantity] = useState(1)
  const [price, setPrice] = useState(50)
  const [addCart, setAddCart] = useState(false)

  useEffect(() => {
    setPrice(quantity * 50)
  }, [quantity])

  const handleIncrement = () => {
    if (quantity >= 9) return
    setQuantity(quantity + 1)
  }

  const handleDecrement = () => {
    if (quantity <= 1) return
    setQuantity(quantity - 1)
  }

  const incrementButtonClass =
    quantity >= 9
      ? 'text-neutral-400 border-[1.95px] border-neutral-400 cursor-default'
      : 'text-neutral-900 border-[1.95px] border-neutral-900'
  const decrementButtonClass =
    quantity <= 1
      ? 'text-neutral-400 border-[1.95px] border-neutral-400 cursor-default'
      : 'text-neutral-900 border-[1.95px] border-neutral-900'

  return (
    <main className="py-6">
      <HeaderDetails title="Card Produtc" date="Aug, 2024" />
      <article className="mt-10 max-w-none">
      <p className="text-[14.5px] leading-7 text-neutral-600 dark:text-neutral-400 [&:not(:first-child)]:mt-6">          Um cartão interativo para exibição do produto, trazendo uma
          experiência visual moderna e fluida. Ideal para e-commerces e vitrines
          digitais.
        </p>

        <Preview height="500px">
          <motion.div
            layout
            className="flex flex-col items-center justify-center rounded-xl bg-gradient-to-t from-neutral-200/40 to-neutral-300/30 px-6 py-3 shadow-md dark:from-neutral-200 dark:to-neutral-300"
          >
            <div className={addCart ? `hidden` : `block`}>
              <h1 className="select-none pt-3 text-base font-semibold text-neutral-900">
                T-shirt
              </h1>
              <motion.p
                key={addCart ? 'addCartTrue' : 'addCartFalse'}
                transition={{ duration: 0.8 }}
                initial={{ opacity: 0, filter: 'blur(10px)', y: 3 }}
                animate={{ opacity: 1, filter: 'blur(0px)' }}
                exit={{ opacity: 0, filter: 'blur(10px)', y: -3 }}
                className="text-sm leading-7 text-neutral-700"
              >
                Our t-shirts are perfect for any occasion
              </motion.p>
            </div>
            <div className="mt-10 flex w-full flex-col items-center justify-center gap-8">
              <motion.div
                layout
                className="justify-centermw-full flex h-full flex-col items-center"
              >
                <img
                  className={`select-none`}
                  src="/images/t-shirt.png"
                  alt="T-shirt"
                  height={addCart ? 500 : 250}
                  width={addCart ? 255 : 150}
                />
              </motion.div>
              <div className="mt-2 flex w-full flex-col items-center justify-center gap-4">
                <div
                  className={
                    addCart
                      ? `w-full text-center`
                      : `flex w-full items-center justify-between`
                  }
                >
                  <AnimatePresence mode="wait" initial={false}>
                    <motion.span
                      key={price}
                      transition={{ duration: 0.2 }}
                      initial={{ opacity: 0, y: 0, filter: 'blur(10px)' }}
                      animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                      exit={{ opacity: 0, y: 0, filter: 'blur(10px)' }}
                      className={
                        addCart
                          ? `select-none text-base font-semibold dark:text-black`
                          : `select-none text-xs font-semibold dark:text-black`
                      }
                    >
                      {addCart
                        ? `$ ${price},00 (${quantity})`
                        : `$ ${price},00`}
                    </motion.span>
                  </AnimatePresence>
                  <div
                    className={addCart ? `hidden` : `flex items-center gap-3`}
                  >
                    <button
                      onClick={handleDecrement}
                      className={`flex h-4 w-4 select-none items-center justify-center rounded-full text-sm font-semibold opacity-70 ${decrementButtonClass}`}
                    >
                      -
                    </button>
                    <motion.span
                      key={quantity}
                      className="w-2 select-none text-center text-sm dark:text-black"
                    >
                      {quantity}
                    </motion.span>
                    <button
                      onClick={handleIncrement}
                      className={`flex h-4 w-4 select-none items-center justify-center rounded-full text-sm font-semibold opacity-70 ${incrementButtonClass}`}
                    >
                      +
                    </button>
                  </div>
                  {addCart ? (
                    <motion.p
                      transition={{ duration: 0.6 }}
                      initial={{ opacity: 0, filter: 'blur(10px)', y: 10 }}
                      animate={{ opacity: 1, filter: 'blur(0px)' }}
                      exit={{ opacity: 0, filter: 'blur(10px)', y: -10 }}
                      className="my-4 text-[15px] leading-7 text-neutral-700"
                    >
                      Confirm the purchase to wear what you love
                    </motion.p>
                  ) : null}
                </div>
                <motion.button
                  layout
                  onClick={() => setAddCart(!addCart)}
                  className="w-full cursor-pointer select-none rounded-lg bg-gradient-to-t from-neutral-600 to-neutral-500 py-2 text-sm font-semibold text-neutral-100"
                >
                  {addCart ? 'Confirm purchase' : 'Add to cart'}
                </motion.button>
              </div>
            </div>
          </motion.div>
        </Preview>
      </article>
    </main>
  )
}
