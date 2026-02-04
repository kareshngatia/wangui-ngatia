"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Code2 } from "lucide-react"
import Link from "next/link" // IMPORTANT: Add this import

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <section
      id="home"
      className="relative min-h-[85vh] flex flex-col justify-center bg-linear-to-br from-[#0a1628] via-[#0f1f3a] to-[#1a2844] py-12 md:py-16"
    >
      <div className="max-w-5xl mx-auto px-5 sm:px-8 text-center">
        <div className="flex justify-center mb-4">
          <div className="p-3 bg-pink-500/10 rounded-full backdrop-blur-sm border border-pink-500/20">
            <Code2 className="h-8 w-8 text-pink-400" />
          </div>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight">
          <span className="font-playfair block sm:inline">Versatile</span>{" "}
          <span className="font-runalto text-white-200">Full-Stack Developer</span>
        </h1>

        {/* Paragraph: Increased size, Same Font */}
        <h5 className="mt-4 text-lg sm:text-xl md:text-2xl text-gray-300 font-light max-w-3xl mx-auto leading-tight">
          Building elegant, robust & scalable web experiences; from database architecture to
          pixel-perfect, luxurious interfaces. High-end Next.js solutions for startups,
          e-commerce, agencies, and businesses of all kinds.
        </h5>
        
        <p className="mt-4 text-base md:text-lg font-bold text-gray-800 dark:text-gray-200 tracking-tight leading-relaxed font-montserrat italic">
          "Engineering seamless interactions where complex functionality meets effortless usability."
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
          {/* FIXED BUTTON: Now links to the solutions page */}
          <Button
            asChild
            size="lg"
            className="bg-linear-to-r from-pink-600 to-rose-600 hover:from-pink-700 hover:to-rose-700 text-white px-8 py-6 text-base font-medium shadow-xl shadow-pink-900/30 rounded-full cursor-pointer"
          >
            <Link href="/solutions">
              View Solutions
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
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
      </div>
    </section>
  )
}