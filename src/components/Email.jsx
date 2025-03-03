import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const Email = () => {
    const [count, setCount] = useState('')
      const navigate = useNavigate();
    const handleChange = (e)=>{
        setCount(e.target.value);
    }
//////////////////////  "build": "vite build",
    const handleContinue = ()=>{
    if(count.endsWith('@gmail.com')){
      console.log(count);
      fetch('https://otp-backend-umber.vercel.app/email',{
        method:"POST",
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify({
          "email": count
        }),
      }).then(res=>res.json()).then(data=>{
        if(data.message){
          navigate('/otp');
        }
      })
    }
    }
  return (
   <>
    <div className='bg-[#002b5b] h-screen'>
<div className='w-full mx-auto  h-full flex flex-col'>

<div className='w-full  h-1/3'>

<div className='flex flex-col gap-13'>
<h1 className='mx-auto text-[30px] text-[#36c6c0] font-bold pt-15'>Webinar<span className='text-white'>.gg</span></h1>
<h1 className='mx-auto font-bold text-[20px] text-white '>Let's Get Started</h1>
</div>

</div>

<div className='w-full h-1/3'>
{/* <p className='flex mt-3 justify-center text-[20px] px-2 text-center mb-3 text-white'>Please enter your birth year,we will not use it anywhere</p> */}
<div className='flex flex-col mt-6 gap-12'>
    <div className='flex sm:gap-3 justify-center gap-2'>
    <input type="text" placeholder='Email ID' value={count}   onChange={handleChange}  className={`border text-white border-none py-1.5 px-10 xl:py-3 bg-[#19406a]  md:w-3/12 xl:3/12 w-3/6 mx-auto rounded-xl`}/>
 
    </div>
  <input type="button" value="continue" onClick={handleContinue}  className={`border cursor-pointer text-white border-none py-1.5 px-10  ${count.endsWith('@gmail.com') ? "bg-green-900 text-black": "bg-[#8094ad] text-white" } xl:py-3 text-center md:w-3/12 xl:3/12 w-3/6 mx-auto rounded-xl`}/>
</div>
</div>

<div className='w-full  h-1/3'>

</div>




</div>
    </div>
    </>
  )
}

export default Email
