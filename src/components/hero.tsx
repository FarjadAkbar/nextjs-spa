import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import { useLeadFormModal } from '@/hooks/useLeadFormModal'
import en from '@/locales/en.json'

export default function Hero() {
  const { setPopupOpen } = useLeadFormModal()
  const { title, subtitle, cta } = en.hero
  return (
    <section className="gradient-section py-12 md:py-20 w-full">
      <div className="mx-auto max-w-7xl py-6 px-4 md:px-6 text-center" style={{backgroundImage: 'url(vector.png)', backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}}>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight"
        dangerouslySetInnerHTML={{ __html: title }}
        />
        
        <p className="mt-4 md:mt-6 text-gray-600 text-sm md:text-base lg:text-lg max-w-2xl mx-auto">
          {subtitle}
        </p>

        <div className="mt-6 md:mt-8 flex justify-center">
          <Button variant="roundedGreen" size="roundedGreen" onClick={() => setPopupOpen(true)}>
            {cta}
            <ArrowRight className="ml-3 size-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}
