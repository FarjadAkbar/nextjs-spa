export default function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Share',
      highlight: 'Your Menu',
      description: 'Upload your menu, set create your "Digital" account and map your POS.'
    },
    {
      number: '02',
      title: 'We Build',
      highlight: 'Your Apps',
      description: 'Your "Detailed branded website and iOS are pre-created and configured.'
    },
    {
      number: '03',
      title: 'Go Live &',
      highlight: 'Get Paid',
      description: 'Customers start ordering, "Trigger" collects, "Trigger" gets paid immediately.'
    }
  ]

  return (
    <section className="bg-white py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        {/* Section Header */}
        <div className="mb-4 md:mb-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-2">
            How It <span className="text-purple-600">Work</span>
          </h2>
          <p className="text-sm md:text-base text-gray-600">
            Three Simple Steps to Get Started
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {steps.map((step) => (
            <div key={step.number} className="rounded-lg border border-gray-200 p-6 md:p-8 bg-white hover:shadow-lg transition-shadow relative">
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-purple-700 flex items-center justify-center flex-shrink-0 mb-10 md:mb-20 ml-auto">
                <span className="text-xl md:text-2xl font-bold text-white">{step.number}</span>
              </div>

              <h3 className="text-left text-base md:text-xl font-semibold mb-3 md:mb-4">
                {step.title}
                <span className="text-purple-700"> {step.highlight}</span>
              </h3>

              {/* Description */}
              <p className="text-left text-gray-600 text-xs md:text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
