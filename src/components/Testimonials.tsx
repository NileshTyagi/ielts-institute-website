// src/components/Testimonials.tsx

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Class of 2022, Computer Science",
      company: "Software Engineer at Google",
      image: "👩‍💻",
      quote: "IELTS Institute provided me with not just technical knowledge, but the critical thinking skills that set me apart in the tech industry. The research opportunities were phenomenal.",
      achievement: "Landed dream job at Google"
    },
    {
      name: "Marcus Johnson", 
      role: "MBA Graduate 2023",
      company: "Senior Consultant at McKinsey & Co",
      image: "👨‍💼",
      quote: "The global network and real-world case studies prepared me for leadership roles. The faculty's industry connections opened doors I never imagined possible.",
      achievement: "Promoted twice in 18 months"
    },
    {
      name: "Dr. Priya Patel",
      role: "PhD in Biotechnology 2021", 
      company: "Research Scientist at Moderna",
      image: "👩‍🔬",
      quote: "The cutting-edge research facilities and mentorship I received shaped my career in biotech. I'm now contributing to life-saving vaccine development.",
      achievement: "Published 12 research papers"
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Success Stories From Our <span className="text-yellow-400">Alumni</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-500 mx-auto mb-6"></div>
          <p className="text-xl text-emerald-100 max-w-3xl mx-auto">
            Hear from graduates who are making their mark across industries worldwide.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white bg-opacity-95 backdrop-blur-sm rounded-xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
            >
              {/* Profile */}
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-full flex items-center justify-center mr-4">
                  <span className="text-3xl">{testimonial.image}</span>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg">{testimonial.name}</h3>
                  <p className="text-emerald-700 font-medium text-sm">{testimonial.role}</p>
                  <p className="text-gray-600 text-sm">{testimonial.company}</p>
                </div>
              </div>
              
              {/* Quote */}
              <blockquote className="text-gray-700 mb-6 leading-relaxed">
                "{testimonial.quote}"
              </blockquote>
              
              {/* Achievement Badge */}
              <div className="bg-gradient-to-r from-emerald-50 to-yellow-50 border border-emerald-200 rounded-lg p-3">
                <div className="flex items-center justify-center">
                  <span className="text-emerald-700 font-semibold text-sm">🏆 {testimonial.achievement}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-emerald-100 text-lg mb-6">Ready to write your own success story?</p>
          <button className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-emerald-900 px-8 py-4 rounded-full text-lg font-bold hover:from-yellow-400 hover:to-yellow-500 transform hover:scale-105 transition-all duration-200 shadow-xl">
            Start Your Journey Today
          </button>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
