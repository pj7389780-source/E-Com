import React, { useContext } from 'react'
import { MyStore } from '../context/MyStore';

const Navbar = () => {
  const {setToggle} = useContext(MyStore)
  return (
    <div>
      <nav className="w-full px-6 py-4">
        <div
          className="max-w-7xl mx-auto flex items-center justify-between
                  px-6 py-4 rounded-2xl
                  bg-white/80 backdrop-blur-md
                  border border-gray-200 shadow-lg"
        >
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div
              className="w-10 h-10 rounded-xl bg-linear-to-br from-indigo-600 to-purple-600
                      flex items-center justify-center text-white font-bold text-lg shadow-md"
            >
              U
            </div>

            <span className="text-xl font-bold text-gray-900">
              User<span className="text-indigo-600">Hub</span>
            </span>
          </div>

          {/* Navigation */}
          <div className="hidden md:flex items-center gap-2">
            <a
            onClick={()=>{
              setToggle(true)
            }}
              href="#"
              className="px-4 py-2 rounded-lg text-indigo-600 bg-indigo-50 font-medium
                   transition-all duration-200"
            >
              Home
            </a>

            <a
              href="#"
              className="px-4 py-2 rounded-lg text-gray-600 font-medium
                   hover:text-indigo-600 hover:bg-indigo-50
                   transition-all duration-200"
            >
              Users
            </a>

            <a
              href="#"
              className="px-4 py-2 rounded-lg text-gray-600 font-medium
                   hover:text-indigo-600 hover:bg-indigo-50
                   transition-all duration-200"
            >
              About
            </a>

            <a
              href="#"
              className="px-4 py-2 rounded-lg text-gray-600 font-medium
                   hover:text-indigo-600 hover:bg-indigo-50
                   transition-all duration-200"
            >
              Contact
            </a>
          </div>

          {/* Action */}
          <button
            onClick={()=>{
              setToggle(false);
            }}
            className="hidden sm:block px-5 py-2.5 rounded-xl
                 bg-indigo-600 text-white font-semibold
                 shadow-md shadow-indigo-200
                 hover:bg-indigo-700 hover:shadow-lg
                 active:scale-95
                 transition-all duration-200"
          >
            View Cart
          </button>

          {/* Mobile Menu */}
          <button className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100">
            ☰
          </button>
        </div>
      </nav>
    </div>
  );
}

export default Navbar
