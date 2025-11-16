'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Mail, Phone, Facebook, Twitter, Linkedin } from 'lucide-react'
import { useState } from 'react'
import Image from 'next/image'

export default function Footer() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    restaurantName: '',
    posSystem: '',
})


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  return (
    <footer className="border-t-4 border-blue-400 bg-slate-900 text-white">
      <div className="mx-auto max-w-7xl px-6 pb-6 pt-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 gap-12 mb-12">
          {/* Left Column - Contact Info */}
          <div>
            <h2 className="text-3xl font-semibold mb-8">
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
          <div className='bg-slate-800/35 p-6 rounded-lg'>
            <h3 className="text-2xl font-bold mb-8">
              Let's Start the <span className="text-purple-400">Conversation</span>
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
  {/* 2 Columns Row 1 */}
  <div className="grid grid-cols-2 gap-4">
    <input
      type="text"
      name="firstName"
      placeholder="First Name"
      value={formData.firstName}
      onChange={handleChange}
      className="px-4 py-3 bg-slate-900 rounded-full focus:outline-none text-white placeholder-gray-500"
    />
    <input
      type="text"
      name="lastName"
      placeholder="Last Name"
      value={formData.lastName}
      onChange={handleChange}
      className="px-4 py-3 bg-slate-900 rounded-full focus:outline-none text-white placeholder-gray-500"
    />
  </div>

  {/* 2 Columns Row 2 */}
  <div className="grid grid-cols-2 gap-4">
    <input
      type="email"
      name="email"
      placeholder="Email"
      value={formData.email}
      onChange={handleChange}
      className="px-4 py-3 bg-slate-900 rounded-full focus:outline-none text-white placeholder-gray-500"
    />
    <input
      type="text"
      name="phone"
      placeholder="Phone"
      value={formData.phone}
      onChange={handleChange}
      className="px-4 py-3 bg-slate-900 rounded-full focus:outline-none text-white placeholder-gray-500"
    />
  </div>

  {/* 2 Columns Row 3 */}
  <div className="grid grid-cols-2 gap-4">
    <input
      type="text"
      name="restaurantName"
      placeholder="Restaurant Name"
      value={formData.restaurantName}
      onChange={handleChange}
      className="px-4 py-3 bg-slate-900 rounded-full focus:outline-none text-white placeholder-gray-500"
    />
    <input
      type="text"
      name="posSystem"
      placeholder="POS System"
      value={formData.posSystem}
      onChange={handleChange}
      className="px-4 py-3 bg-slate-900 rounded-full focus:outline-none text-white placeholder-gray-500"
    />
  </div>

  <Button
    type="submit"
    className="rounded-full bg-emerald-400 text-white font-medium hover:bg-emerald-500 transition-colors"
  >
    Submit
    <span className="ml-3">→</span>
  </Button>
</form>

          </div>
        </div>

        {/* Bottom Section */}
        <Image
            src="/logo.png"
            alt="Footer Divider"
            width={150}
            height={150}
        />
        <div className="border-t border-slate-800 pt-8 flex items-center justify-between">
          {/* Logo and Copyright */}
            <p className="text-sm text-gray-400">
              Copyright © 2025 Barakah. All Rights Reserved
            </p>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
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
