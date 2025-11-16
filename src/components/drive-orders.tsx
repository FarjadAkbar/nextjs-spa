import Image from "next/image";

export default function DriveOrders() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="flex flex-col gap-6">
            <h2 className="text-2xl md:text-4xl font-semibold leading-tight">
              We Help You{' '}
              <span className="text-purple-600">Drive More</span><br/>
              {' '}Direct Orders
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              When you launch with Barakah, you also get a marketing kit to help customers switch from third-party apps to your own.
            </p>
            <ul className="space-y-1">
                <li className="flex gap-3">
                    <span className="text-purple-600 font-bold text-xl">•</span>
                    <span className="text-gray-700">Table stickers with QR codes for quick reordering</span>
                </li>
                <li className="flex gap-3">
                    <span className="text-purple-600 font-bold text-xl">•</span>
                    <span className="text-gray-700">“Order Direct, Support Local” counter signs</span>
                </li>
                <li className="flex gap-3">
                    <span className="text-purple-600 font-bold text-xl">•</span>
                    <span className="text-gray-700">Window stickers for takeout visibility</span>
                </li>
                <li className="flex gap-3">
                    <span className="text-purple-600 font-bold text-xl">•</span>
                    <span className="text-gray-700">Delivery bag inserts for Uber Eats / DoorDash orders promoting your direct app</span>
                </li>
                <li className="flex gap-3">
                    <span className="text-purple-600 font-bold text-xl">•</span>
                    <span className="text-gray-700">Printable flyers and social media templates</span>
                </li>
                <li className="flex gap-3">
                    <span className="text-purple-600 font-bold text-xl">•</span>
                    <span className="text-gray-700">Order forms, banners (paid digital for the moment)</span>
                </li>
                <li className="flex gap-3">
                    <span className="text-purple-600 font-bold text-xl">•</span>
                    <span className="text-gray-700">WhatsApp stickers for customer outreach</span>
                </li>
                <li className="flex gap-3">
                    <span className="text-purple-600 font-bold text-xl">•</span>
                    <span className="text-gray-700">Flyers, posters & social media templates</span>
                </li>
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
