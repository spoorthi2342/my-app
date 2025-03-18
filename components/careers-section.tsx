import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function CareersSection() {
  return (
    <section className="w-full bg-gradient-to-r from-purple-700 to-indigo-700 text-white">
      <div className="grid md:grid-cols-2">
        {/* Left side - People working */}
        <div className="relative h-[400px] md:h-auto">
          <Image
            src="/placeholder.svg?height=800&width=800"
            alt="Team members collaborating"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent"></div>
        </div>

        {/* Right side - Content */}
        <div className="p-8 md:p-16 flex flex-col justify-center">
          <span className="section-label text-purple-200">CAREERS</span>

          <h2 className="heading-lg mb-6 text-center">
            Bigger challenges,
            <br />
            Better opportunities.
          </h2>

          <p className="text-lg mb-8 max-w-xl">
            Our team of more than 12500+ global innovators is engineering sustainable products of the future and
            reimagining the digital enterprise of tomorrow. Do you want to be part of this ingenuity in setting new
            standards?
          </p>

          <div className="mb-8">
            <p className="text-lg font-medium">#ComeJoinUs in #EngineeringABetterWorld</p>
          </div>

          <Link href="#" className="inline-flex items-center text-white font-medium hover:underline">
            Explore career opportunities <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}

