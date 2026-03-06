import React from 'react'

const Navbar = () => {
  return (
    <div className="w-full bg-white shadow-sm h-20 flex justify-center items-center">
      
      <div className="w-[80%] flex justify-between items-center">

        {/* Logo */}
        <div className="flex items-center gap-2 font-bold text-xl">
          <img src="/biterushlogo.png" className="w-9 h-10" alt="BiteRush" />
          <p className="text-gray-800">
            Bite<span className="text-emerald-600">Rush</span>
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex space-x-10 items-center text-gray-700 font-medium">
          <div className="cursor-pointer hover:text-emerald-600 transition">Home</div>
          <div className="cursor-pointer hover:text-emerald-600 transition">Offers</div>
          <div className="cursor-pointer hover:text-emerald-600 transition">How it Works</div>
          <div className="cursor-pointer hover:text-emerald-600 transition">Login</div>

          {/* CTA Button */}
          <button className="bg-emerald-600 text-white px-5 py-2 rounded-lg hover:bg-emerald-700 transition rounded-tl-3xl rounded-br-3xl">
            Sign Up
          </button>
        </div>

      </div>
    </div>
  )
}

export default Navbar