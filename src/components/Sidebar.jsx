import React from "react";
import { useState } from "react";
import { IoMdSettings } from "react-icons/io";
import { MdHome } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { PiUserSquareFill } from "react-icons/pi";
import { FaMoneyBill } from "react-icons/fa";

const Sidebar = ({side}) => {
  const [nav, setnav] = useState("home");
  return (
    <div className={`bg-white transition lg:block duration-700 ease-in-out h-full lg:h-full   w-2/5 lg:w-1/5 z-10 sm:w-1/5 md:w-1/4 absolute left-0 top-0 ${side ? "block": "hidden"} lg:block shadow-md`}>
      <div className="h-9/10 pt-[10px] m-auto w-9/10 flex flex-col gap-6 border-red-900">
        <div className=" flex mr-1 justify-between py-2">
        <div className=' text-[12px] bg-[#002a5a]  flex justify-center self-center px-4 py-[8px] text-white w-fit rounded-md '>Webinar<span className='text-[#36c6c0]'>.gg</span></div>
        <img src="webinar.jpeg" className="rounded-md w-[35px]" alt="kirat" />
        </div>
        <div className=" flex flex-col gap-3">
            <div onClick={()=>{setnav('home')}} className={`flex justify-between items-center mr-1  px-2 py-1 ${nav === "home" ? "bg-[#e4e9ee] text-black" : "bg-white text-[#60606b]"}  rounded-md`}>

            <a className="cursor-pointer">Home</a> 
            <MdHome />
            </div>
        
<div onClick={()=>{setnav('webinar')}} className={`flex justify-between items-center ${nav === "webinar" ? "bg-[#e4e9ee] text-black" : "bg-white text-[#60606b]"}  px-2 py-1  mr-1 rounded-md`}>
<a className="cursor-pointer">Webinars</a><FaUsers />
</div>
        <div onClick={()=>{setnav('billing')}}  className={`flex justify-between items-center ${nav === "billing" ? "bg-[#e4e9ee] text-black" : "bg-white text-[#60606b]"}  px-2 py-1  mr-1 rounded-md`}>
        <a className="cursor-pointer">Billing</a> <FaMoneyBill />
        </div>
         <div onClick={()=>{setnav('user')}}  className={`flex justify-between items-center ${nav === "user" ? "bg-[#e4e9ee] text-black" : "bg-white text-[#60606b]"}  px-2 py-1  mr-1 rounded-md`}>
         <a className="cursor-pointer">User Management</a> <PiUserSquareFill />
         </div>
         <div onClick={()=>{setnav('settings')}}  className={`flex justify-between items-center ${nav === "settings" ? "bg-[#e4e9ee] text-black" : "bg-white text-[#60606b]"}  px-2 py-1  mr-1 rounded-md`}>
         <a className="cursor-pointer">Settings</a> <IoMdSettings />
         </div>
         
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
