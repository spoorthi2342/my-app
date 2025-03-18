import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function PartnershipsSection() {
  return (
    <section className="w-full py-16 md:py-24 border-t border-b border-purple-100">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-8">Better partnerships</h2>
          </div>

          <div>
            <p className="text-lg text-gray-700 mb-8">
              We're collaborating with the most innovative technology companies across the world to deliver better value
              and efficiency to our customers.
            </p>

            <Link href="#" className="inline-flex items-center text-blue-600 font-medium hover:underline">
              Explore partnerships <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-5 gap-8">
          {/* Partner logos */}
          <div className="bg-gray-50 p-6 flex items-center justify-center rounded-lg">
            <div className="h-12 w-24 bg-gray-200 rounded"></div>
          </div>
          <div className="bg-gray-50 p-6 flex items-center justify-center rounded-lg">
            <div className="h-12 w-24 bg-gray-200 rounded"></div>
          </div>
          <div className="bg-gray-50 p-6 flex items-center justify-center rounded-lg">
            <div className="h-12 w-24 bg-gray-200 rounded"></div>
          </div>
          <div className="bg-gray-50 p-6 flex items-center justify-center rounded-lg">
            <div className="h-12 w-24 bg-gray-200 rounded"></div>
          </div>
          <div className="bg-gray-50 p-6 flex items-center justify-center rounded-lg">
            <div className="h-12 w-24 bg-gray-200 rounded"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

