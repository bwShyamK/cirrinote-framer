'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

const navItems = [
  { name: 'About', href: '#about' },
  { name: 'Features', href: '#features' },
  { name: 'FAQs', href: '#marque' },
  { name: 'Contact', href: '#marque' },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

  const handleNavClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault()
    setIsMobileMenuOpen(false) // Close mobile menu on navigation

    const targetId = href.substring(1)
    const targetElement = document.getElementById(targetId)

    if (targetElement) {
      const elementRect = targetElement.getBoundingClientRect()
      const absoluteElementTop = elementRect.top + window.pageYOffset

      window.scrollTo({
        top: absoluteElementTop,
        behavior: 'smooth',
      })
    }
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <>
      <motion.header
        id="header"
        className="sticky top-0 left-0 text-white right-0 z-50 transition-all duration-300"
        style={{
          backdropFilter: isScrolled ? 'blur(20px)' : 'none',
          backgroundColor: isScrolled ? 'rgba(0,0,0,0.8)' : 'transparent',
          boxShadow: isScrolled ? '0 8px 32px rgba(0,0,0,0.1)' : 'none',
        }}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between lg:h-20">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/logo-text.png"
                width={120}
                height={64}
                alt="cirrinote"
                className="w-auto md:w-[120px]"
              />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden items-center gap-12 md:flex">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="flex items-center space-x-1 font-medium text-sm hover:text-primary transition-colors"
                  onClick={(e) => handleNavClick(e, item.href)}
                >
                  <span>{item.name}</span>
                </Link>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="flex items-center gap-4">
              <motion.div
                className="flex items-center gap-2 md:gap-4 md:h-[41px] bg-white p-[1px] rounded-full relative cursor-pointer"
                whileHover="hover"
                initial="rest"
                animate="rest"
              >
                <div className="rounded-full p-1.5 relative z-20">
                  <Image
                    src="/cart.svg"
                    width={24}
                    height={24}
                    alt="cart"
                    className="size-4 md:size-6"
                  />
                </div>
                <motion.span
                  className="text-black text-sm md:text-base pr-4 relative z-20"
                  variants={{
                    rest: { color: '#000' },
                    hover: { color: '#fff', transition: { duration: 0.2 } },
                  }}
                >
                  Try Now
                </motion.span>

                <motion.div
                  className="absolute size-7 md:size-9 bg-black left-[2px] top-[1px] md:top-[2px] rounded-full z-10"
                  variants={{
                    hover: {
                      width: 124,
                      height: 38,
                      transition: {
                        type: 'spring',
                        stiffness: 200,
                        damping: 20,
                      },
                    },
                  }}
                />
              </motion.div>

              {/* Mobile Menu Button */}
              <button
                className="md:hidden p-2 -m-2"
                onClick={toggleMobileMenu}
                aria-label="Toggle mobile menu"
              >
                <Image src="/menu.svg" width={24} height={24} alt="menu" />
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-[100] bg-black text-white md:hidden"
            variants={{
              hidden: {
                opacity: 0,
                scale: 0.95,
                transition: {
                  duration: 0.2,
                  ease: 'easeInOut',
                },
              },
              visible: {
                opacity: 1,
                scale: 1,
                transition: {
                  duration: 0.3,
                  ease: 'easeOut',
                },
              },
            }}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            {/* Close Button */}
            <div className="absolute top-4 right-4 p-4">
              <button
                onClick={toggleMobileMenu}
                className="p-2 -m-2 hover:bg-white/10 rounded-full transition-colors"
                aria-label="Close menu"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Logo */}
            <div className="absolute top-4 left-4 p-4">
              <Image
                src="/logo-text.png"
                width={100}
                height={53}
                alt="cirrinote"
                className="w-auto"
              />
            </div>

            {/* Menu Items */}
            <div className="flex flex-col items-center justify-center h-full space-y-8">
              {navItems.map((item, i) => (
                <motion.div
                  key={item.name}
                  custom={i}
                  variants={{
                    hidden: {
                      opacity: 0,
                      y: 20,
                    },
                    visible: (i: number) => ({
                      opacity: 1,
                      y: 0,
                      transition: {
                        delay: i * 0.1 + 0.2,
                        duration: 0.3,
                        ease: 'easeOut',
                      },
                    }),
                  }}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                >
                  <Link
                    href={item.href}
                    className="text-3xl font-medium hover:text-primary transition-colors duration-300"
                    onClick={(e) => handleNavClick(e, item.href)}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}

              {/* CTA Button in Mobile Menu */}
              <motion.div
                custom={navItems.length}
                variants={{
                  hidden: {
                    opacity: 0,
                    y: 20,
                  },
                  visible: (i: number) => ({
                    opacity: 1,
                    y: 0,
                    transition: {
                      delay: i * 0.1 + 0.2,
                      duration: 0.3,
                      ease: 'easeOut',
                    },
                  }),
                }}
                initial="hidden"
                animate="visible"
                exit="hidden"
                className="pt-8"
              >
                <motion.div
                  className="flex items-center gap-4 h-[50px] bg-white p-[1px] rounded-full relative cursor-pointer"
                  whileHover="hover"
                  initial="rest"
                  animate="rest"
                >
                  <div className="rounded-full p-2 relative z-20">
                    <Image
                      src="/cart.svg"
                      width={24}
                      height={24}
                      alt="cart"
                      className="size-6"
                    />
                  </div>
                  <motion.span
                    className="text-black text-lg pr-6 relative z-20 font-medium"
                    variants={{
                      rest: { color: '#000' },
                      hover: { color: '#fff', transition: { duration: 0.2 } },
                    }}
                  >
                    Try Now
                  </motion.span>

                  <motion.div
                    className="absolute size-[46px] bg-black left-[2px] top-[2px] rounded-full z-10"
                    variants={{
                      hover: {
                        width: 140,
                        height: 46,
                        transition: {
                          type: 'spring',
                          stiffness: 200,
                          damping: 20,
                        },
                      },
                    }}
                  />
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
