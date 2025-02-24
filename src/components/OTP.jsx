import React, { useRef } from 'react'
import { useState } from 'react'
const OTP = () => {
  const [count, setCount] = useState('')
  const input1 = useRef();
  const input2 = useRef();
  const input3 = useRef();
  const input4 = useRef();
  const input5 = useRef();
  const input6 = useRef();
const handleChange = (number)=>{
  if(number == 1){
    input2.current.value = "";
    input2.current.focus();
  }
  else  if(number == 2){
    input3.current.value = "";
    input3.current.focus();
  }
  else  if(number == 3){
    input4.current.value = "";
    input4.current.focus();
  }
  else  if(number == 4){
    input5.current.value = "";
    input5.current.focus();
  }
  else  if(number == 5){
    input6.current.value = "";
    input6.current.focus();
    console.log("aqib");
  }
  else  if(number == 6){
    setCount('ok');
  }
}

const handleContinue = () => {
  const inputs = [input1, input2, input3, input4, input5, input6];
  const otp = inputs.map(input => input.current?.value || "").join('');
  if(otp.length == 6){
    console.log("OTP:", otp);
    input1.current.value = "";
    input2.current.value = "";
    input3.current.value = "";
    input4.current.value = "";
    input5.current.value = "";
    input6.current.value = "";
  }
};


const handleKey = (e, num) => {
  console.log(e.key);
  if (e.key === "ArrowLeft") {
    e.preventDefault(); // Prevent default Backspace behavior
    if (num == 6){
      input6.current.value = "";
      input5.current.focus();
      setCount("");

    } 
    else if (num == 5){
      input5.current.value = "";
      input4.current.focus();
    }
    else if (num == 4){
      input4.current.value = "";
      input3.current.focus();
    }
    else if (num == 3){
      input3.current.value = "";
      input2.current.focus();
    }
    else if (num == 2){
      input2.current.value = "";
      input1.current.focus();
    }
    else if (num == 1){
      input1.current.value = "";
     
    }
  }
  else if (e.key === "Backspace") {
    e.preventDefault(); // Prevent default Backspace behavior
    if (num == 6){
      input6.current.value = "";
      setCount("");
    } 
    else if (num == 5){
      input5.current.value = "";
      
    }
    else if (num == 4){
      input4.current.value = "";
     
    }
    else if (num == 3){
      input3.current.value = "";
  
    }
    else if (num == 2){
      input2.current.value = "";
    }
    else if (num == 1){
      input1.current.value = "";
    }
  }
  else if (e.key === "ArrowRight") {
    e.preventDefault(); // Prevent default Backspace behavior
    if (num == 6){
      input6.current.value = " ";
      // input5.current.value = "";
      // input5.current.focus();

    } 
    else if (num == 5){
      input6.current.value = "";
      input6.current.focus();
    }
    else if (num == 4){
      input5.current.value = "";
      input5.current.focus();
    }
    else if (num == 3){
      input4.current.value = "";
      input4.current.focus();
    }
    else if (num == 2){
      input3.current.value = "";
      input3.current.focus();
    }
    else if (num == 1){
      input2.current.value = "";
      input2.current.focus();
    }
  }
  else if (!/^[0-9]$/.test(e.key)) {
    // Prevent non-numeric keys
    e.preventDefault();
  }

};

  return (
    <>
       <div className=' bg-[#002b5b] h-screen'>
<div className='w-full mx-auto  h-full flex flex-col'>

<div className='w-full  h-1/3'>

<div className='flex flex-col gap-13'>
<h1 className='mx-auto text-[30px] text-[#36c6c0] font-bold pt-15'>Webinar<span className='text-white'>.gg</span></h1>
<h1 className='mx-auto font-bold text-[20px] text-white '>Check Your Email For A Code</h1>
</div>

</div>

<div className='w-full h-1/3'>
<p className='flex mt-3 justify-center px-2 text-[15px] text-center mb-3 text-white'>Please enter the verification code sent to your email id *********@gmail.com</p>
<div className='flex flex-col mt-6 gap-12'>
    <div className='flex sm:gap-3 justify-center gap-2'>
    <input type="text" inputMode="numeric" ref={input1} onKeyDown={(e)=>{handleKey(e,"1")}} onChange={()=>{handleChange('1')}} maxLength={1} className='border mt-0 text-center sm:w-1/12 md:w-1/16 w-1/8  bg-[#19406a] py-2 px-1  text-white border-none rounded-xl'/>
  <input type="text" inputMode="numeric"  ref={input2} onKeyDown={(e)=>{handleKey(e,"2")}} onChange={()=>{handleChange('2')}} maxLength={1} className='border mt-0 text-center sm:w-1/12 w-1/8 md:w-1/16  bg-[#19406a] py-2 px-1  text-white border-none rounded-xl'/>
  <input type="text" inputMode="numeric"  ref={input3} onKeyDown={(e)=>{handleKey(e,"3")}} onChange={()=>{handleChange('3')}} maxLength={1} className='border mt-0 text-center sm:w-1/12 w-1/8 md:w-1/16  bg-[#19406a] py-2 px-1  text-white border-none rounded-xl'/>
  <input type="text" inputMode="numeric"  ref={input4} onKeyDown={(e)=>{handleKey(e,"4")}} onChange={()=>{handleChange('4')}} maxLength={1} className='border mt-0 text-center sm:w-1/12 w-1/8 md:w-1/16 bg-[#19406a] py-2 px-1  text-white border-none rounded-xl'/>
  <input type="text" inputMode="numeric"  ref={input5} onKeyDown={(e)=>{handleKey(e,"5")}} onChange={()=>{handleChange('5')}} maxLength={1} className='border mt-0 text-center  sm:w-1/12 w-1/8 md:w-1/16  bg-[#19406a] py-2 px-1  text-white border-none rounded-xl'/>
  <input type="text" inputMode="numeric"  ref={input6} onKeyDown={(e)=>{handleKey(e,"6")}} onChange={()=>{handleChange('6')}}  maxLength={1} className='border mt-0 text-center sm:w-1/12 w-1/8 md:w-1/16 bg-[#19406a] sm:py-2 py-1 px-1  text-white border-none rounded-xl'/>
    </div>
  <input type="button" value="Verify" onClick={handleContinue}  className={`border cursor-pointer  border-none py-1.5 px-10  ${count.length < 1 ? "bg-[#8094ad] text-white" : "bg-green-900 text-black" } xl:py-3 text-center md:w-3/12 xl:3/12 w-3/6 mx-auto rounded-xl`}/>
</div>
</div>

<div className='w-full  h-1/3'>

</div>




</div>
    </div> 
    </>
  )
}

export default OTP
