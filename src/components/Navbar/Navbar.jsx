import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="w-full bg-white shadow-sm">

      {/* Main navbar row */}
      <div className="h-20 flex justify-center items-center">
        <div className="w-[90%] md:w-[80%] flex justify-between items-center">

          {/* Logo */}
          <div className="flex items-center gap-2 font-bold text-xl">
            <img src="/biterushlogo.png" className="w-9 h-10" alt="BiteRush" />
            <p className="text-gray-800">
              Bite<span className="text-emerald-600">Rush</span>
            </p>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex space-x-10 items-center text-gray-700 font-medium">
            <div className="cursor-pointer hover:text-emerald-600 transition">Home</div>
            <div className="cursor-pointer hover:text-emerald-600 transition">Offers</div>
            <div className="cursor-pointer hover:text-emerald-600 transition">How it Works</div>
            <div className="cursor-pointer hover:text-emerald-600 transition">Login</div>
            <button className="bg-emerald-600 text-white px-5 py-2 hover:bg-emerald-700 transition rounded-tl-2xl rounded-br-2xl">
              Sign Up
            </button>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-gray-700 hover:text-emerald-600 transition"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>

        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-md px-6 py-4 flex flex-col gap-4 text-gray-700 font-medium">
          <div className="cursor-pointer hover:text-emerald-600 transition py-1">Home</div>
          <div className="cursor-pointer hover:text-emerald-600 transition py-1">Offers</div>
          <div className="cursor-pointer hover:text-emerald-600 transition py-1">How it Works</div>
          <div className="cursor-pointer hover:text-emerald-600 transition py-1">Login</div>
          <button className="bg-emerald-600 text-white px-5 py-2 hover:bg-emerald-700 transition rounded-tl-2xl rounded-br-2xl w-full mt-1">
            Sign Up
          </button>
        </div>
      )}

    </div>
  )
}

export default Navbar