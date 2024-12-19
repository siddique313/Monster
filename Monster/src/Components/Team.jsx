import React from 'react'
import TeamItem from './TeamItem'
import img1 from "../assets/pic5.png"
export default function Team() {
  return (
    <div>
      <div className='p-11 text-center'>
        <h1 className='text-5xl'>Meet The Team</h1>
      </div>
      <div className='flex gap-5'>
        <TeamItem img={img1} name={"Ryan Wilson"} profession={"Director of Production"}/>
        <TeamItem img={img1} name={"Jill Peterson"} profession={"UI Designer"}/>
        <TeamItem img={img1} name={"Sam robinson"} profession={"Senior Developer"}/>
        <TeamItem img={img1} name={"Mary lee"} profession={"Software Developer"}/>
      </div> 
    </div>
  )
}
