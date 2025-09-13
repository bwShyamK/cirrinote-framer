'use client'
import Image from 'next/image'
import { motion } from 'motion/react'

export default function Hero() {
  return (
    <section className="relative overflow-x-clip py-4 flex items-center justify-center bg-fixed bg-[url('/hero.png')] bg-center bg-no-repeat bg-cover ">
      <div className="max-w-7xl py-12 mx-auto relative  flex flex-col md:flex-row items-center justify-between md:justify-center h-[calc(100vh-120px)] w-full">
        <div>
          <motion.h1
            animate={{ x: 0 }}
            initial={{ x: 100 }}
            transition={{
              type: 'spring',
              stiffness: 120,
              damping: 20,
              duration: 4,
            }}
            drag
            whileDrag={{
              scale: 1.5,
            }}
            dragConstraints={{
              left: 0,
              right: 0,
              top: 0,
              bottom: 0,
            }}
            className="text-5xl md:text-[80px] text-white md:absolute font-medium top-[23%] left-[4%] z-10 "
          >
            Note Taking
          </motion.h1>

          {/* Right heading */}
          <motion.h1
            initial={{ x: -100 }}
            animate={{ x: 0 }}
            transition={{
              type: 'spring',
              stiffness: 120,
              damping: 20,
              delay: 0,
              duration: 14,
            }}
            className=" text-5xl md:text-[80px] md:absolute text-primary font-medium bottom-[45%] right-[5%] z-10"
          >
            Redefined
          </motion.h1>
        </div>

        {/* Hero Image */}
        <motion.div
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          transition={{
            type: 'spring',
            stiffness: 90,
            damping: 20,
          }}
          className=" mt-20 md:mt-0 overflow-x-clip md:overflow-visible"
        >
          <Image
            src={'/octa.png'}
            width={1190}
            height={1000}
            alt={'octa'}
            draggable={false}
            className="select-none relative md:scale-200   -right-28 md:right-0 w-[777px]  md:h-full md:w-full max-w-[1190px] max-h-[777px]"
          />
        </motion.div>
      </div>
    </section>
  )
}
