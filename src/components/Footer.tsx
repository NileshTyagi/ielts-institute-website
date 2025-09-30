// src/components/Footer.tsx

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* College Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">I</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold">IELTS Institute</h3>
                <p className="text-emerald-400 text-sm">Excellence in Education Since 1985</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
              Empowering students to achieve academic excellence and professional success through innovative education, 
              cutting-edge research, and global opportunities.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-2 text-sm">
              <p className="flex items-center"><span className="mr-2">📍</span> 123 Education Ave, Academic City, AC 12345</p>
              <p className="flex items-center"><span className="mr-2">📞</span> +1 (555) 123-IELTS</p>
              <p className="flex items-center"><span className="mr-2">✉️</span> info@ieltsinstitute.edu</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-emerald-400">Academics</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Undergraduate Programs</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Graduate Programs</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Online Learning</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Research Centers</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Academic Calendar</a></li>
            </ul>
          </div>

          {/* Student Resources */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-emerald-400">Student Life</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Campus Housing</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Student Organizations</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Career Services</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Library Resources</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Campus Events</a></li>
            </ul>
          </div>
        </div>

        {/* Social Media & Secondary Links */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            
            {/* Social Media */}
            <div className="flex items-center space-x-6 mb-4 md:mb-0">
              <span className="text-sm text-gray-400">Follow Us:</span>
              <a href="#" className="w-10 h-10 bg-emerald-700 rounded-full flex items-center justify-center hover:bg-emerald-600 transition-colors">
                <span>📘</span>
              </a>
              <a href="#" className="w-10 h-10 bg-emerald-700 rounded-full flex items-center justify-center hover:bg-emerald-600 transition-colors">
                <span>🐦</span>
              </a>
              <a href="#" className="w-10 h-10 bg-emerald-700 rounded-full flex items-center justify-center hover:bg-emerald-600 transition-colors">
                <span>💼</span>
              </a>
              <a href="#" className="w-10 h-10 bg-emerald-700 rounded-full flex items-center justify-center hover:bg-emerald-600 transition-colors">
                <span>📸</span>
              </a>
            </div>

            {/* Secondary Links */}
            <div className="flex items-center space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Accessibility</a>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center mt-8 pt-6 border-t border-gray-800">
            <p className="text-gray-400 text-sm">
              © 2025 IELTS Institute. All rights reserved. | Accredited by Higher Education Commission
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
