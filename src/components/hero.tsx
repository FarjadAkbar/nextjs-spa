'use client'

import { Button } from '@/components/ui/button'

export default function Hero() {
  return (
    <section className="gradient-section py-12 md:py-20">
      <div className="mx-auto max-w-4xl px-4 md:px-6 text-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
          Own Your{' '}
          <span className="text-purple-600">Ordering</span>
          <br />
          <span className="text-purple-600">Experience</span> — Commission-Free.
        </h1>
        
        <p className="mt-4 md:mt-6 text-gray-600 text-sm md:text-base lg:text-lg max-w-2xl mx-auto">
          Launch your own branded restaurant app and online ordering site. Keep 100% of your profits and full control of your customer data.
        </p>

        <div className="mt-6 md:mt-8 flex justify-center">
          <Button className="rounded-full bg-emerald-400 px-6 md:px-8 py-2 md:py-3 text-white hover:bg-emerald-500 transition-colors flex items-center gap-2 text-sm md:text-base">
            Get Free Trial
            <span>→</span>
          </Button>
        </div>
      </div>
    </section>
  )
}
