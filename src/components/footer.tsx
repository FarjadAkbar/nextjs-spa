'use client'

import { Mail, Phone, Facebook, Twitter, Linkedin, ArrowRight } from 'lucide-react'
import Image from 'next/image'
import LeadForm from './ui/lead-form'

export default function Footer() {
  return (
    <footer className="shadow-sm bg-slate-900 text-white">
      <div className="mx-auto max-w-7xl px-6 pb-6 pt-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* Left Column - Contact Info */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold mb-8">
              Built with Barakah<br />
              Commission-Free <span className="text-purple-700">Restaurant Tech</span>
            </h2>

            {/* Contact Items */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-emerald-400">
                  <Mail className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <p className="font-medium">info@barakah.com</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-emerald-400">
                  <Phone className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Phone</p>
                  <p className="font-medium">T: +65 6338 2061 M: +65 91501277</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="bg-slate-800/35 p-6 rounded-lg">
            <h3 className="text-2xl sm:text-3xl font-bold mb-8">
              Let's Start the <span className="text-purple-400">Conversation</span>
            </h3>

            <LeadForm />
          </div>
        </div>

        {/* Bottom Section */}
        <Image src="/logo.png" alt="Footer Logo" width={150} height={150} className="mx-auto sm:mx-0" />
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-t border-slate-800 pt-8 gap-4">
          {/* Logo */}

          {/* Copyright */}
          <p className="text-sm text-gray-400 text-center sm:text-left">
            Copyright © 2025 Barakah. All Rights Reserved
          </p>

          {/* Social Icons */}
          <div className="flex items-center justify-center sm:justify-start gap-4">
            <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
