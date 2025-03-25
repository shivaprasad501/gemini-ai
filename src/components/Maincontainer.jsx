import React, { useContext, useEffect, useRef } from 'react'
import { assets } from '../assets/assets'
import { AppContext } from '../context/Appcontext';
const Maincontainer = () => {
  const { messages, loading, onsent } = useContext(AppContext);
  const messagesEndRef = useRef(null);

  // Auto-scroll to the bottom when messages update
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [messages, loading]);
  return (
    <div className=' overflow-y-auto scrollbar-hide   m-auto max-w-[900px] w-full  h-[calc(100vh-80px)] pb-10 '>
      {messages.length === 0 ? <div><div className=" m-12">
        <p className='text-6xl font-bold bg-gradient-to-r from-blue-500 to-red-500 bg-clip-text text-transparent'><span>Hello, I am Gemini Ai</span></p>
        <p className='text-4xl text-gray-500'>How can I help you today?</p>
      </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5 p-10 justify-c ">
          <div onClick={(e) => onsent(e.currentTarget.innerText)} className="h-50 p-5 bg-neutral-100 rounded-xl relative cursor-pointer max-w-[250px] hover:bg-neutral-200">
            <p className='text-gray-400 text-xl'>Suggest beautiful places to see on an upcoming road trip</p>
            <img className='w-9 p-1 absolute bg-white rounded-full bottom-2.5 right-2.5' src={assets.compass_icon} alt="" />
          </div>
          <div onClick={(e) => onsent(e.currentTarget.innerText)} className="h-50 p-5 bg-neutral-100 rounded-xl relative cursor-pointer max-w-[250px] hover:bg-neutral-200">
            <p className='text-gray-400 text-xl'>Briefly summarize this concept: urban planning</p>
            <img className='w-9 p-1 absolute bg-white rounded-full bottom-2.5 right-2.5' src={assets.bulb_icon} alt="" />
          </div>
          <div onClick={(e) => onsent(e.currentTarget.innerText)} className="h-50 p-5 bg-neutral-100 rounded-xl relative cursor-pointer max-w-[250px] hover:bg-neutral-200">
            <p className='text-gray-400 text-xl'>Brainstorm team bonding activities for our work retreat</p>
            <img className='w-9 p-1 absolute bg-white rounded-full bottom-2.5 right-2.5' src={assets.message_icon} alt="" />
          </div>
          <div onClick={(e) => onsent(e.currentTarget.innerText)} className="h-50 p-5 bg-neutral-100 rounded-xl relative cursor-pointer max-w-[250px] hover:bg-neutral-200">
            <p className='text-gray-400 text-xl'>Improve the readability of the following code</p>
            <img className='w-9 p-1 absolute bg-white rounded-full bottom-2.5 right-2.5' src={assets.code_icon} alt="" />
          </div>
        </div>
      </div> : <div className='overflow-y-auto scrollbar-hide  h-[calc(100vh-140px)] px-[5%]  pb-5'>{
        messages.map((msg, index) => (
          <div key={index} className={`flex items-center gap-3 p-3 rounded-lg max-w-[80%]}`}>
            <img className={`w-8 h-8 rounded-full self-start `}
              src={msg.role === "user" ? assets.user_icon : assets.gemini_icon}
              alt=""
            />
            <p dangerouslySetInnerHTML={{ __html: msg.text }}></p>
          </div>
        ))}
        {loading && <div className="flex items-center gap-3 p-3 rounded-lg">
          <img src={assets.gemini_icon} alt="" className="w-8 h-8 rounded-full self-start" />
          <div className="flex flex-col gap-2">
            <div className="w-screen h-4 rounded-md bg-gradient-to-r from-blue-300 via-white to-blue-300 animate-pulse"></div>
            <div className="w-screen h-4 rounded-md bg-gradient-to-r from-blue-300 via-white to-blue-300 animate-pulse"></div>
            <div className="w-screen  h-4 rounded-md bg-gradient-to-r from-blue-300 via-white to-blue-300 animate-pulse"></div>
          </div>
        </div>}
        <div ref={messagesEndRef}></div>
      </div>
      }
    </div>

  )
}

export default Maincontainer
