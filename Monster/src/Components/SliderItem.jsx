import React from 'react'
import img from "../assets/pic5.png"
export default function SliderItem() {
  return (
    <>
     <div className='flex flex-col items-center justify-center gap-7 h-screen relative' >
      <img  src={img} className='w-full h-screen object-cover absolute'/>
        <h1  className='text-7xl z-20 font-bold text-wrap'>Mobile App Development</h1>
        <p className='w-[600px] z-20 text-2xl'>We are a team of qualified software developers, aimed at creating unique and	powerful tools for your business & everyday life.	 </p>
        <button className='py-3 px-7 bg-blue-800 text-white hover:bg-black z-20 '>GET IN TOUCH</button>
    </div>
    </>
  )
}
