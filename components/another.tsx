export default function BusinessChallengesSection() {
    return (
      <section className="w-full py-16 md:py-24 border-t border-b border-blue-100">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="col-span-1">
              <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-8">Engineering better business</h2>
            </div>
  
            <div className="col-span-2 grid md:grid-cols-2 gap-x-12 gap-y-6">
              <div className="space-y-6">
                <p className="text-lg text-gray-700">
                  Find out how we can solve your biggest business challenges across automotive, industrial heavy machinery
                  and aerospace industries.
                </p>
  
                <ul className="space-y-4">
                  <ChallengeItem text="Develop more competitive products and solutions" />
                  <ChallengeItem text="Reduce product time to market" />
                  <ChallengeItem text="Optimize product development costs" />
                  <ChallengeItem text="Enable the electrification of your product portfolio" />
                </ul>
              </div>
  
              <div className="space-y-6">
                <ul className="space-y-4 mt-12 md:mt-0">
                  <ChallengeItem text="Improve product development process" />
                  <ChallengeItem text="Improve customer experience" />
                  <ChallengeItem text="Integrate disparate, legacy systems" />
                  <ChallengeItem text="Improve product quality" />
                  <ChallengeItem text="Improving prediction accuracy" />
                  <ChallengeItem text="Enable end-to-end visibility across the product lifecycle" />
                  <ChallengeItem text="Re-skill workforce in new skillsets" />
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  function ChallengeItem({ text }: { text: string }) {
    return (
      <li className="flex items-start">
        <span className="text-blue-500 mr-3 font-light">/</span>
        <span className="text-gray-800">{text}</span>
      </li>
    )
  }
  
  