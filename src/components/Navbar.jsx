import React from 'react'

const Navbar = () => {
  return (
    <nav className="w-full bg-white shadow-md px-8 py-4 flex justify-between items-center">
      
      {/* Logo / Name */}
      <h1 className="text-2xl font-bold text-indigo-600 tracking-wide cursor-pointer">
        Rehmat Ullah
      </h1>

      {/* Links */}
      <div className="flex items-center gap-8 text-gray-700 font-medium">
        <a href="/" className="hover:text-indigo-600 transition duration-300">
          Home
        </a>
        <a href="/about" className="hover:text-indigo-600 transition duration-300">
          About
        </a>
        <a href="/contact" className="hover:text-indigo-600 transition duration-300">
          Contact
        </a>
        <a href="/courses" className="hover:text-indigo-600 transition duration-300">
          Courses
        </a>
      </div>

      {/* Button */}
      <button className="bg-indigo-600 text-white px-5 py-2 rounded-full hover:bg-indigo-700 transition duration-300 shadow-sm">
        Hire Me
      </button>

    </nav>
  )
}

export default Navbar