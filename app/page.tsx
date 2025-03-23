import HeroSection from "@/components/hero-section"
import SolutionBriefSection from "@/components/solution-brief-section"
import CareersSection from "@/components/careers-section"
import InvestorRelationsSection from "@/components/investor-relations-section"
import ManifestoSection from "@/components/manifesto-section"
import BusinessChallengesSection from "@/components/business-challenges-section"
import IndustriesSection from "@/components/industries-section"
import PartnershipsSection from "@/components/partnership-section"
import ContactSection from "@/components/contact-section"
import Navbar from "@/components/navbar"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <SolutionBriefSection />
      <CareersSection />
      <InvestorRelationsSection />
      <ManifestoSection />
      <BusinessChallengesSection />
      <IndustriesSection />
      <PartnershipsSection />
      <ContactSection />
    </main>
  )
}

