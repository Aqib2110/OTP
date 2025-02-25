import React from "react";
import { SlCalender } from "react-icons/sl";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import { GoDeviceCameraVideo } from "react-icons/go";
import { TbMinusVertical } from "react-icons/tb";
const FatCard = () => {
  return (
    <div className=" w-4/5 sm:w-3/6 lg:w-3/10 mt-5 md:mt-0 md:w-5/10  lg:h-[300px]    h-[320px]   md:h-[300px] sm:h-1/4  bg-[#fefefe] rounded-lg shadow-md flex  items-center   lg:absolute lg:bottom-25  lg:right-89  ">
      <div className=" sm:h-8/9 lg:h-full md:h-[250px]  w-[400px] flex flex-col mx-auto sm:mx-0">
        <div className="w-full  h-[50px] bg-[#f5f6f7]  flex justify-between rounded-md  sm:h-1/8">  
          <div className="w-4/5 flex items-center gap-3 px-1">
            <SlCalender />
            <h1>Monday,14 October 2024 </h1>
            <IoIosArrowDown />
          </div>
          <div className="w-1/5 px-1 flex justify-end text-[#60606b] pr-2 gap-3 items-center">
            <FaArrowLeftLong /> <FaArrowRightLong />
          </div>
        </div>

        <div className="sm:h-7/8 md:h-[200px] lg:h-full h-full px-1">

          <div className=" flex gap-3 my-1.5">
            <div className=" flex flex-col">
              <h1>11:30 AM</h1>
              <p className="text-[#60606b] text-[12px]">11:30 AM</p>
            </div>
            <div className="text-blue-300">
            {/* <TbMinusVertical /> */}
            <h1 className='text-[25px] font-bold '>|</h1>
            </div>
            <div className=" flex flex-col">
              <div className='flex gap-3 items-center'>
              <p className="text-[#60606b] text-[12px]">Live</p> <div className="text-red-600 text-[15px]">
              <GoDeviceCameraVideo />
                </div>
              </div>
            <h1>UX Webinar</h1>
            </div>
          </div>
<hr className="text-[#a9a9bd]"/>







<div className=" flex gap-3 my-1.5">
            <div className=" flex flex-col">
              <h1>11:30 AM</h1>
              <p className="text-[#60606b] text-[12px]">11:30 AM</p>
            </div>
            <div className="text-blue-300">
            {/* <TbMinusVertical /> */}
            <h1 className='text-[25px] font-bold '>|</h1>
            </div>
            <div className=" flex flex-col">
              <div className='flex gap-3 items-center'>
              <p className="text-[#60606b] text-[12px]">Upcoming</p> <div className="text-blue-300 text-[15px]">
              <GoDeviceCameraVideo />
                </div>
              </div>
            <h1>UX Webinar</h1>
            </div>
          </div>
<hr className="text-[#a9a9bd]"/>



<div className=" flex gap-3 my-1.5">
            <div className=" flex flex-col">
              <h1>11:30 AM</h1>
              <p className="text-[#60606b] text-[12px]">11:30 AM</p>
            </div>
            <div className="text-blue-300">
            {/* <TbMinusVertical /> */}
            <h1 className='text-[25px] font-bold '>|</h1>
            </div>
            <div className=" flex flex-col">
              <div className='flex gap-3 items-center'>
              <p className="text-[#60606b] text-[12px]">Upcoming</p> <div className="text-blue-300 text-[15px]">
              <GoDeviceCameraVideo />
                </div>
              </div>
            <h1>UX Webinar</h1>
            </div>
          </div>
<hr className="text-[#a9a9bd]"/>






<div className=" flex gap-3 my-1.5">
            <div className=" flex flex-col">
              <h1>11:30 AM</h1>
              <p className="text-[#60606b] text-[12px]">11:30 AM</p>
            </div>
            <div className="text-blue-300">
            {/* <TbMinusVertical /> */}
            <h1 className='text-[25px] font-bold '>|</h1>
            </div>
            <div className=" flex flex-col">
              <div className='flex gap-3 items-center'>
              <p className="text-[#60606b] text-[12px]">Upcoming</p> <div className="text-blue-300 text-[15px]">
              <GoDeviceCameraVideo />
                </div>
              </div>
            <h1>UX Webinar</h1>
            </div>
          </div>




        






        </div>
      </div>
    </div>
  );
};

export default FatCard;
