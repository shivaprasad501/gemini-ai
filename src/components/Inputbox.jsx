import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { AppContext } from '../context/Appcontext'

const Inputbox = () => {
    const { onsent, input, setInput} = useContext(AppContext)
  return (
    <div className='absolute bottom-0 w-full '>
        <div className='flex flex-col justify-center m-auto w-full max-w-[900px] px-5' >
          <div className='flex justify-between items-center bg-gray-200  rounded-full px-3' >
            <input onChange={(e) => setInput(e.target.value)}value={input} className='outline-none py-2 w-full text-gray-600 text-sm'  type="text" placeholder='Enter a prompt here ' />
            <div>
            {input && <img onClick={() => onsent()}className='w-7' src={assets.send_icon} alt="" />}
            </div>
          </div>
          <p  className='text-xs  sm:px-10 mx-auto my-2'>
          Gemini may provide incorrect or outdated information. Verify critical details
          </p>
          </div>
      
    </div>
  )
}

export default Inputbox
