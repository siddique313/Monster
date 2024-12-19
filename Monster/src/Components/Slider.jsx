import SliderItem from './SliderItem'
import Carousel from './../../node_modules/react-responsive-carousel/lib/ts/components/Carousel/index.d';
export default function Slider() {
  return (
    <div className='  flex flex-col justify-center items-center text-center'>
        <Carousel >
             <div className='flex flex-col items-center justify-center gap-7 h-screen ' >
        <h1 className='text-7xl'>hello</h1>
        <p className='w-[600px]'>We are a team of qualified software developers, aimed at creating unique and	powerful tools for your business & everyday life.	 </p>
        <button className='py-3 px-7 bg-blue-800 text-white hover:bg-black  '>GET IN TOUCH</button>
    </div>
       {/* <SliderItem heading={"Experinced Team"}/>      
       <SliderItem heading={"Mobile App Development"}/>
       <SliderItem heading={"Award-winning Software"}/> */}
       </Carousel>              
    </div>  
  )
}
