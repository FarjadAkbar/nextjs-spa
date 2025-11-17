'use client'

import { Heart } from 'lucide-react';
import Image from 'next/image'

export default function Features() {
  return (
    <section className="gradient-section py-16 md:py-20 w-full">
      <div className="mx-auto max-w-7xl px-4 md:px-6">

        {/* Outer Grid — 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-[0.8fr_1fr_1fr] gap-6">

          {/* ====================== COLUMN 1 ====================== */}
          <div className="rounded-xl bg-purple-50 p-4 md:p-5 border border-purple-200">
            <h3 className="text-xl md:text-2xl font-bold text-purple-600 mb-6">
              Seamless<br />
              Integration, Zero<br />
              Tech Headaches
            </h3>

            <div className="h-32 md:h-48 bg-gradient-to-br from-pink-200 via-purple-100 to-blue-100 rounded-lg mb-6 flex items-center justify-center relative">
              <Image
                src="/feature/seamless-integration.png"
                alt="Integration illustration"
                width={300}
                height={300}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>

            <p className="text-xs md:text-sm text-gray-600 mb-6">
              Works directly with your existing POS — no extra tablets.
            </p>
            <div className="h-1 bg-gradient-to-r from-purple-600 to-purple-400 rounded-full" />
          </div>

          {/* ====================== COLUMN 2 ====================== */}
          <div className="grid grid-rows-2 gap-6">

            {/* Row 1–3 (span 3 rows) */}
            <div className="row-span-3 rounded-xl bg-gray-50 p-4 md:p-5 border border-gray-200">
              <h3 className="text-base md:text-lg font-bold mb-2">Full Profits, Zero Commissions</h3>
              <p className="text-xs md:text-sm text-gray-600 mb-6">
                Stop losing 20-30% of every order to third-party delivery apps.
              </p>

              <div className="h-48 bg-white rounded-lg flex items-center justify-center relative">
                <Image
                  src="/feature/full-profits.png"
                  alt="Profit chart"
                  width={300}
                  height={300}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>

            {/* Row 4 (span 1 row) */}
            <div className="row-span-1 rounded-xl bg-white p-4 md:p-5 border border-gray-200">
              <div className="flex items-center justify-between gap-4">
              <div className="flex-1">
                <h3 className="text-base md:text-lg font-bold mb-3">Your Brand, Your Customers</h3>
                <p className="text-xs md:text-sm text-gray-600">
                  Build loyalty with your own app and full access to customer data.
                </p>
              </div>
              
              <div className="w-20 md:w-24 h-20 md:h-24 flex-shrink-0">
                <Image
                  src="/feature/brand-customers.png"
                  alt="Your brand app"
                  width={128}
                  height={128}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
            </div>
          </div>

          {/* ====================== COLUMN 3 ====================== */}
          <div className="grid grid-rows-2 gap-6">

            {/* Top card — span 2 rows */}
            <div className="row-span-2 rounded-xl bg-white border border-gray-200 p-4 md:p-5">
               <h3 className="text-base md:text-lg font-bold mb-6">Satisfied Customer</h3>
            
                <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                    <Heart className="w-8 h-8 md:w-9 md:h-9 text-purple-600 fill-purple-600" />
                    <span className="text-xl md:text-3xl font-bold">15,200</span>
                </div>
                <Image
                    src="/feature/satisfied-customers.png"
                    alt="Satisfied customers"
                    width={120}
                    height={32}
                    className="h-8 md:h-8 w-auto"
                />
                </div>

                <p className="text-xs md:text-sm text-gray-600">
                Lorem ipsum is simply dummy text of the printing and typesetting industry.
                </p>
            </div>

            {/* Bottom card — span 2 rows */}
            <div className="row-span-2 rounded-xl bg-white border border-gray-200 p-4 md:p-5">
              <h3 className="text-base md:text-lg font-bold mb-4">Direct Online Orders</h3>
            <p className="text-xs md:text-sm text-gray-600 mb-6">
              Lorem ipsum is simply dummy text of the printing and typesetting industry.
            </p>
            
            <div className="bg-gray-50 rounded-lg p-4 md:p-5">
              <h4 className="text-sm md:text-base font-bold mb-4">Direct Online Orders</h4>
              
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-3xl md:text-4xl font-bold mb-2">+4201</div>
                  <p className="text-xs text-purple-600 font-semibold">↑ 32% this month</p>
                </div>
                
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-purple-600 border-2 border-white" />
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-emerald-500 border-2 border-white" />
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-purple-500 border-2 border-white" />
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-emerald-400 border-2 border-white" />
                </div>
              </div>
            </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

