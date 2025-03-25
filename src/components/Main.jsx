import React from 'react'
import Navbar from './Navbar'
import Maincontainer from "./Maincontainer";
import Inputbox from "./Inputbox";


const Main = () => {
  return (
    <div className="flex flex-col h-screen w-full relative">
        <Navbar/>
        <Maincontainer/>
        <Inputbox/>
    </div>
  )
}

export default Main
