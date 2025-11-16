'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { scrollToSection } from '@/lib/smooth-scroll'
import { ArrowRight } from 'lucide-react'

export default function Header() {
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
  }

  return (
    <header className="sticky top-0 z-50 shadow-sm bg-white/80 backdrop-blur-sm">
      <motion.div 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 100, damping: 20 }}
        className="mx-auto max-w-7xl px-6 py-4"
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link href="/" onClick={(e) => isHome ? (e.preventDefault(), scrollToSection('home')) : null}>
              <Image
                src="/logo.png"
                alt="Logo"
                width={150}
                height={40}
                className="cursor-pointer"
              />
            </Link>
          </motion.div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <a
                  href={`#${item.id}`}
                  onClick={(e) => handleNavClick(e, item.id)}
                  className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors cursor-pointer"
                >
                  {item.label}
                </a>
              </motion.div>
            ))}
          </nav>

          {/* CTA Button */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
              
              <Button variant="roundedGreen" size="roundedGreen" onClick={() => scrollToSection('pricing')}>
            Get Free Trial
            <ArrowRight className="ml-3 size-5" />
          </Button>
          </motion.div>
        </div>
      </motion.div>
    </header>
  )
}
