import React, { useState } from 'react'

export default function NewsContact({icon,contact,number}) {
    const [line,setline]=useState(null)
  return (
    <div className={`hover:${line} w-full  h-64 flex flex-col  items-center justify-center border-gray-300 hover:box-border hover:shadow-xl hover: border-[1px] gap-2 text-xl`}>
                <span className='text-6xl text-blue-600'>{icon}</span>
                <Underline line={line} setline={setline} />
                <span className='mt-6 cursor-pointer hover:text-blue-600 hover:duration-100'>{contact}</span>
                <span className=' hover:text-blue-600 hover:duration-100'>{number}</span>
            </div>
  )
}

const Underline =({line,setline})=>{
return (<div className={`w-full max-w-28 h-0.5 bg-blue-600 mt-4 hover:${line ==="true"? "hidden":"flex"}`}></div>)
}