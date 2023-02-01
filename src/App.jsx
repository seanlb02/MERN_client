import { useState} from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import React from 'react'
import { ReactDOM } from 'react-dom'
import {Route, BrowserRouter, Routes, Link} from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'

import Journal from './Pages/Journal'
import Navigator from './Components/Navbar'
import Login from './Pages/Login'
import Register from './Pages/Register'
import Questionnaire from './Pages/Questionnaire'
import Settings from './Pages/Settings'

import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import '@mobiscroll/react/dist/css/mobiscroll.min.css';




export default function App() {
 

  return (
    <>
      <Navigator/>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/journal" element={<Journal/>}/>
        <Route path= "/login" element = {<Login/>}/>
        <Route path= "/register" element = {<Register/>}/>
        <Route path="/questions" element={<Questionnaire/>}/>
        <Route path="/settings" element={<Settings/>}/>
      </Routes>
    </>
  )
}


