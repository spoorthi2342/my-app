import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function ContactSection() {
  return (
    <section className="w-full py-16 md:py-24 bg-blue-900 text-white">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's talk</h2>
            <p className="text-lg text-blue-100 mb-8">
              Get in touch today and discover how we can help you engineer a better world
            </p>
          </div>

          <div>
            <form className="space-y-6">
              <div>
                <Input
                  type="text"
                  placeholder="First name"
                  className="bg-transparent border-b border-blue-700 rounded-none px-0 h-12 text-white placeholder:text-blue-300"
                />
              </div>

              <div>
                <Input
                  type="text"
                  placeholder="Last name"
                  className="bg-transparent border-b border-blue-700 rounded-none px-0 h-12 text-white placeholder:text-blue-300"
                />
              </div>

              <div>
                <Input
                  type="email"
                  placeholder="Email"
                  className="bg-transparent border-b border-blue-700 rounded-none px-0 h-12 text-white placeholder:text-blue-300"
                />
              </div>

              <div>
                <Input
                  type="text"
                  placeholder="Company"
                  className="bg-transparent border-b border-blue-700 rounded-none px-0 h-12 text-white placeholder:text-blue-300"
                />
              </div>

              <div>
                <Select>
                  <SelectTrigger className="bg-transparent border-b border-blue-700 rounded-none px-0 h-12 text-white">
                    <SelectValue placeholder="Industry" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="automotive">Automotive</SelectItem>
                    <SelectItem value="aerospace">Aerospace</SelectItem>
                    <SelectItem value="industrial">Industrial Heavy Machinery</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Select>
                  <SelectTrigger className="bg-transparent border-b border-blue-700 rounded-none px-0 h-12 text-white">
                    <SelectValue placeholder="Area of interest" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="product-development">Product Development</SelectItem>
                    <SelectItem value="digital-transformation">Digital Transformation</SelectItem>
                    <SelectItem value="manufacturing">Manufacturing</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="pt-4">
                <Button className="bg-white text-blue-900 hover:bg-blue-50 px-8 py-6 rounded-none">Submit</Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

