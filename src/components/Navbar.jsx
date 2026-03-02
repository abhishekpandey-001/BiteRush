import React from 'react'

const Navbar = () => {
  return (
    <div className='w-full shadow-md h-20 flex justify-center items-center'>
      <div className='border border-black w-[70%]'>
        <div className='flex items-center gap-6 font-semibold'>
          <img src="./biterushlogo.png" className='w-10 h-11' alt="" />
          <p>Others</p>
        </div>
      </div>
    </div>
  )
}

export default Navbar
