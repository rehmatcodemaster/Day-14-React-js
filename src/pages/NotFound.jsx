import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[70vh] text-center px-4">
      
      <h1 className="text-7xl font-extrabold text-indigo-600 mb-4">
        404
      </h1>

      <h2 className="text-2xl font-semibold mb-2">
        Page Not Found
      </h2>

      <p className="text-gray-500 mb-6 max-w-md">
        Oops! The page you're looking for doesn’t exist or has been moved.
      </p>

      <Link 
        to="/" 
        className="bg-indigo-600 text-white px-6 py-2 rounded-full hover:bg-indigo-700 transition duration-300"
      >
        Go Back Home
      </Link>

    </div>
  )
}

export default NotFound