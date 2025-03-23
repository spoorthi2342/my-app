import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function InvestorRelationsSection() {
  return (
    <section className="w-full bg-white">
      <div className="grid md:grid-cols-2">
        {/* Left side - Business people */}
        <div className="relative h-[400px] md:h-auto">
          <Image
            src="/public/5th.jpg"
            alt="Business professionals in discussion"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-black/30 to-transparent"></div>
        </div>

        {/* Right side - Content */}
        <div className="p-8 md:p-16 flex flex-col justify-center">
          <span className="section-label text-indigo-600">INVESTOR RELATIONS</span>

          <h2 className="heading-lg mb-6">You know better when you see it</h2>

          <p className="text-lg mb-8 max-w-xl">
            We deliver sustainable turnkey product engineering and digital transformation solutions for our clients,
            which generate profitable growth and help us deliver better returns for our investors.
          </p>

          <Link href="#" className="inline-flex items-center text-indigo-600 font-medium hover:underline">
            Explore investor relations <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}

