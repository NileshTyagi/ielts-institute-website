// src/components/Features.tsx

const Features = () => {
  const features = [
    {
      icon: "🎓",
      title: "Academic Excellence",
      description: "World-class programs designed by industry leaders and renowned academics.",
      stats: "150+ Programs"
    },
    {
      icon: "🔬", 
      title: "Research Innovation",
      description: "State-of-the-art facilities driving breakthrough discoveries and solutions.",
      stats: "$50M+ Research Funding"
    },
    {
      icon: "🌍",
      title: "Global Network", 
      description: "Connect with alumni and students from 85+ countries worldwide.",
      stats: "50K+ Alumni Network"
    },
    {
      icon: "💼",
      title: "Career Success",
      description: "98% graduate employment rate with top-tier companies and organizations.",
      stats: "98% Employment Rate"
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why Choose <span className="text-emerald-700">IELTS Institute?</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-600 to-yellow-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover what sets us apart as a leading institution of higher learning and innovation.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-full flex items-center justify-center mb-6 mx-auto">
                <span className="text-3xl">{feature.icon}</span>
              </div>
              
              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-center mb-4 leading-relaxed">
                {feature.description}
              </p>
              
              {/* Stats */}
              <div className="text-center">
                <span className="inline-block bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full text-sm font-semibold">
                  {feature.stats}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <button className="bg-gradient-to-r from-emerald-700 to-emerald-800 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-emerald-800 hover:to-emerald-900 transform hover:scale-105 transition-all duration-200 shadow-xl">
            Explore All Programs
          </button>
        </div>
      </div>
    </section>
  )
}

export default Features
