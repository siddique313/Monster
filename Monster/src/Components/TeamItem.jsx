import React from 'react'
export default function TeamItem({img,name,profession}) {
    
  return (
    <div className='relative grayscale hover:grayscale-0 overflow-hidden cursor-pointer '>
      <div className='z-0'>
        <img className='w-full h-[300px] object-cover' src={img} />
      </div>
      <div  className={`absolute opacity-60 w-[200px] text-white bg-black flex flex-col justify-around bottom-4 -left-6 text-center skew-x-12 h-16 cursor-auto hover:duration-200 hover:w-[240px]`}>
        <span className='overflow-hidden text-xl '>{name}</span>
        <span className='overflow-hidden'>{profession}</span>
      </div>
    </div>
  )   
}
