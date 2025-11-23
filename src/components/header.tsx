'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { scrollToSection } from '@/lib/smooth-scroll'
import { ArrowRight, Menu, X } from 'lucide-react'
import { useState, useEffect } from 'react'
import { useLeadFormModal } from '@/hooks/useLeadFormModal'

export default function Header() {
  const { setPopupOpen } = useLeadFormModal()
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const isHome = pathname === '/'

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'How it Works', id: 'how-it-works' },
    { label: 'Testimonials', id: 'testimonials' },
    { label: 'Pricing', id: 'pricing' },
    { label: 'FAQ', id: 'faq' },
    { label: 'Blog', id: 'blog' },
    { label: 'Contact Us', id: 'contact' },
  ]

  const handleNavClick = (e: React.MouseEvent, id: string) => {
    if (isHome) {
      e.preventDefault()
      scrollToSection(id)
    }
    setIsOpen(false)
  }

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  return (
    <header className="sticky top-0 z-50 shadow-sm bg-white/80 backdrop-blur-sm">
      <motion.div 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 100, damping: 20 }}
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3"
      >
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div 
            className="flex-shrink-0"
            whileHover={{ scale: 1.05 }} 
            whileTap={{ scale: 0.95 }}
          >
            <Link href="/" onClick={(e) => isHome ? (e.preventDefault(), scrollToSection('home')) : null}>
              <Image
                src="/logo.png"
                alt="Logo"
                width={120}
                height={32}
                className="h-8 w-auto"
                priority
              />
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href={`${isHome ? '' : '/'}#${item.id}`}
                  scroll={false} 
                  onClick={(e) => handleNavClick(e, item.id)}
                  className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors cursor-pointer px-3 py-2 rounded-md"
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            {/* Desktop CTA Button */}
            <motion.div 
              className="hidden md:block"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                variant="roundedGreen" 
                size="roundedGreen" 
                onClick={() => setPopupOpen(true)}
                className="whitespace-nowrap"
              >
                Get Free Trial
                <ArrowRight className="ml-2 size-4" />
              </Button>
            </motion.div>

            {/* Mobile menu button */}
            <motion.button
              type="button"
              className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-900 focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded="false"
              onClick={() => setIsOpen(!isOpen)}
              whileTap={{ scale: 0.95 }}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </motion.button>
          </div>
        </div>
      </motion.div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden bg-white border-t border-gray-200"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item) => (
                <Link
                  key={item.id}
                  href={`${isHome ? '' : '/'}#${item.id}`}
                  scroll={false} 
                  onClick={(e) => handleNavClick(e, item.id)}
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900 rounded-md"
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-4 pb-2">
                <Button 
                  variant="roundedGreen" 
                  size="roundedGreen" 
                  onClick={() => {
                    setPopupOpen(true)
                    setIsOpen(false)
                  }}
                  className="w-full justify-center"
                >
                  Get Free Trial
                  <ArrowRight className="ml-2 size-4" />
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
