import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function SolutionBriefSection() {
  return (
    <section className="w-full bg-white py-16">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Solution Brief */}
          <div className="bg-blue-900 text-white p-8 md:p-12 rounded-lg relative overflow-hidden">
            <div className="absolute inset-0 bg-blue-900/90 z-0"></div>
            <div className="relative z-10">
              <span className="section-label text-blue-300">SOLUTION BRIEF</span>

              <h2 className="heading-lg mb-6">
                Engineer the next generation of connected and autonomous electric vehicles
              </h2>

              <Link href="#" className="inline-flex items-center text-white font-medium mt-4 hover:underline">
                Discover how <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>

            <Image
              src="/public/3rd.jpg"
              alt="Electric vehicle technology"
              width={300}
              height={200}
              className="absolute -right-20 bottom-0 opacity-20 z-0"
            />
          </div>

          {/* Right Solution Brief */}
          <div className="bg-blue-900 text-white p-8 md:p-12 rounded-lg relative overflow-hidden">
            <div className="absolute inset-0 bg-blue-900/90 z-0"></div>
            <div className="relative z-10">
              <span className="section-label text-blue-300">SOLUTION BRIEF</span>

              <h2 className="heading-lg mb-6">
                Reimagine digital transformation for next generation digital enterprise
              </h2>

              <Link href="#" className="inline-flex items-center text-white font-medium mt-4 hover:underline">
                Discover how <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>

            <Image
              src="/public/5th.jpg"
              alt="Digital transformation visualization"
              width={300}
              height={200}
              className="absolute -right-20 bottom-0 opacity-20 z-0"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

