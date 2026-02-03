"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink } from "lucide-react"
import Image from "next/image"

const projects = [
  { title: "Elevate With Alice",           description: "Premium etiquette & leadership academy", tags: ["Next.js", "Framer Motion"], url: "https://www.elevatewithalice.com/", image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=1200&h=800&fit=crop&auto=format&q=80" },
  { title: "Woman Elevate 2025",           description: "Signature luxury wellness retreat",      tags: ["React", "Event Platform"],   url: "https://www.elevatewithalice.com/woman-elevate-2025", image: "https://images.unsplash.com/photo-1651108066164-c0e1f655aa1f?w=1200&h=800&fit=crop&auto=format&q=80" },
  { title: "Reset Mastermind",             description: "Strategy workshop for visionary founders", tags: ["Next.js", "Coaching"],       url: "https://www.elevatewithalice.com/reset-mastermind", image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=800&fit=crop&auto=format&q=80" },
  { title: "Affluent Ladies Collective",   description: "Exclusive membership & private coaching", tags: ["Membership", "Branding"],    url: "https://www.elevatewithalice.com/affluent-ladies", image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&h=800&fit=crop&auto=format&q=80" },
  { title: "Trizah Mudenga • Fitness",     description: "Elegant wellness coach portfolio",       tags: ["Next.js", "Portfolio"],      url: "https://www.tmfitness.co.ke/", image: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?w=1200&h=800&fit=crop&auto=format&q=80" },
  { title: "Fabulous Founder Program",     description: "Magnetic personal branding course",      tags: ["Branding", "Leadership"],    url: "https://www.elevatewithalice.com/faboulous-founder", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1200&h=800&fit=crop&auto=format&q=80" },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-[#0a0e17]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Compact Header */}
        <div className="text-center mb-12">
          <h2 className="font-runalto text-4xl sm:text-5xl text-white tracking-tight">
            Selected Work
          </h2>
          <p className="font-montserrat text-base text-gray-400 mt-3">
            Elegant digital experiences for visionary brands
          </p>
        </div>

        {/* Tight 3-column grid — all 6 projects */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <a
              key={project.title}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <Card className="h-full bg-white/6 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden shadow-lg hover:shadow-pink-500/20 transition-all duration-500 group-hover:-translate-y-2">
                {/* Compact image */}
                <div className="relative h-48">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent" />
                </div>

                <CardContent className="p-5">
                  <h3 className="font-runalto text-lg text-white leading-tight group-hover:text-pink-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="font-montserrat text-sm text-gray-400 mt-2 line-clamp-2">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="font-montserrat text-xs px-2 py-0.5 bg-white/10 text-gray-300 border border-white/15">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="mt-4 flex items-center text-pink-400 font-montserrat text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    View Project
                    <ExternalLink className="ml-1.5 h-3.5 w-3.5" />
                  </div>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>

        <p className="text-center mt-12 font-montserrat text-sm text-gray-500 italic tracking-wider">
          More projects loading. <br />Taking bookings for 2026 Q1. Inquiries welcome
        </p>
      </div>
    </section>
  )
}