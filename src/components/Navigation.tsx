"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import Image from "next/image"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsOpen(false)
    }
  }

  const handleNavigation = (path: string) => {
    if (path.startsWith("/")) {
      router.push(path)
      setIsOpen(false)
    } else {
      // Scroll to section on home page
      if (window.location.pathname !== "/") {
        router.push("/")
        setTimeout(() => scrollToSection(path), 100)
      } else {
        scrollToSection(path)
      }
    }
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a1628]/95 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo alone (no text) */}
          <Link href="/" className="flex items-center">
            <div className="relative w-10 h-10 md:w-12 md:h-12">
              <Image
                src="/images/logo2.jpg"           // ← Change this to your actual logo path
                alt="Varlene Ngatia"
                fill
                className="object-contain"
                priority                          // faster loading for navbar
              />
            </div>
          </Link>

          {/* Desktop menu */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              <button
                onClick={() => handleNavigation("home")}
                className="text-white hover:text-orange-400 transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => handleNavigation("about")}
                className="text-white hover:text-orange-400 transition-colors"
              >
                About
              </button>
              <button
                onClick={() => handleNavigation("projects")}
                className="text-white hover:text-orange-400 transition-colors"
              >
                Projects
              </button>
              <button
                onClick={() => handleNavigation("/solutions")}
                className="text-white hover:text-orange-400 transition-colors"
              >
                Solutions
              </button>
              <button
                onClick={() => handleNavigation("contact")}
                className="text-white hover:text-orange-400 transition-colors"
              >
                Contact
              </button>
            </div>
          </div>

          {/* Mobile menu toggle */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="text-white"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-[#0a1628] border-t border-white/10">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <button
              onClick={() => handleNavigation("home")}
              className="block w-full text-left px-3 py-2 text-white hover:bg-white/10 rounded-md"
            >
              Home
            </button>
            <button
              onClick={() => handleNavigation("about")}
              className="block w-full text-left px-3 py-2 text-white hover:bg-white/10 rounded-md"
            >
              About
            </button>
            <button
              onClick={() => handleNavigation("projects")}
              className="block w-full text-left px-3 py-2 text-white hover:bg-white/10 rounded-md"
            >
              Projects
            </button>
            <button
              onClick={() => handleNavigation("/solutions")}
              className="block w-full text-left px-3 py-2 text-white hover:bg-white/10 rounded-md"
            >
              Solutions
            </button>
            <button
              onClick={() => handleNavigation("contact")}
              className="block w-full text-left px-3 py-2 text-white hover:bg-white/10 rounded-md"
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}