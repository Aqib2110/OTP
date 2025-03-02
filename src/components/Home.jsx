import React from 'react'
import FatCard from './FatCard'
import Card from './Card'
import Sidebar from './Sidebar'
import SmallCard from './SmallCard'
import Welcome from './Welcome'
import { CiMenuBurger } from "react-icons/ci";
import { useState } from 'react'
const Home = () => {
  const [side, setside] = useState(false)
  const handleClick = ()=>{
setside(side=>!side);
console.log("clicked")
  }
  return (
    <>
       <div onClick={handleClick} className='h-screen flex flex-col'>
       <div  className="z-10 absolute cursor-pointer block lg:hidden sm:block top-3 right-3 text-white text-[30px] ">
<CiMenuBurger />
</div>
<div className='bg-black pb-3 w-full sm:pb-0 h-1/6'>
<Welcome />
  
<Sidebar side={side}/>


 
</div>
<div className='bg-[#fafbfd] w-full h-5/6'>  
<div className='h-screen flex lg:grid lg:grid-cols-5 z-0 lg:items-center lg:justify-items-center flex-col justify-center items-center gap-y-8 md:gap-y-15 lg:gap-y-0  absolute border w-full top-0  right-0'>
<Card />
    <FatCard />
    <SmallCard />
</div>
</div>
   </div>
    </>
  )
}

export default Home

