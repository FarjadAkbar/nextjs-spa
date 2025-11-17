export default function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Share',
      highlight: 'Your Menu',
      image: "/how-it-work/hover-1.png",
      description: 'Send us your menu. We create your **Stripe** account and map your POS.'
    },
    {
      number: '02',
      title: 'We Build',
      highlight: 'Your Apps',
      image: "/how-it-work/hover-2.png",
      description: 'Your **custom-branded website and iOS app** are created and configured.'
    },
    {
      number: '03',
      title: 'Go Live &',
      highlight: 'Get Paid',
      image: "/how-it-work/hover-3.png",
      description: 'Customers start ordering. **Payouts go to your Stripe**; orders **print on your POS'
    }
  ]

  return (
    <section className="bg-white py-16 md:py-20 w-full">
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
            <div 
              key={step.number} 
              className="group relative rounded-lg border border-gray-200 p-6 md:p-8 bg-white overflow-hidden hover:shadow-lg transition-shadow"
            >
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ backgroundImage: `url(${step.image})` }}
              />

              <div className="relative z-10">
                {/* Counter */}
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-purple-700 group-hover:bg-white flex items-center justify-center flex-shrink-0 mb-10 md:mb-20 ml-auto transition-colors duration-500">
                  <span className="text-xl md:text-2xl font-bold text-white group-hover:text-purple-700 transition-colors duration-500">{step.number}</span>
                </div>

                {/* Title */}
                <h3 className="text-left text-base md:text-xl font-semibold mb-3 md:mb-4 group-hover:text-white transition-colors duration-500">
                  {step.title}
                  <span className="text-purple-700 group-hover:text-white transition-colors duration-500"> {step.highlight}</span>
                </h3>

                {/* Description */}
                <p className="text-left text-gray-600 text-xs md:text-sm leading-relaxed group-hover:text-white transition-colors duration-500">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
