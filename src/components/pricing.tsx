import { useLeadFormModal } from '@/hooks/useLeadFormModal'
import { Check } from 'lucide-react'
import en from '@/locales/en.json'

export default function Pricing() {
  const { setPopupOpen } = useLeadFormModal()
  const { title, plans } = en.pricing

  return (
    <section className="py-16 md:py-20 px-4 md:px-6 bg-white w-full">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-xl md:text-2xl lg:text-4xl font-bold text-foreground mb-2"
          dangerouslySetInnerHTML={{ __html: title }}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-xl p-8 md:p-10 transition-transform overflow-hidden ${plan.featured
                  ? 'shadow-lg text-white'
                  : 'bg-gray-50 border border-gray-200'
                }`}
              style={
                plan.featured
                  ? {
                    backgroundImage: `url(${plan.accent})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }
                  : {}
              }
            >
              {/* Overlay behind the text */}
              {plan.featured && (
                <div className="absolute inset-0 bg-black/20 rounded-xl pointer-events-none"></div>
              )}

              {/* Content on top */}
              <div className="relative z-10">
                <h3 className="text-lg md:text-xl font-bold mb-1">{plan.name}</h3>
                <p className={`text-xs md:text-sm mb-6 ${plan.featured ? 'text-white/90' : 'text-gray-600'}`}>
                  {plan.subtitle}
                </p>

                <div className="flex items-baseline gap-2 mb-6 md:mb-8">
                  <span className="text-4xl md:text-5xl font-bold">${plan.price}</span>
                  <span className={`text-sm ${plan.featured ? 'text-white/90' : 'text-gray-600'}`}>/month</span>
                </div>

                <button
                  className={`w-full cursor-pointer ${plan.buttonColor} ${plan.buttonText} py-3 px-6 rounded-full font-semibold text-sm md:text-base mb-8 transition-colors`} onClick={() => setPopupOpen(true)}
                >
                  Get Price Estimate
                </button>

                <ul className="space-y-3 md:space-y-4">
                  {plan.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className={`flex items-start gap-3 text-sm md:text-base ${plan.featured ? 'text-white' : 'text-gray-700'
                        }`}
                    >
                      <Check
                        className={`w-5 h-5 flex-shrink-0 ${plan.featured ? 'text-white' : 'text-purple-600'
                          }`}
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          ))}
        </div>
      </div>
    </section>
  )
}
