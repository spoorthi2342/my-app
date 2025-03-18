import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="relative w-full h-[90vh] overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/placeholder.svg?height=1080&width=1920"
          alt="Aerial view of a car driving through forest"
          fill
          priority
          className="object-cover"
        />
      </div>

      <div className="absolute inset-0 bg-black/30 z-10"></div>

      <div className="relative z-20 container-custom h-full flex flex-col justify-center">
        <div className="max-w-2xl text-white">
          <div className="flex mb-8">
            <div className="flex space-x-2">
              <div className="h-20 w-4 bg-green-400"></div>
              <div className="h-20 w-4 bg-cyan-400"></div>
              <div className="h-20 w-4 bg-orange-400"></div>
            </div>
          </div>

          <h1 className="heading-xl mb-6">
            Engineering <br />a better world
          </h1>

          <p className="text-lg md:text-xl mb-8 max-w-xl">
            We use our deep manufacturing knowledge and expertise in turnkey product development to help our customers
            develop products that are safe, sustainable, and deliver great customer experience. That's better.
          </p>

          <Link href="#" className="btn-primary">
            Discover more <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}

