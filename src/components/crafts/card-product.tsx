"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function CardProduct() {
  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState(50);
  const [addCart, setAddCart] = useState(false);

  useEffect(() => {
    setPrice(quantity * 50);
  }, [quantity]);

  const handleIncrement = () => {
    if (quantity >= 9) return;
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity <= 1) return;
    setQuantity(quantity - 1);
  };

  const incrementButtonClass =
    quantity >= 9
      ? "text-neutral-400 border-[1.95px] border-neutral-400 cursor-default"
      : "text-neutral-900 border-[1.95px] border-neutral-900";
  const decrementButtonClass =
    quantity <= 1
      ? "text-neutral-400 border-[1.95px] border-neutral-400 cursor-default"
      : "text-neutral-900 border-[1.95px] border-neutral-900";

  return (
    <motion.div
      layout
      className="flex flex-col items-center justify-center bg-gradient-to-t from-neutral-200/40 to-neutral-300/30 dark:from-neutral-200 dark:to-neutral-300 rounded-xl py-3 px-6 shadow-md"
    >
      <div className={addCart ? `hidden` : `block`}>
        <h1 className="text-base font-semibold text-neutral-900 select-none pt-3">
          T-shirt
        </h1>
        <motion.p
          key={addCart ? "addCartTrue" : "addCartFalse"}
          transition={{ duration: 0.8 }}
          initial={{ opacity: 0, filter: "blur(10px)", y: 3 }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          exit={{ opacity: 0, filter: "blur(10px)", y: -3 }}
          className="text-sm leading-7 text-neutral-700"
        >
          Our t-shirts are perfect for any occasion
        </motion.p>
      </div>
      <div className="w-full flex flex-col items-center justify-center gap-8 mt-10">
        <motion.div
          layout
          className="flex flex-col items-center justify-centermw-full h-full"
        >
          <img
            className={`select-none`}
            src="/images/t-shirt.png"
            alt="T-shirt"
            height={addCart ? 500 : 250}
            width={addCart ? 255 : 150}
          />
        </motion.div>
        <div className="w-full flex flex-col items-center justify-center gap-4 mt-2">
          <div
            className={
              addCart
                ? `w-full text-center`
                : `w-full flex items-center justify-between`
            }
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={price}
                transition={{ duration: 0.2 }}
                initial={{ opacity: 0, y: 0, filter: "blur(10px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: 0, filter: "blur(10px)" }}
                className={
                  addCart
                    ? `text-base font-semibold select-none dark:text-black`
                    : `text-xs font-semibold select-none dark:text-black`
                }
              >
                {addCart ? `$ ${price},00 (${quantity})` : `$ ${price},00`}
              </motion.span>
            </AnimatePresence>
            <div className={addCart ? `hidden` : `flex items-center gap-3`}>
              <button
                onClick={handleDecrement}
                className={`w-4 h-4 rounded-full text-sm opacity-70 font-semibold flex items-center justify-center select-none ${decrementButtonClass}`}
              >
                -
              </button>
              <motion.span
                key={quantity}
                className="text-sm w-2 text-center select-none dark:text-black"
              >
                {quantity}
              </motion.span>
              <button
                onClick={handleIncrement}
                className={`w-4 h-4 rounded-full text-sm opacity-70 font-semibold flex items-center justify-center select-none ${incrementButtonClass}`}
              >
                +
              </button>
            </div>
            {addCart ? (
              <motion.p
                transition={{ duration: 0.6 }}
                initial={{ opacity: 0, filter: "blur(10px)", y: 10 }}
                animate={{ opacity: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, filter: "blur(10px)", y: -10 }}
                className="text-[15px] leading-7 my-4 text-neutral-700"
              >
                Confirm the purchase to wear what you love
              </motion.p>
            ) : null}
          </div>
          <motion.button
            layout
            onClick={() => setAddCart(!addCart)}
            className="w-full text-sm font-semibold bg-gradient-to-t from-neutral-600 to-neutral-500 text-neutral-100 py-2 rounded-lg select-none"
          >
            {addCart ? "Confirm purchase" : "Add to cart"}
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}