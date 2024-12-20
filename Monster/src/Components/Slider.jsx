import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import img1 from "../assets/man.png"
import img2 from "../assets/media1.png"
import img3 from "../assets/pic5.png"
import img4 from "../assets/media1.png"
import {  Pagination,Autoplay } from 'swiper/modules';
import "swiper/css/autoplay"
import "swiper/css/pagination"
import SliderItem from './SliderItem';
export default function Slider() {
  return (
    <div>
            <Swiper
      spaceBetween={10}
      modules={[Pagination,Autoplay]}
      pagination={{clickable:true}}
      slidesPerView={1}
      loop={true}
      autoplay={{delay:3000}}
    >
      <SwiperSlide>
       <div className='flex flex-col items-center justify-center gap-7 h-screen relative' >
            <img  src={img1} className='w-full h-screen object-cover absolute'/>
              <h1  className='text-7xl z-20 font-bold text-wrap'>Mobile App Development</h1>
              <p className='w-[600px] z-20 text-2xl'>We are a team of qualified software developers, aimed at creating unique and	powerful tools for your business & everyday life.	 </p>
              <button className='py-3 px-7 bg-blue-800 text-white hover:bg-black z-20 '>GET IN TOUCH</button>
          </div>
      </SwiperSlide>
      <SwiperSlide>
       <div className='flex flex-col items-center justify-center gap-7 h-screen relative' >
            <img  src={img2} className='w-full h-screen object-cover absolute'/>
              <h1  className='text-7xl z-20 font-bold text-wrap'>Mobile App Development</h1>
              <p className='w-[600px] z-20 text-2xl'>We are a team of qualified software developers, aimed at creating unique and	powerful tools for your business & everyday life.	 </p>
              <button className='py-3 px-7 bg-blue-800 text-white hover:bg-black z-20 '>GET IN TOUCH</button>
          </div>
      </SwiperSlide>
      <SwiperSlide>
       <div className='flex flex-col items-center justify-center gap-7 h-screen relative' >
            <img  src={img3} className='w-full h-screen object-cover absolute'/>
              <h1  className='text-7xl z-20 font-bold text-wrap'>Mobile App Development</h1>
              <p className='w-[600px] z-20 text-2xl'>We are a team of qualified software developers, aimed at creating unique and	powerful tools for your business & everyday life.	 </p>
              <button className='py-3 px-7 bg-blue-800 text-white hover:bg-black z-20 '>GET IN TOUCH</button>
          </div>
      </SwiperSlide>
      <SwiperSlide>
       <div className='flex flex-col items-center justify-center gap-7 h-screen relative' >
            <img  src={img4} className='w-full h-screen object-cover absolute'/>
              <h1  className='text-7xl z-20 font-bold text-wrap'>Mobile App Development</h1>
              <p className='w-[600px] z-20 text-2xl'>We are a team of qualified software developers, aimed at creating unique and	powerful tools for your business & everyday life.	 </p>
              <button className='py-3 px-7 bg-blue-800 text-white hover:bg-black z-20 '>GET IN TOUCH</button>
          </div>
      </SwiperSlide>
    </Swiper>
    </div>
  )
}
