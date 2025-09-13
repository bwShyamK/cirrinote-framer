'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'
import React, { useState } from 'react'

// 🔹 Reusable Card Component
function FeatureCard({ title }: { title: string }) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="h-[260px] min-w-max w-[280px] flex-none md:w-full md:h-[320px] relative border-2 border-[#1c1c1c] rounded-2xl bg-[#1C1C1C] flex items-end p-10 cursor-pointer"
      animate={{
        borderColor: hovered ? 'var(--primary)' : '#1c1c1c',
        backgroundColor: hovered ? '#000' : '#1c1c1c',
      }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.5, x: 40, y: -40 }}
        animate={
          hovered
            ? { opacity: 1, scale: 1, x: 0, y: 0, top: 12, right: 12 }
            : { opacity: 0, scale: 0.5, x: 0, y: 0 }
        }
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        className="absolute group-hover:top-6 group-hover:right-6"
      >
        <Image src="/arrow.svg" width={88} height={88} alt="arrow" />
      </motion.div>

      {/* Title */}
      <motion.p
        className="text-[32px] font-medium relative text-white"
        animate={{
          x: hovered ? 5 : 0,
        }}
        transition={{ type: 'spring', stiffness: 200, damping: 10 }}
      >
        {title.split(' ')[0]} <br />
        <motion.span
          animate={{
            y: hovered ? -4 : 0,
          }}
          transition={{ type: 'spring', stiffness: 100, damping: 15 }}
          className="block"
        >
          {title.split(' ')[1]}
        </motion.span>
      </motion.p>
    </motion.div>
  )
}

export default function Features() {
  return (
    <section id="features" className="py-24 md:py-32 bg-black z-20 relative ">
      <div className="max-w-7xl mx-auto">
        <div className="px-4">
          <span className="text-sm bg-primary-dark px-2 text-white py-0.5 rounded-full">
            Whats the best
          </span>
          <h3 className="mt-2 text-5xl md:text-[80px] font-medium text-white">
            Key Features
          </h3>
          <p className="max-w-[360px] mt-4 text-xl font-medium text-white/50">
            We're proud to announce with the features that empower creatives
            every day.
          </p>
        </div>

        <div className="flex w-full overflow-auto hide-scrollbar md:grid  md:grid-cols-3 items-center mt-[80px] gap-5 pl-4 md:pr-4">
          <FeatureCard title="Feature Name" />
          <div className="hidden md:block " />
          <FeatureCard title="Third Feature" />
          <div className="hidden md:block " />
          <FeatureCard title="Third Feature" />
          <div className="hidden md:block md:col-span-2">
            <p className="text-5xl text-white/50 max-w-[720px] leading-[52px]">
              Creative people worldwide rely on this app to craft ideas into
              <span className="text-primary"> digital magic</span> .
            </p>
          </div>
          <FeatureCard title="Third Feature" />
          <FeatureCard title="Third Feature" />
          <FeatureCard title="Third Feature" />
          <div className="hidden md:block " />
        </div>
        <p className="text-2xl px-4 text-white/50 md:hidden max-w-sm mt-8 ">
          Creative people worldwide rely on this app to craft ideas into
          <span className="text-primary"> digital magic</span> .
        </p>
      </div>
    </section>
  )
}
