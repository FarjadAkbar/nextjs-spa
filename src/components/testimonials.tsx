import { Quote } from 'lucide-react'

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      text: "Lorem ipsum dolor sit amet consectetur. Pellentesque sed turpis nibh mattis sit gravida phare nulla.",
      name: "Petro Milosydi",
      role: "Business Owner",
    },
    {
      id: 2,
      text: "Lorem ipsum dolor sit amet consectetur. Pellentesque sed turpis nibh mattis sit gravida phare nulla.",
      name: "Petro Milosydi",
      role: "Business Owner",
    },
    {
      id: 3,
      text: "Lorem ipsum dolor sit amet consectetur. Pellentesque sed turpis nibh mattis sit gravida phare nulla.",
      name: "Petro Milosydi",
      role: "Business Owner",
    },
    {
      id: 4,
      text: "Lorem ipsum dolor sit amet consectetur. Pellentesque sed turpis nibh mattis sit gravida phare nulla.",
      name: "Petro Milosydi",
      role: "Business Owner",
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
            <div key={testimonial.id} className="bg-gray-50 p-4 md:p-6 rounded-lg">
              <Quote className="w-10 h-10 md:w-12 md:h-12 text-purple-600 mb-4 md:mb-6 fill-purple-600" />
              <p className="text-gray-700 text-xs md:text-sm mb-4 md:mb-6 leading-relaxed">
                {testimonial.text}
              </p>
              <div>
                <p className="font-semibold text-gray-900 text-sm">{testimonial.name}</p>
                <p className="text-gray-500 text-xs">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
