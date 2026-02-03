"use client"

import { Code, Database, Server, Zap } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"

const skills = [
  {
    icon: Code,
    title: "Frontend Development",
    description: "Next.js • React • TypeScript • Tailwind • Framer Motion",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Server,
    title: "Robust Backend APIs",
    description: "NestJS • Node.js • Express • JWT • REST/GraphQL",
    color: "from-purple-500 to-indigo-500",
  },
  {
    icon: Database,
    title: "Data & Systems",
    description: "PostgreSQL • MongoDB • Prisma • Supabase • Payments",
    color: "from-pink-500 to-rose-500",
  },
  {
    icon: Zap,
    title: "DevOps & Performance",
    description: "Docker • CI/CD • Vercel • Lighthouse • Optimization",
    color: "from-orange-500 to-amber-500",
  },
]

export default function About() {
  return (
    <section
      id="about"
      className="py-20 lg:py-28 relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(10, 22, 40, 0.97), rgba(10, 22, 40, 0.97)), url('https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/ec37be07-10ec-4aeb-a294-9a531caa5de4/generated_images/abstract-technology-background-with-circ-d7db4b05-20251111045319.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Very subtle overlay glow */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0 bg-linear-to-br from-purple-600/20 to-blue-600/20" />
      </div>

      <div className="max-w-6xl mx-auto px-6 sm:px-8 relative z-10">
        {/* Title + Description – Smaller & More Elegant */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          {/* Runalto Title – Reduced but still stunning */}
          <h2 className="font-runalto text-4xl sm:text-5xl md:text-6xl text-white tracking-tight leading-none mb-6">
            About Me
          </h2>

          {/* Montserrat Paragraph – Light, airy, refined */}
          <p className="font-montserrat text-base sm:text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed opacity-90">
            Full-Stack Developer crafting fast, secure, and visually captivating applications.
            From elegant Next.js frontends to rock-solid NestJS backends. I build with precision,
            performance, and a touch of luxury.
          </p>
        </motion.div>

        {/* Compact & Elegant Skill Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="group"
            >
              <Card className="h-full bg-slate-900/40 backdrop-blur-xl border border-white/10 hover:border-white/25 transition-all duration-500">
                <CardContent className="p-6 text-center">
                  {/* Smaller Icon */}
                  <div className={`inline-flex p-3 rounded-xl bg-linear-to-br ${skill.color} mb-5 shadow-lg`}>
                    <skill.icon className="h-7 w-7 text-white" />
                  </div>

                  {/* Playfair Italic Title in Tiny Glass Badge */}
                  <div className="mb-4">
                    <span className="inline-block px-3.5 py-1.5 bg-white/5 backdrop-blur-md border border-white/15 rounded-full">
                      <h3 className="font-playfair italic text-sm sm:text-base text-pink-100 tracking-wider">
                        {skill.title}
                      </h3>
                    </span>
                  </div>

                  {/* Montserrat Description – Small & Clean */}
                  <p className="font-montserrat text-xs sm:text-sm text-gray-400 leading-relaxed group-hover:text-gray-200 transition-colors">
                    {skill.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}