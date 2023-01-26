import { useState} from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import React from 'react'
import { ReactDOM } from 'react-dom'
import {Route, BrowserRouter, Routes, Link} from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Navigator from './Components/Navbar'
import WelcNav from './Components/welcomeNav'
import Login from './Pages/Login'
import Register from './Pages/Register'

import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';


export default function App() {

  return (
    <>
      <Navigator/>
      {/* <WelcNav/> */}
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path= "/login" element = {<Login/>}/>
        <Route path= "/register" element = {<Register/>}/>

      </Routes>
    </>
  )
}


