import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import { useLeadFormModal } from "@/hooks/useLeadFormModal";
import en from '@/locales/en.json'

export default function CTA() {
  const { setPopupOpen } = useLeadFormModal()
  const { title, subtitle, button } = en.cta
  
  return (
    <section
        className="w-full py-16"
        style={{
            backgroundImage: "url('/trial-bg.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
        }}
    >
      <div className="max-w-2xl mx-auto px-5 text-center">
        <h2 className="text-3xl md:text-4xl text-white mb-4">
          {title}
        </h2>
        <p className="text-base md:text-lg text-gray-100 mb-8">
          {subtitle}
        </p>
         <Button variant="roundedGreen" size="roundedGreen" onClick={() => setPopupOpen(true)}>
            {button}
            <ArrowRight className="ml-3 size-5" />
          </Button>
      </div>
    </section>
  )
}
