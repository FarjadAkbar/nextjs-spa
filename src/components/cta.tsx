import { url } from "inspector";
import { Button } from "./ui/button";

export default function CTA() {
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
          Start Your Free Trial Today
        </h2>
        <p className="text-base md:text-lg text-gray-100 mb-8">
          See how easy it is to own your customer relationships and keep every dollar you earn.
        </p>
         <Button className="mx-auto rounded-full bg-emerald-400 px-6 md:px-8 py-2 md:py-3 text-white hover:bg-emerald-500 transition-colors flex items-center gap-2 text-sm md:text-base">
            Get Free Trial
            <span className="ml-3">→</span>
          </Button>
      </div>
    </section>
  )
}
