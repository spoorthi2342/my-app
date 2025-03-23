import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function ManifestoSection() {
  return (
    <section className="w-full bg-gradient-to-r from-purple-500 to-indigo-500 text-white">
      <div className="grid md:grid-cols-2">
        {/* Left side - Content */}
        <div className="p-8 md:p-16 flex flex-col justify-center relative overflow-hidden">
          <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-indigo-600/50 to-transparent"></div>
          <div className="absolute -bottom-20 -left-20 w-64 h-64 border-t-2 border-l-2 border-indigo-300/30 transform rotate-45"></div>

          <div className="relative z-10">
            <span className="section-label text-purple-200">MANIFESTO</span>

            <h2 className="heading-lg mb-6">Getting better and better every day</h2>

            <p className="text-lg mb-6">
              We're fast transitioning toward an autonomous, connected, electric and shared future. You need an
              engineering partner who can help you navigate new challenges and opportunities every single day.
            </p>

            <p className="text-lg mb-8">
              From delivering discrete outcomes to end-to-end product development, we have the experience and expertise
              to understand what better looks like – and our turnkey solutions help you realize your goals faster.
            </p>

            <Link href="#" className="btn-primary bg-white text-indigo-600 hover:bg-gray-100">
              Learn how we are engineering a better world <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>

        {/* Right side - Images */}
        <div className="grid grid-cols-1 grid-rows-2">
          <div className="relative h-[200px] md:h-auto">
            <Image
              src="/public/7th.jpg"
              alt="Person with AR glasses"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative h-[200px] md:h-auto">
            <Image src="/public/im1.jpg" alt="Person in car" fill className="object-cover" />
          </div>
        </div>
      </div>
    </section>
  )
}

