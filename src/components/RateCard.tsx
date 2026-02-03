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
    description: "Professional websites & tools for startups, coaches, consultants, and local brands ready to scale.",
    features: [
      "Custom website (5–10 pages)",
      "Booking / lead capture",
      "Basic SEO & Google setup",
      "Mobile-first design",
      "30-day support",
    ],
    gradient: "from-amber-50 to-orange-50",
    accent: "text-amber-700",
    cta: "Get Quote",
    mailto: "mailto:varlengatia@gmail.com?subject=Website%20Quote%20Request%20-%20Small%20%26%20Growing%20Business&body=Hi%20Varlene,%0A%0AI%20would%20like%20a%20quote%20for%20a%20website%20for%20my%20small/growing%20business.%0A%0ABusiness%20name:%20%0AServices%20needed:%20%0ABudget%20range:%20%0A%0AThank%20you!",
  },
  {
    title: "Schools & Educational Institutions",
    icon: <School className="h-12 w-12" />,
    description: "Modern portals, parent dashboards, e-learning, and admission systems.",
    features: [
      "Student & parent portals",
      "Online admission & fees",
      "Events calendar + newsletter",
      "Staff dashboards",
      "System integration",
    ],
    gradient: "from-blue-50 via-sky-50 to-cyan-50",
    accent: "text-blue-700",
    cta: "Discuss Solution",
    mailto: "mailto:varlengatia@gmail.com?subject=School%20Portal%20%26%20System%20Enquiry&body=Hi%20Varlene,%0A%0AI%20am%20interested%20in%20a%20digital%20solution%20for%20my%20school/educational%20institution.%0A%0AName%20of%20institution:%20%0ANumber%20of%20students/staff:%20%0ASpecific%20needs:%20(portals,%20admissions,%20fees,%20etc.)%0A%0AThank%20you!",
  },
  {
    title: "Hotels, Resorts & Hospitality",
    icon: <Hotel className="h-12 w-12" />,
    description: "Booking engines, guest platforms, and restaurant integrations.",
    features: [
      "Direct booking engine",
      "Channel manager sync",
      "Guest CRM & loyalty",
      "Restaurant/spa modules",
      "Multi-language support",
    ],
    gradient: "from-emerald-50 via-teal-50 to-green-50",
    accent: "text-emerald-700",
    cta: "Request Proposal",
    mailto: "mailto:varlengatia@gmail.com?subject=Hospitality%20Digital%20Solution%20Proposal%20-%20Hotel/Resort&body=Hi%20Varlene,%0A%0AI%20would%20like%20a%20proposal%20for%20a%20digital%20solution%20for%20my%20hotel/resort.%0A%0AProperty%20name:%20%0ANumber%20of%20rooms:%20%0AKey%20needs:%20(booking%20engine,%20guest%20CRM,%20restaurant%20booking,%20etc.)%0A%0AThank%20you!",
  },
  {
    title: "Government & Large Institutions",
    icon: <Building2 className="h-12 w-12" />,
    description: "Secure, high-traffic platforms with compliance, workflows, and integrations.",
    features: [
      "ISO 27001 & GDPR compliant",
      "E-services & document portals",
      "Multi-role access & logs",
      "System integration (HL7/FHIR/ERP)",
      "Dedicated support & SLAs",
    ],
    gradient: "from-indigo-50 via-purple-50 to-violet-50",
    accent: "text-indigo-700",
    cta: "Request Proposal",
    mailto: "mailto:varlengatia@gmail.com?subject=Institutional%20Project%20Proposal%20-%20Government%20/%20Large%20Organization&body=Hi%20Varlene,%0A%0AI%20am%20interested%20in%20a%20secure%20digital%20platform%20for%20our%20government/large%20institution.%0A%0AOrganization%20name:%20%0AScope%20of%20project:%20%0ACompliance%20requirements:%20%0A%0AThank%20you!",
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