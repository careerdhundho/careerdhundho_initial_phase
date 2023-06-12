import React from 'react'
import './App.css';
import Welcomepage from './page/Welcomepage';
import Nav from './component/Nav';
import Sunnav from './component/Sunnav';
import Home from './page/Home';
import Searchbox from './component/searchbox/Searchbox';
import Footer from './component/footer/Footer';
import Signup from './page/Signup/Signup';
import Login from './page/Signup/Login';
import Profile from './page/Profile';
import { BrowserRouter as Router,
  Switch,
  Route,Routes,
  Link,
  Redirect } from "react-router-dom";
const App = () => {
  return (
    <>
    
    <Nav/>
    <Sunnav/>
     <Routes>
     
     <Route path="/" element={<Welcomepage/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/profile" element={<Profile/>}/>
      
     </Routes>
     <Footer/>
      
     
    </>
  )
}

export default App