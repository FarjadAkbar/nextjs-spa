'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

export default function Header() {
  const navItems = [
    { label: 'Home', href: '#' },
    { label: 'How it Work', href: '#' },
    { label: 'Testimonials', href: '#' },
    { label: 'Pricing', href: '#' },
    { label: 'FAQ', href: '#' },
    { label: 'Blog', href: '#' },
    { label: 'Contact Us', href: '#' },
  ]

  return (
    <header className="border-b-4 border-blue-400 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <Image
                        src="/logo.png"
                        alt="Footer Divider"
                        width={150}
                        height={150}
                    />
          </Link>

          {/* Navigation */}
          <nav className="flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <Button className="rounded-full bg-emerald-400 px-6 py-2 text-white hover:bg-emerald-500 transition-colors flex items-center gap-2">
            Get Free Trial
            <span>→</span>
          </Button>
        </div>
      </div>
    </header>
  )
}
