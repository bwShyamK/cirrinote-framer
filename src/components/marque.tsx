'use client'
import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

const DATA = [
  'Get one year FREE',
  'Only for limited users',
  'Join the launch event',
]

export default function MarqueHeader() {
  const marqueeRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const marquee = marqueeRef.current
    const content = contentRef.current
    if (!marquee || !content) return

    const clone = content.cloneNode(true)
    marquee.appendChild(clone)

    const totalWidth = content.offsetWidth

    gsap.to(marquee, {
      x: -totalWidth,
      duration: 15,
      ease: 'linear',
      repeat: -1,
      modifiers: {
        x: gsap.utils.unitize(
          (x: number) => parseFloat(String(x)) % totalWidth
        ),
      },
    })
  }, [])

  return (
    <div id='marque' className="bg-primary-dark relative w-full top-0 overflow-hidden ">
      <div className="relative mx-auto max-w-[1680px] px-4 py-[10px] overflow-hidden ">
        <div className="absolute left-0 h-[64px] w-[200px] bg-gradient-to-r from-primary-dark to-transparent z-10 top-0" />
        <div ref={marqueeRef} className="flex whitespace-nowrap relative">
          <div ref={contentRef} className="flex  items-center px-5 gap-10">
            {[...DATA, ...DATA].map((item, index) => (
              <div key={index} className="flex items-center w-max gap-10">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.81 11.588C5.70733 10.9813 5.43667 10.328 4.998 9.628C4.55933 8.91867 3.934 8.26067 3.122 7.654C2.31933 7.04733 1.51667 6.66 0.714 6.492V5.904C1.50733 5.71733 2.268 5.372 2.996 4.868C3.73333 4.35467 4.34933 3.73867 4.844 3.02C5.348 2.28267 5.67 1.55467 5.81 0.836H6.398C6.482 1.30267 6.65 1.78333 6.902 2.278C7.154 2.76333 7.476 3.23 7.868 3.678C8.26933 4.11667 8.71733 4.51333 9.212 4.868C9.94933 5.39067 10.7007 5.736 11.466 5.904V6.492C10.9527 6.59467 10.4207 6.80467 9.87 7.122C9.32867 7.43933 8.82467 7.81733 8.358 8.256C7.89133 8.68533 7.50867 9.138 7.21 9.614C6.77133 10.314 6.50067 10.972 6.398 11.588H5.81Z"
                    fill="white"
                  />
                </svg>
                <p className="text-white font-medium  text-sm">{item}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute right-0 h-[64px] w-[200px] bg-gradient-to-r to-primary-dark from-transparent z-10 top-0" />
      </div>
    </div>
  )
}
