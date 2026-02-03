"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Code2, LucideHeading6 } from "lucide-react"

export default function Hero() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center bg-linear-to-br from-[#0a1628] via-[#0f1f3a] to-[#1a2844] py-16 md:py-20"
    >
      <div className="max-w-5xl mx-auto px-5 sm:px-8 text-center">
        {/* Icon – Smaller & Tighter */}
        <div className="flex justify-center mb-6">
          <div className="p-4 bg-pink-500/10 rounded-full backdrop-blur-sm border border-pink-500/20">
            <Code2 className="h-10 w-10 text-pink-400" />
          </div>
        </div>

        {/* Title – Reduced Sizes, Better Flow */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight">
          <span className="font-playfair block sm:inline">Versatile</span>{" "}
          <span className="font-runalto text-white-200">Full-Stack Developer</span>
        </h1>

        {/* Subtitle – Compact & Readable */}
        <h5 className="mt-6 text-base sm:text-lg md:text-xl text-gray-300 font-light max-w-3xl mx-auto leading-relaxed">
          Building elegant, robust & scalable web experiences; from database architecture to
          pixel-perfect, luxurious interfaces. High-end Next.js solutions for startups,
          e-commerce, agencies, and businesses of all kinds.
        </h5>

        {/* Buttons – Closer Together, Smaller Padding */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-10">
          <Button
            onClick={() => scrollToSection("solutions")}
            size="lg"
            className="bg-linear-to-r from-pink-600 to-rose-600 hover:from-pink-700 hover:to-rose-700 text-white px-8 py-6 text-base font-medium shadow-xl shadow-pink-900/30 rounded-full"
          >
            View Solutions
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>

          <Button
            onClick={() => scrollToSection("projects")}
            size="lg"
            variant="outline"
            className="bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border border-white/30 px-8 py-6 text-base font-medium rounded-full"
          >
            Explore My Work
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        {/* Subtle Scroll Hint */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-5 h-5 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  )
}