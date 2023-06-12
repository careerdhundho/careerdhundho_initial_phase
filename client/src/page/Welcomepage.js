import React from 'react'
import {useNavigate} from "react-router-dom";
const Welcomepage = () => {
  const navigate=useNavigate();
  return (
   
   <>
   <div className=' h-screen flex justify-center items-center '>
   <div className=" shadow-xl shadow-btn-color md:w-2/4 lg:w-2/4 xl:w-2/4 w-4/5 md:h-3/5 lg:h-3/5 xl:h-3/5 h-1/4 rounded-lg flex flex-col  items-center bg-card-color">
    <a className='mt-3'>
    <img src="logo2.0-removebg.png" class="h-8 md:h-32 lg:h-32" alt="Flowbite Logo" />
   
    </a>
    <h1 className='text-sm 2xl:text-3xl xl:text-3xl md:text-3xl lg:text-3xl font-bold'>Welcome To Careerdhundho !</h1>
    <h1 className=' text-xs 2xl:text-3xl xl:text-3xl md:text-3xl lg:text-xl font-semibold pt-4'>One Stop Solution For Any Aspirants.</h1>
    <button onClick={()=>{navigate("/home")}} type="button" class="mt-10 mb-10 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2">continue to careerdhundho</button>
  

    </div>
   </div>
   </>
  )
}

export default Welcomepage