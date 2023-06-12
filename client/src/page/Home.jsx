import React from 'react'
import Searchbox from '../component/searchbox/Searchbox'
// import Podcaste from '../component/subNav/Dropdown'
import Border from '../component/Border'
import Podcaste from '../component/podcaste/Podcaste'
import Afterboard from "../component/careeroption/Afterboard"
const Home = () => {
  return (
    <>
    <Searchbox/>
   <Border text={"Podcaste"}/>
   <Podcaste/>
   <Border text={"After 10th career option"}/>
   <Afterboard/>
   <Border text={"After 12th career option"}/>
   <Afterboard/>
   <Border text={"cources "}/>
   <Podcaste/>
    </>
  )
}

export default Home