import Header from '@/components/header'
import Hero from '@/components/hero'
import Features from '@/components/features'
import HowItWorks from '@/components/how-it-works'
import Testimonials from '@/components/testimonials'
import DriveOrders from '@/components/drive-orders'
import Pricing from '@/components/pricing'
import CTA from '@/components/cta'
import Blog from '@/components/blog'
import Footer from '@/components/footer'
import FAQ from '@/components/faqs'

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Features />
      <HowItWorks />
      <Testimonials />
      <DriveOrders />
      <Pricing />
      <FAQ />
      <CTA />
      <Blog />
      <Footer />
    </main>
  )
}
