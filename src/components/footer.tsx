import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Socials = [
  { src: '/instagram.svg', link: 'https://www.instagram.com/' },
  { src: 'linkedin.svg', link: 'https://www.linkedin.com/' },
  { src: 'x.svg', link: 'https://www.x.com/' },
]
export default function Footer() {
  return (
    <footer className="bg-black relative z-20 py-[80px] px-[40px] border-t border-white/10 w-full">
      <div className="max-w-7xl mx-auto">
        <div className="text-white/50 text-sm flex sm:flex-row flex-col gap-y-10 sm:items-center justify-between">
          <div>
            <Image
              src={'/logo-text.png'}
              width={120}
              height={64}
              alt={'logo'}
            />
          </div>
          <div className="gap-8 flex items-center">
            {Socials.map((item, index) => {
              return (
                <div className="relative" key={index}>
                  <Image
                    key={index}
                    src={item.src}
                    width={32}
                    height={32}
                    alt={item.src.split('.')[0]}
                  />
                  <Link
                    href={item.link}
                    className="absolute z-40 cursor-pointer top-0 right-0 w-full h-full"
                  />
                </div>
              )
            })}
          </div>
        </div>
        <div className="text-white/50 mt-16 text-sm sm:flex items-center justify-between ">
          <p>© CirriNote 2025</p>
          <p>Crafted with passion by CreoWis</p>
        </div>
      </div>
    </footer>
  )
}
