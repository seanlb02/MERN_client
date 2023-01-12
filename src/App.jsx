import { useState} from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import React from 'react'
import { ReactDOM } from 'react-dom'
import {Route, BrowserRouter, Routes, Link} from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
// import Login from './Pages/Login'
// import Register from './Pages/Register'

import Navigator from './Components/Navbar'



import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';


export default function App() {

  return (
    <>
      <Navigator/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/#login" element={<Login/>}/>
        <Route path="/about" element={<Register/>}/>
        <Route path="/profile" element={<Account/>}/>
        <Route path="/user/:username" element={<Profile/>}/>
      </Routes>
    </>
  )
}


