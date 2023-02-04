import React from 'react'
import { Route, BrowserRouter, Routes, Link } from 'react-router-dom'
import { Nav, Navbar, NavDropdown, Button } from "react-bootstrap"
import { LogOut } from '../API services (fetch functions)/authServices';
import {useState, useEffect} from 'react'


import "bootstrap/dist/css/bootstrap.min.css";



export default function Navigator() {

  useEffect(() => {   
    if(localStorage.getItem("tokenKey") != null) {
      setLoggedIn(true)
    }
},[]);


  const [loggedIn, setLoggedIn] = useState(false)



  return (
    <>


{ loggedIn ? 

    <nav className="navbar navbar-expand-lg navbar light">
        <a className="navbar-brand" href="#"><img src="src/assets/logo.png" alt= "logo"></img></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <i className ="fa fa-bars"></i>
      </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item active px-3">
              <a className="nav-link" href="/journal">Profile</a>
            </li>
            <li className="nav-item px-3">
              <a className="nav-link" href="/mysummary">Summary</a>
            </li>
            <li className="nav-item px-3">
              <a className="nav-link" href="/checkin">Check-in</a>
            </li>
            <li className="nav-item px-3">
              <a className="nav-link" href="/track">Track</a>
            </li>
            <li className="nav-item px-3">
              <a className="nav-link" href="/settings">Settings</a>
          </li>
            <li className="nav-item px-3">
              <a className="nav-link" onClick={LogOut} href="/">Log-out</a>
            </li>
        </ul>
      </div>
    </nav> 

    :

    <nav className="navbar navbar-expand-lg navbar light ">
                <a className="navbar-brand" href="#"><img src="src/assets/logo.png" alt="logo"></img></a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <i class="fa fa-bars"></i>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item active px-3">
                        <a className="nav-link" href="/login">Login</a>
                        </li>
                    <li className="nav-link px-3">
                        <a href="/register"><button className="btn btn-primary btn-lg round" type="submit">Sign-up</button></a>
                    </li>
                </ul>
                </div>
            </nav>


}
    </>

  )
}


