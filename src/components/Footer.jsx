import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 px-8 py-12 mt-16">
      
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10">
        
        {/* About */}
        <div>
          <h1 className="text-2xl font-bold text-white mb-4">
            Rehmat Ullah
          </h1>
          <p className="text-sm leading-6">
            Front-End Developer specializing in React.js and Tailwind CSS. 
            Passionate about building modern, responsive, and user-friendly websites.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-white font-semibold mb-4">Quick Links</h2>
          <ul className="space-y-2">
            <li><a href="/" className="hover:text-indigo-400 transition">Home</a></li>
            <li><a href="/about" className="hover:text-indigo-400 transition">About</a></li>
            <li><a href="/contact" className="hover:text-indigo-400 transition">Contact</a></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h2 className="text-white font-semibold mb-4">Services</h2>
          <ul className="space-y-2">
            <li className="hover:text-indigo-400 transition cursor-pointer">Web Design</li>
            <li className="hover:text-indigo-400 transition cursor-pointer">React Development</li>
            <li className="hover:text-indigo-400 transition cursor-pointer">Landing Pages</li>
          </ul>
        </div>

        {/* Contact / Social */}
        <div>
          <h2 className="text-white font-semibold mb-4">Contact</h2>
          <p className="text-sm">Email: rehmat@email.com</p>
          <p className="text-sm mb-3">Phone: +92 300 0000000</p>

          <div className="flex gap-4 mt-3">
            <a href="#" className="hover:text-indigo-400 transition">GitHub</a>
            <a href="#" className="hover:text-indigo-400 transition">LinkedIn</a>
            <a href="#" className="hover:text-indigo-400 transition">Twitter</a>
          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Rehmat Ullah. All rights reserved.
      </div>

    </footer>
  )
}

export default Footer