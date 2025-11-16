'use client'

import { motion, Variants } from 'framer-motion'
import dynamic from 'next/dynamic'

// Dynamically import components that might use client-side features
const Header = dynamic(() => import('@/components/header'), { ssr: true })
const Hero = dynamic(() => import('@/components/hero'), { ssr: true })
const Features = dynamic(() => import('@/components/features'), { ssr: true })
const HowItWorks = dynamic(() => import('@/components/how-it-works'), { ssr: true })
const Testimonials = dynamic(() => import('@/components/testimonials'), { ssr: true })
const DriveOrders = dynamic(() => import('@/components/drive-orders'), { ssr: true })
const Pricing = dynamic(() => import('@/components/pricing'), { ssr: true })
const CTA = dynamic(() => import('@/components/cta'), { ssr: true })
const Blog = dynamic(() => import('@/components/blog'), { ssr: true })
const Footer = dynamic(() => import('@/components/footer'), { ssr: true })
const FAQ = dynamic(() => import('@/components/faqs'), { ssr: true })

const fadeInUp: Variants = {
  hidden: { 
    opacity: 0, 
    y: 40 
  },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1],
      delay: i * 0.1
    }
  })
}

// Create a wrapper component for sections to avoid hydration issues
const AnimatedSection = ({ children, id, index = 0 }: { 
  children: React.ReactNode; 
  id: string;
  index?: number;
}) => (
  <motion.section
    id={id}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-100px" }}
    variants={fadeInUp}
    custom={index}
    className="flex items-center"
  >
    {children}
  </motion.section>
)

export default function Home() {
  return (
    <main>
      <Header />
      
      <AnimatedSection id="home">
        <Hero />
      </AnimatedSection>
      
      <AnimatedSection id="features" index={1}>
        <Features />
      </AnimatedSection>
      
      <AnimatedSection id="how-it-works" index={2}>
        <HowItWorks />
      </AnimatedSection>
      
      <AnimatedSection id="testimonials" index={3}>
        <Testimonials />
      </AnimatedSection>
      
      <AnimatedSection id="drive-orders" index={4}>
        <DriveOrders />
      </AnimatedSection>
      
      <AnimatedSection id="pricing" index={5}>
        <Pricing />
      </AnimatedSection>
      
      <AnimatedSection id="faq" index={6}>
        <FAQ />
      </AnimatedSection>
      
      <AnimatedSection id="contact" index={7}>
        <CTA />
      </AnimatedSection>
      
      <AnimatedSection id="blog" index={8}>
        <Blog />
      </AnimatedSection>
      
      <Footer />
    </main>
  )
}
