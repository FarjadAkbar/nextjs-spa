import Image from "next/image";
import en from '@/locales/en.json'

export default function DriveOrders() {
  const { title, description, list } = en.driveOrders
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-purple-50 to-blue-50  w-full">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="flex flex-col gap-6">
            <h2 className="text-2xl md:text-4xl font-semibold leading-tight"
            dangerouslySetInnerHTML={{ __html: title }}
            />
            <p className="text-gray-600 text-lg leading-relaxed">
              {description}
            </p>
            <ul className="space-y-1">
              {
                list.map((item, index) => (
                  <li key={index} className="flex gap-3">
                    <span className="text-purple-600 font-bold text-xl">•</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))
              }
            </ul>
          </div>

          {/* Right Image */}
          <div className="flex justify-center">
            <Image
                src="/drive-more.png"
                alt="Drive Orders"
                width={750}
                height={750}
              />
          </div>
        </div>
      </div>
    </section>
  )
}
