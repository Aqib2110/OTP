import React from 'react'

const Card = () => {
  return (
    <div className='h-[300px] mt-25  lg:mt-0 xl:top-25  xl:w-[200px] lg:col-span-1 xl:left-[25%] sm:h-1/4 md:h-[290px] lg:h-[240px]   lg:absolute bg-white   sm:w-2/7 w-2/4 md:w-2/7 lg:w-2/12   rounded-lg shadow-md lg:top-20   lg:left-[23%]'>
    <div className=' w-6/7 h-6/7 mx-auto pb-3 mt-3'>
<img src="webinar.jpeg" alt="" className='rounded-md w-[85px] h-[83px] mt-10  mx-auto' />
<h1 className='font-bold flex mt-5 justify-center '>Prabhleen Kaur</h1>
<p className='flex justify-center text-[12px] mt-2 text-[#60606b]'>prabhleen@gmail.com</p>
<p className='flex justify-center text-[12px] mt-[3px] text-[#60606b]'>98996299</p>
<p className='flex justify-center text-[12px] mt-2 text-[#60606b]'>Delhi,India</p>
    </div>
    </div>
  )
}

export default Card
