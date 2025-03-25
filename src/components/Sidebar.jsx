import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { AppContext } from '../context/Appcontext'

const Sidebar = () => {
    const { toggle, setToggle, newchat,prevPrompts, onsent } = useContext(AppContext)
    return (
        <div className={` h-screen flex  flex-col justify-between  p-5 bg-gray-200 max-sm:fixed  max-sm:z-40     ${toggle ? "block w-48" : "max-sm:hidden"}`}>
            <div >
                <div className='px-5 py-3 mb-10'>
                    <img onClick={() => setToggle(prev => !prev)} className='w-8 cursor-pointer' src={assets.menu_icon} alt="" />
                </div>
                <div onClick={() => newchat()} className='flex justify-center items-center gap-2 sm:p-4 p-2 bg-gray-100 rounded-full   hover:bg-neutral-300 active:bg-neutral-400 cursor-pointer '>
                    <img className='w-3 h-3 sm:w-6 sm:h-6' src={assets.plus_icon} alt="" />
                    {toggle &&
                        <p className='sm:text-md text-xs text-gray-800'>New chat</p>}

                </div>
                {toggle && <div>
                    <div className='mt-5 px-2 max-sm:text-xs'>Recent</div>
                    {prevPrompts?.map((item, index) => {
                        return (
                            <div onClick={() => onsent(item)} key={index} oncl className="flex items-start gap-2 p-2  text-gray-600 rounded-full cursor-pointer">
                                <img className='w-5' src={assets.message_icon} alt='' />
                                <p className='text-xs'>{item.slice(0,10)} {item.length < 10 ? null : "...."}</p>
                            </div>)
                    })}
                </div>}

            </div>
            <div className='flex  flex-col gap-2 mb-5'>
                <div className='flex justify-center  items-center gap-3 w-full p-2 rounded-full  hover:bg-gray-100 active:bg-gray-400 transition-all duration-300 cursor-pointer '>
                    <img className='w-3 h-3 sm:w-6 sm:h-6' src={assets.question_icon} alt="" />
                    {toggle && <p className='sm:text-md text-xs font-medium px-1.5'>Help</p>}

                </div>
                <div className='flex justify-center  items-center gap-3 w-full p-2 rounded-full   hover:bg-gray-100 active:bg-gray-400 transition-all duration-300 cursor-pointer'>
                    <img className='w-3 h-3 sm:w-6 sm:h-6' src={assets.history_icon} alt="" />
                    {toggle && <p className='sm:text-md text-xs font-medium'>Activity</p>}
                </div>
                <div className='flex justify-center  items-center gap-3 w-full p-2 rounded-full  hover:bg-gray-100 active:bg-gray-400 transition-all duration-300 cursor-pointer' >
                    <img className='w-3 h-3 sm:w-6 sm:h-6' src={assets.setting_icon} alt="" />
                    {toggle && <p className='sm:text-md text-xs font-medium'>Settings</p>}
                </div>


            </div>

        </div>
    )
}

export default Sidebar
