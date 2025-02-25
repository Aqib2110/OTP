import React from 'react'
import { RiCalendarScheduleFill } from "react-icons/ri";
import { IoMdAdd } from "react-icons/io";
import { TfiVideoClapper } from "react-icons/tfi";
const SmallCard = () => {
  return (
    <div className='w-2/4 h-1/4  mt-5 md:mt-0 md:h-1/4 sm:w-[315px] lg:absolute   sm:p-1/3 py-3 bg-white rounded-lg flex flex-wrap shadow-md  lg:bottom-50 lg:right-5 '>
      <div className='w-1/2 sm:w-1/3   flex flex-col justify-center items-center'>
      <div className='bg-[#3fdfcf] text-[20px] w-[50px] h-[50px] rounded-md flex justify-center items-center'>
      <RiCalendarScheduleFill />
      </div>
     <h1 className='font-bold text-center text-[12px]'>Schedule a Webinar</h1>
      </div>

      <div className='w-1/2 sm:w-1/3 flex flex-col justify-center items-center'>
      <div className='bg-[#3fdfcf] text-[20px] w-[50px] h-[50px] rounded-md flex justify-center items-center'>
      <IoMdAdd />
      </div>
     <h1 className='font-bold text-center text-[12px]'>Join a Webinar</h1>
      </div>

      <div className='w-1/2 sm:w-1/3 text-center flex flex-col justify-center items-center'>
      <div className='bg-[#3fdfcf] text-[20px] w-[50px] h-[50px] rounded-md flex justify-center items-center'>
      <TfiVideoClapper />
      </div>
     <h1 className='font-bold text-[12px]'>Open Recordings</h1>
      </div>

    
    </div>
  )
}

export default SmallCard
