import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function IndustriesSection() {
  return (
    <section className="w-full py-16 md:py-24 bg-gray-50">
      <div className="container-custom">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Automotive */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900">Automotive</h3>
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Person in car interior"
                fill
                className="object-cover"
              />
            </div>
            <p className="text-gray-700">Navigating the way to a connected, autonomous, shared and electric future.</p>
            <Link href="#" className="inline-flex items-center text-blue-600 font-medium hover:underline">
              Explore Automotive <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>

          {/* Industrial Heavy Machinery */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900">Industrial Heavy Machinery</h3>
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Person operating heavy machinery"
                fill
                className="object-cover"
              />
            </div>
            <p className="text-gray-700">
              Driving improvements to reliability and productivity and, ultimately, profitability.
            </p>
            <Link href="#" className="inline-flex items-center text-blue-600 font-medium hover:underline">
              Explore Industrial Heavy Machinery <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>

          {/* Aerospace */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900">Aerospace</h3>
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Person in airplane"
                fill
                className="object-cover"
              />
            </div>
            <p className="text-gray-700">
              Accelerating the development of new technology and new passenger experiences.
            </p>
            <Link href="#" className="inline-flex items-center text-blue-600 font-medium hover:underline">
              Explore Aerospace <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

