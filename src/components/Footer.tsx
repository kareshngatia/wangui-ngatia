"use client"

import { Mail, Phone } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#0a1628] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">VarleneNgatia</h3>
            <p className="text-gray-400">
              Crafting high-performance,custom digital solutions for businesses, schools, hotels and institutions worldwide.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-400 hover:text-orange-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-orange-400 transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-400 hover:text-orange-400 transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#solutions" className="text-gray-400 hover:text-orange-400 transition-colors">
                  Solutions
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-gray-400">
              <p className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                varlengatia@gmail.com
              </p>
              <p className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                +254 740091331 
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} VarleneNgatia. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}