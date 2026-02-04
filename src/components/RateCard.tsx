"use client"

import { Check, ArrowRight, Building2, School, Hotel, Store } from "lucide-react"
import { Button } from "@/components/ui/button"

// Define the shape of each service item
interface Service {
  title: string
  icon: React.ReactNode
  description: string
  features: string[]
  gradient: string
  accent: string
  cta: string
  mailto: string
}

const services: Service[] = [
  {
    title: "Small & Growing Businesses",
    icon: <Store className="h-12 w-12" />,
    description: "Build a strong online presence that turns visitors into loyal customers while you sleep.",
    features: [
      "Value Proposition: Professional sites designed to convert leads into sales.",
      "Custom website design tailored to your brand",
      "Automated customer inquiry forms", 
      "Found on Google (Search Optimization)", 
      "Smartphone-optimized experience",
      "One month of technical support",
    ],
    gradient: "from-amber-50 to-orange-50",
    accent: "text-amber-700",
    cta: "Start Growing",
    mailto: "mailto:varlengatia@gmail.com?subject=Growth%20Website%20Enquiry&body=Hi%20Varlene...",
  },
  {
    title: "Schools & Educational Institutions",
    icon: <School className="h-12 w-12" />,
    description: "Streamline your administration with a modern hub for students, parents, and staff.",
    features: [
      "Value Proposition: A unified digital home for your school's community.",
      "Secure Student & Parent portals",
      "Digital Admission & Fee management",
      "Interactive Events & News updates",
      "Private Staff management area",
      "Easy sync with existing systems",
    ],
    gradient: "from-blue-50 via-sky-50 to-cyan-50",
    accent: "text-blue-700",
    cta: "Modernize My School",
    mailto: "mailto:varlengatia@gmail.com?subject=School%20System%20Enquiry&body=Hi%20Varlene...",
  },
  {
    title: "Hotels, Resorts & Hospitality",
    icon: <Hotel className="h-12 w-12" />,
    description: "Provide a 5-star digital guest experience from first click to final check-out.",
    features: [
      "Value Proposition: Increase direct bookings and save on third-party fees.",
      "Direct room booking system",
      "Automatic sync with booking sites", 
      "Guest history & loyalty tracking", 
      "Restaurant & Spa reservation links",
      "Welcoming guests in any language", 
    ],
    gradient: "from-emerald-50 via-teal-50 to-green-50",
    accent: "text-emerald-700",
    cta: "Boost My Bookings",
    mailto: "mailto:varlengatia@gmail.com?subject=Hospitality%20Solution%20Enquiry&body=Hi%20Varlene...",
  },
  {
    title: "Government & Large Institutions",
    icon: <Building2 className="h-12 w-12" />,
    description: "Secure, reliable platforms designed for high traffic and complex public services.",
    features: [
      "Value Proposition: Trustworthy infrastructure that scales with your citizens.",
      "International Data Security standards", 
      "Online citizen service portals",
      "Strict access controls & logs",
      "Integration with existing databases",
      "Dedicated high-priority support",
    ],
    gradient: "from-indigo-50 via-purple-50 to-violet-50",
    accent: "text-indigo-700",
    cta: "Request Proposal",
    mailto: "mailto:varlengatia@gmail.com?subject=Institutional%20Project%20Enquiry&body=Hi%20Varlene...",
  },
]

export default function RateCard() {
  return (
    <section id="pricing" className="py-16 bg-[#fdfaf7]">
      <div className="px-5 sm:px-8 lg:px-10">
        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-[#0a1628] font-semibold uppercase tracking-wide text-sm font-montserrat">
            Industry Solutions
          </p>
          <h2 className="text-3xl md:text-4xl font-run-alto text-gray-900 mb-4">
            Tailored Digital Products
          </h2>
          <p className="text-base text-gray-700 max-w-3xl mx-auto font-montserrat">
            Secure, scalable solutions built for your sector.
          </p>
          <div className="mt-4 inline-block px-5 py-2 bg-white/70 rounded-full border border-gray-200 text-sm font-montserrat text-gray-600">
            6 projects/quarter • Next: Jan 2026
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white rounded-2xl shadow-lg overflow-hidden relative"
            >
              <div className={`absolute inset-0 bg-linear-to-br ${service.gradient} opacity-20`} />

              <div className="relative p-6 md:p-7">
                <div className={`inline-flex p-4 rounded-full bg-white shadow mb-5 ${service.accent}`}>
                  {service.icon}
                </div>

                <h3 className="text-2xl md:text-3xl font-run-alto text-gray-900 mb-3">
                  {service.title}
                </h3>

                <p className="text-sm md:text-base text-gray-600 mb-6 font-montserrat leading-snug">
                  {service.description}
                </p>

                <ul className="space-y-3 mb-7 font-montserrat">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3 text-gray-700 text-sm">
                      <Check className={`h-5 w-5 shrink-0 mt-0.5 ${service.accent}`} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  asChild
                  className="w-full py-5 text-sm md:text-base font-medium rounded-xl font-montserrat bg-gray-900 hover:bg-gray-800 text-white shadow-md transition-all"
                >
                  <a href={service.mailto}>
                    {service.cta}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Final CTA */}
        <div className="text-center mt-12 pt-10 border-t border-gray-200 font-montserrat text-sm">
          <h3 className="text-2xl font-run-alto text-gray-900 mb-3">
            Ready to Begin?
          </h3>
          <p className="text-gray-600 mb-2">
            Click a card to email project details — replies within 24 hours.
          </p>
          <p className="text-[#0a1628] font-medium">
            Let's create something great.
          </p>
        </div>
      </div>
    </section>
  )
}