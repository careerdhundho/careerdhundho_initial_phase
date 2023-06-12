import React from 'react'
import "./subnav.css"
import Dropdown from './subNav/Dropdown'
const Sunnav = () => {
  return (
   <>
    <div className='flex justify-center' id='new_nav'>
        <div className='w-11/12 h-10 bg-head-color rounded-2xl flex items-center justify-around '>
        <Dropdown name={"After Board Exam"}/>
        <h3>|</h3>
        <Dropdown name={"After senior secondary Exam"}/>
        
        <h3>|</h3>
        <Dropdown name={"After graduation Exam"}/>
        
        </div>
    </div>
   </>
  )
}

export default Sunnav