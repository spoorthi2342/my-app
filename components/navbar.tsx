"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronDown, Menu, Search, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white border-b">
      <div className="container-custom flex items-center justify-between h-20">
        <div className="flex items-center">
          <Link href="/" className="mr-8">
            <div className="flex items-center">
              <span className="text-blue-600 font-bold text-2xl">TATA</span>
              <span className="ml-2 text-blue-800 font-medium">TECHNOLOGIES</span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center space-x-1">
            <NavItem label="Industries" />
            <NavItem label="Expertise" />
            <NavItem label="Insights" />
            <NavItem label="Investors" hasDropdown={false} />
            <NavItem label="Join us" />
            <NavItem label="About" />
          </nav>
        </div>

        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="icon" className="hidden md:flex">
            <Search className="h-5 w-5" />
          </Button>

          <div className="hidden md:block relative">
            <Button variant="outline" className="flex items-center gap-1">
              India <ChevronDown className="h-4 w-4" />
            </Button>
          </div>

          <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t">
          <div className="container-custom py-4">
            <nav className="flex flex-col space-y-4">
              <MobileNavItem label="Industries" />
              <MobileNavItem label="Expertise" />
              <MobileNavItem label="Insights" />
              <MobileNavItem label="Investors" />
              <MobileNavItem label="Join us" />
              <MobileNavItem label="About" />
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}

function NavItem({ label, hasDropdown = true }: { label: string; hasDropdown?: boolean }) {
  return (
    <div className="relative group">
      <button className="flex items-center px-3 py-2 text-gray-700 hover:text-blue-600 font-medium">
        {label}
        {hasDropdown && <ChevronDown className="ml-1 h-4 w-4" />}
      </button>
    </div>
  )
}

function MobileNavItem({ label }: { label: string }) {
  return (
    <button className="flex items-center justify-between w-full py-2 text-gray-700 font-medium">
      {label}
      <ChevronDown className="h-4 w-4" />
    </button>
  )
}

