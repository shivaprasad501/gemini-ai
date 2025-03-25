import React, { useContext } from 'react'
import { assets } from '../assets/assets.js'
import { AppContext } from '../context/Appcontext.jsx'

const Navbar = () => {
    const{toggle, setToggle}=useContext(AppContext)
  return (
    <div className='flex justify-between items-center  p-5'>
      <div className='flex items-center gap-10 sm:gap-40'>
{!toggle && (
          <img
          onClick={() => setToggle(true)}
            className="w-8 sm:hidden block cursor-pointer"
            src={assets.menu_icon}
            alt=""
          />)}
        <p className='font-medium text-2xl text-gray-600'>Gemini</p>
      </div>
      <img className='w-10  rounded-full' src={assets.user_icon} alt="" />
    </div>
  )
}

export default Navbar
