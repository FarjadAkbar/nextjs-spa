import { Quote } from 'lucide-react'

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      text: "“Within 3 months of using Invisalead, we saw a 3x increase in new patient bookings. The automation alone saved us hours every week.”",
      name: "Petro Milosydi",
      role: "on what he learned when",
    },
    {
      id: 2,
      text: "“Within 3 months of using Invisalead, we saw a 3x increase in new patient bookings. The automation alone saved us hours every week.”",
      name: "Petro Milosydi",
      role: "on what he learned when",
    },
    {
      id: 3,
      text: "“Within 3 months of using Invisalead, we saw a 3x increase in new patient bookings. The automation alone saved us hours every week.”",
      name: "Petro Milosydi",
      role: "on what he learned when",
    },
    {
      id: 4,
      text: "“Within 3 months of using Invisalead, we saw a 3x increase in new patient bookings. The automation alone saved us hours every week.”",
      name: "Petro Milosydi",
      role: "on what he learned when",
    },
  ]

  return (
    <section className="py-16 md:py-20 px-4 md:px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-2xl md:text-3xl font-bold mb-12 md:mb-16">
          Our <span className="text-purple-600">Testimonials</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="group bg-gray-50 p-4 md:p-6 rounded-lg transition-colors duration-500 hover:bg-purple-600"
            >
              <Quote className="w-10 h-10 md:w-12 md:h-12 text-purple-600 mb-4 md:mb-6 fill-purple-600 group-hover:text-white group-hover:fill-white transition-colors duration-500" />
              <p className="text-gray-700 text-xs md:text-sm mb-4 md:mb-6 leading-relaxed group-hover:text-white transition-colors duration-500">
                {testimonial.text}
              </p>
              <div>
                <p className="font-semibold text-gray-900 text-sm group-hover:text-white transition-colors duration-500">{testimonial.name}</p>
                <p className="text-gray-500 text-xs group-hover:text-white transition-colors duration-500">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
