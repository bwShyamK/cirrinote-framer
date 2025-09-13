'use client'
import Image from 'next/image'
import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function About() {
  const ref = useRef<HTMLElement | null>(null)
  const inView = useInView(ref, { once: true, amount: 0.6 })

  return (
    <section
      ref={ref}
      id="about"
      className="sticky flex h-svh top-0 items-center bg-[#1c1c1c] text-white py-12 md:py-24 justify-center p-4"
    >
      <motion.div
        className="text-center space-y-14"
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        {/* Heading */}
        <motion.h3
          className="text-2xl md:text-5xl font-medium"
          variants={{
            hidden: { opacity: 0, x: -100 },
            visible: {
              opacity: 1,
              x: 0,
              transition: {
                type: 'spring',
                stiffness: 90,
                damping: 14,
                delay: 1,
              },
            },
          }}
        >
          An extraordinary note <br />
          for <span className="text-primary">makers, creators..</span>
        </motion.h3>

        {/* Image */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: -1000, scale: 0.98 },
            visible: {
              opacity: 1,
              y: 0,
              scale: 1,
              transition: { type: 'spring', stiffness: 100, damping: 10 },
            },
          }}
        >
          <Image
            src={'/notes.svg'}
            width={200}
            height={200}
            alt="notes"
            className="size-[160px] mx-auto"
          />
        </motion.div>

        {/* Text */}
        <motion.p
          className="text-xl md:text-2xl font-medium max-w-md mx-auto"
          variants={{
            hidden: { opacity: 0, x: 100 },
            visible: {
              opacity: 1,
              x: 0,
              transition: {
                type: 'spring',
                stiffness: 90,
                damping: 14,
                delay: 1,
              },
            },
          }}
        >
          Creators around the planet use this app for creating{' '}
          <span className="text-primary">magic</span>
        </motion.p>
      </motion.div>
    </section>
  )
}
