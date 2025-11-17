'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import Image from 'next/image'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  const faqs = [
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards, digital wallets, and bank transfers. All transactions are secure and encrypted.'
    },
    {
      question: 'Can I customize my branded app?',
      answer: 'Yes, you can fully customize your app with your branding, colors, logos, and menu items to match your restaurant identity.'
    },
    {
      question: 'How long does setup take?',
      answer: 'Setup typically takes 24-48 hours. Our team will guide you through every step of the process.'
    },
    {
      question: 'Is there customer support available?',
      answer: 'Yes, we offer 24/7 customer support via chat, email, and phone to help you with any questions.'
    }
  ]

  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 bg-white w-full">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Image Section */}
          <div>
            <Image
              src="/faqs.png"
              alt="FAQ"
              width={530}
              height={530}
            />
          </div>

          {/* FAQ Content */}
          <div>
            <h2 className="text-xl md:text-4xl font-semibold mb-8 leading-tight">
              Got Questions?<br/>
              <span className="text-purple-600">We've Got Answers.</span>
            </h2>

            {/* Accordion */}
            <div className="space-y-2">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="overflow-hidden"
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                    className="w-full py-2 flex justify-between items-center hover:bg-gray-50 transition-colors"
                  >
                    <span className="font-semibold text-gray-900 text-left">
                      {faq.question}
                    </span>
                    <ChevronDown
                      size={20}
                      className={`text-purple-600 transition-transform flex-shrink-0 ml-4 ${
                        openIndex === index ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {openIndex === index && (
                    <div className="py-4 bg-gray-50">
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
