// src/components/Banner.tsx

import { useState, useEffect } from 'react'

const Banner = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Calculate mouse position relative to viewport center
      const x = (e.clientX - window.innerWidth / 2) / window.innerWidth
      const y = (e.clientY - window.innerHeight / 2) / window.innerHeight
      setMousePosition({ x, y })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  // Parallax calculation function
  const getParallaxStyle = (intensity: number) => ({
    transform: `translate(${mousePosition.x * intensity}px, ${mousePosition.y * intensity}px)`,
    transition: 'transform 0.2s ease-out'
  })

  return (
    <section className="relative h-screen bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-700 flex items-center justify-center overflow-hidden">
      
      {/* Enhanced Background Pattern with Subtle Parallax */}
      <div className="absolute inset-0 opacity-8">
        <div 
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent transform -skew-y-12"
          style={getParallaxStyle(-8)}
        ></div>
        <div 
          className="absolute inset-0 bg-gradient-to-l from-transparent via-white to-transparent transform skew-y-12"
          style={getParallaxStyle(6)}
        ></div>
      </div>
      
      {/* Professional Corner Accents */}
      <div 
        className="absolute top-0 left-0 w-32 h-32 border-r-2 border-b-2 border-yellow-400 border-opacity-20"
        style={getParallaxStyle(-12)}
      ></div>
      <div 
        className="absolute top-0 right-0 w-32 h-32 border-l-2 border-b-2 border-yellow-400 border-opacity-20"
        style={getParallaxStyle(12)}
      ></div>
      <div 
        className="absolute bottom-0 left-0 w-32 h-32 border-r-2 border-t-2 border-yellow-400 border-opacity-20"
        style={getParallaxStyle(-10)}
      ></div>
      <div 
        className="absolute bottom-0 right-0 w-32 h-32 border-l-2 border-t-2 border-yellow-400 border-opacity-20"
        style={getParallaxStyle(10)}
      ></div>

      {/* Geometric Professional Elements */}
      <div 
        className="absolute top-32 left-20 w-16 h-16 border-2 border-yellow-400 border-opacity-25 rounded-full backdrop-blur-sm"
        style={getParallaxStyle(-14)}
      ></div>
      <div 
        className="absolute top-32 right-20 w-16 h-16 border-2 border-yellow-400 border-opacity-25 rounded-full backdrop-blur-sm"
        style={getParallaxStyle(14)}
      ></div>
      <div 
        className="absolute bottom-32 left-20 w-12 h-12 border-2 border-emerald-300 border-opacity-30 transform rotate-45 backdrop-blur-sm"
        style={getParallaxStyle(-12)}
      ></div>
      <div 
        className="absolute bottom-32 right-20 w-12 h-12 border-2 border-emerald-300 border-opacity-30 transform rotate-45 backdrop-blur-sm"
        style={getParallaxStyle(12)}
      ></div>

      {/* Subtle Ambient Circles */}
      <div 
        className="absolute top-1/4 left-16 w-24 h-24 bg-yellow-400 rounded-full opacity-10 backdrop-blur-sm"
        style={getParallaxStyle(-10)}
      ></div>
      <div 
        className="absolute top-1/4 right-16 w-20 h-20 bg-emerald-600 rounded-full opacity-12 backdrop-blur-sm"
        style={getParallaxStyle(10)}
      ></div>
      <div 
        className="absolute bottom-1/4 left-16 w-28 h-28 bg-white rounded-full opacity-8 backdrop-blur-sm"
        style={getParallaxStyle(-8)}
      ></div>
      <div 
        className="absolute bottom-1/4 right-16 w-24 h-24 bg-yellow-300 rounded-full opacity-12 backdrop-blur-sm"
        style={getParallaxStyle(8)}
      ></div>

      {/* Main Content with Responsive Design */}
      <div 
        className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
        style={getParallaxStyle(2)}
      >
        {/* Enhanced Logo with Responsive Sizing */}
        <div className="mb-6 sm:mb-8">
          <div 
            className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 mx-auto bg-white bg-opacity-20 backdrop-blur-md rounded-full flex items-center justify-center border-4 border-white border-opacity-40 shadow-2xl"
            style={getParallaxStyle(-5)}
          >
            <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center shadow-inner">
              <span className="text-emerald-900 font-bold text-2xl sm:text-3xl lg:text-4xl">I</span>
            </div>
          </div>
        </div>

        {/* Responsive Main Title */}
        <h1 
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 sm:mb-6 tracking-tight leading-tight"
          style={getParallaxStyle(-3)}
        >
          IELTS INSTITUTE
        </h1>
        
        {/* Professional Divider */}
        <div 
          className="w-24 sm:w-32 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent mx-auto mb-4 sm:mb-6"
          style={getParallaxStyle(4)}
        ></div>
        
        {/* Responsive Tagline */}
        <p 
          className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light mb-6 sm:mb-8 text-emerald-100"
          style={getParallaxStyle(-2)}
        >
          Excellence • Innovation • Leadership
        </p>
        
        {/* Responsive Description */}
        <p 
          className="text-base sm:text-lg md:text-xl text-emerald-200 max-w-2xl lg:max-w-3xl mx-auto mb-8 sm:mb-12 leading-relaxed px-4"
          style={getParallaxStyle(3)}
        >
          Since 2014, we have been nurturing minds, fostering innovation, and shaping leaders 
          who transform communities and industries worldwide through excellence in IELTS preparation.
        </p>

        {/* Enhanced Responsive Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 max-w-5xl mx-auto">
          <div 
            className="text-center p-4 bg-emerald-900 bg-opacity-5 backdrop-blur-sm rounded-lg border border-white border-opacity-10"
            style={getParallaxStyle(-4)}
          >
            <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-yellow-400 mb-2">11+</div>
            <div className="text-xs sm:text-sm text-emerald-200">Years of Excellence</div>
          </div>
          <div 
            className="text-center p-4 bg-emerald-900 bg-opacity-5 backdrop-blur-sm rounded-lg border border-white border-opacity-10"
            style={getParallaxStyle(4)}
          >
            <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-yellow-400 mb-2">5K+</div>
            <div className="text-xs sm:text-sm text-emerald-200">Success Stories</div>
          </div>
          <div 
            className="text-center p-4 bg-emerald-900 bg-opacity-5 backdrop-blur-sm rounded-lg border border-white border-opacity-10"
            style={getParallaxStyle(-3)}
          >
            <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-yellow-400 mb-2">50+</div>
            <div className="text-xs sm:text-sm text-emerald-200">Expert Instructors</div>
          </div>
          <div 
            className="text-center p-4 bg-emerald-900 bg-opacity-5 backdrop-blur-sm rounded-lg border border-white border-opacity-10"
            style={getParallaxStyle(3)}
          >
            <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-yellow-400 mb-2">25+</div>
            <div className="text-xs sm:text-sm text-emerald-200">Countries Served</div>
          </div>
        </div>
      </div>

      
      
    </section>
  )
}

export default Banner
