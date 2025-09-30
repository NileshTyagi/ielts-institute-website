// src/components/Navbar.tsx

import { useState } from 'react'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-18">
          {/* Elegant Logo & College Name */}
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gradient-to-br from-emerald-700 to-emerald-800 rounded-lg flex items-center justify-center shadow-md">
              <span className="text-white font-bold text-xl">I</span>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-gray-900 tracking-tight">IELTS Institute</span>
              <span className="text-sm text-emerald-700 font-medium">Excellence • Innovation • Leadership</span>
            </div>
          </div>

          {/* Sophisticated Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-emerald-700 px-3 py-2 font-medium transition-colors">
              Home
            </a>
            <a href="#academics" className="text-gray-700 hover:text-emerald-700 px-3 py-2 font-medium transition-colors">
              Academics
            </a>
            <a href="#admissions" className="text-gray-700 hover:text-emerald-700 px-3 py-2 font-medium transition-colors">
              Admissions
            </a>
            <a href="#research" className="text-gray-700 hover:text-emerald-700 px-3 py-2 font-medium transition-colors">
              Research
            </a>
            <a href="#campus" className="text-gray-700 hover:text-emerald-700 px-3 py-2 font-medium transition-colors">
              Campus Life
            </a>
            <a href="#about" className="text-gray-700 hover:text-emerald-700 px-3 py-2 font-medium transition-colors">
              About
            </a>
            <button className="bg-gradient-to-r from-emerald-700 to-emerald-800 text-white px-6 py-2.5 rounded-full hover:from-emerald-800 hover:to-emerald-900 transition-all duration-200 font-semibold shadow-lg">
              Apply Now
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-emerald-700 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#home" className="block px-3 py-2 text-gray-700 hover:bg-emerald-50 hover:text-emerald-700 rounded-md font-medium">
                Home
              </a>
              <a href="#academics" className="block px-3 py-2 text-gray-700 hover:bg-emerald-50 hover:text-emerald-700 rounded-md font-medium">
                Academics
              </a>
              <a href="#admissions" className="block px-3 py-2 text-gray-700 hover:bg-emerald-50 hover:text-emerald-700 rounded-md font-medium">
                Admissions
              </a>
              <a href="#research" className="block px-3 py-2 text-gray-700 hover:bg-emerald-50 hover:text-emerald-700 rounded-md font-medium">
                Research
              </a>
              <a href="#campus" className="block px-3 py-2 text-gray-700 hover:bg-emerald-50 hover:text-emerald-700 rounded-md font-medium">
                Campus Life
              </a>
              <a href="#about" className="block px-3 py-2 text-gray-700 hover:bg-emerald-50 hover:text-emerald-700 rounded-md font-medium">
                About
              </a>
              <button className="w-full mt-2 bg-gradient-to-r from-emerald-700 to-emerald-800 text-white px-6 py-2.5 rounded-full hover:from-emerald-800 hover:to-emerald-900 transition-all duration-200 font-semibold">
                Apply Now
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
