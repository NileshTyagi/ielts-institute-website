// src/components/Hero.tsx

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-emerald-50 via-white to-emerald-100 min-h-screen flex items-center">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="mb-6">
              <span className="inline-block bg-gradient-to-r from-emerald-100 to-emerald-50 text-emerald-800 px-5 py-2.5 rounded-full text-sm font-semibold border border-emerald-200 border-opacity-50 backdrop-blur-sm shadow-lg">
                Ranked #1 Private Institute 2025
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Where Academic
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-700 via-emerald-600 to-yellow-500">
                {' '}Excellence{' '}
              </span>
              Meets Innovation
            </h1>
            
            {/* Gradient Divider */}
            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent mx-auto lg:mx-0 mb-6"></div>
            
            <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl leading-relaxed">
              A premier institution dedicated to shaping tomorrow's leaders through world-class education, cutting-edge research, and transformative IELTS preparation experiences.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="bg-gradient-to-r from-emerald-700 to-emerald-800 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-emerald-800 hover:to-emerald-900 transform hover:scale-105 transition-all duration-200 shadow-xl hover:shadow-2xl">
                Explore Programs
              </button>
              <button className="bg-white bg-opacity-80 backdrop-blur-sm border-2 border-emerald-700 text-emerald-700 px-8 py-4 rounded-full text-lg font-semibold hover:bg-emerald-50 transition-all duration-200 shadow-lg">
                Schedule Visit
              </button>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative">
            {/* Main Card */}
            <div className="relative bg-gradient-to-br from-white to-emerald-50 bg-opacity-80 backdrop-blur-md rounded-2xl p-8 shadow-2xl border border-white border-opacity-60">
              {/* Campus Excellence Visual */}
              <div className="bg-gradient-to-br from-emerald-700 to-emerald-800 rounded-xl p-8 shadow-lg mb-6 relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent transform -skew-y-12"></div>
                </div>
                
                <div className="relative w-full h-64 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full mx-auto mb-4 flex items-center justify-center shadow-2xl">
                      <div className="w-20 h-20 bg-white bg-opacity-30 backdrop-blur-sm rounded-full flex items-center justify-center">
                        <span className="text-emerald-900 font-bold text-4xl">I</span>
                      </div>
                    </div>
                    <p className="text-white text-xl font-semibold">IELTS Institute</p>
                    <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-yellow-400 to-transparent mx-auto mt-3"></div>
                  </div>
                </div>
              </div>
              
              {/* Achievement Badges Grid */}
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-emerald-50 bg-opacity-80 backdrop-blur-sm text-emerald-800 px-4 py-3 rounded-full text-sm font-semibold text-center border border-emerald-200 border-opacity-40 shadow-md">
                  AACSB Accredited
                </div>
                <div className="bg-yellow-50 bg-opacity-80 backdrop-blur-sm text-yellow-800 px-4 py-3 rounded-full text-sm font-semibold text-center border border-yellow-200 border-opacity-40 shadow-md">
                  Research Excellence
                </div>
                <div className="bg-purple-50 bg-opacity-80 backdrop-blur-sm text-purple-800 px-4 py-3 rounded-full text-sm font-semibold text-center border border-purple-200 border-opacity-40 shadow-md">
                  Global Recognition
                </div>
                <div className="bg-rose-50 bg-opacity-80 backdrop-blur-sm text-rose-800 px-4 py-3 rounded-full text-sm font-semibold text-center border border-rose-200 border-opacity-40 shadow-md">
                  Industry Partners
                </div>
              </div>
            </div>

            {/* Simple Floating Elements */}
            <div className="absolute -top-8 -right-8 w-28 h-28 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full opacity-20"></div>
            <div className="absolute -bottom-10 -left-10 w-24 h-24 bg-gradient-to-br from-emerald-400 to-emerald-500 rounded-full opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
