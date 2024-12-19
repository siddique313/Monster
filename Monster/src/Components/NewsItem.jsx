import React from 'react'

export default function NewsItem({imge,date,title,paragraph}) {
  return (
    <div className='flex flex-col gap-3'>
      <div className='relative'>
        <img className='w-full h-[300px] object-cover ease-in delay-100 hover:-translate-x-1 hover:scale-95  duration-300' src={imge} />
        <span className='absolute bottom-0 bg-white px-4 py-2 font-serif text-3xl text-blue-600'>{date}</span>
      </div>
      <span className='text-2xl hover:text-blue-600 duration-500 cursor-pointer'>{title}</span>
      <p className='text-gray-500'>{paragraph}</p>
    </div>
  )
}
