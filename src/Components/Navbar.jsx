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
          <a className="navbar-brand" href="#"><img width="150px" src="https://drive.google.com/uc?id=107sK2RENnZ1VgJ70jlCA6B6xfifz68eu" alt= "logo"></img></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <i className ="fa fa-bars"></i>
      </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item active px-3">
                <a className="nav-link" id="navlink" href="/journal">Profile</a>
            </li>
            <li className="nav-item px-3">
                <a className="nav-link" id="navlink" href="/mysummary">Summary</a>
            </li>
            <li className="nav-item px-3">
                <a className="nav-link" id="navlink" href="/checkin">Check-in</a>
            </li>
            <li className="nav-item px-3">
                <a className="nav-link" id="navlink" href="/track">Track</a>
            </li>
            <li className="nav-item px-3">
                <a className="nav-link" id="navlink" href="/settings">Settings</a>
          </li>
            <li className="nav-item px-3">
                <a className="nav-link" id="navlink" onClick={LogOut} href="/">Log-out</a>
            </li>
        </ul>
      </div>
    </nav>

    :

    <nav className="navbar navbar-expand-lg navbar light ">
          <a className="navbar-brand" href="#"><img src="https://drive.google.com/uc?id=107sK2RENnZ1VgJ70jlCA6B6xfifz68eu" alt="logo"></img></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <i className="fa fa-bars"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto d-flex align-items-center">
                    <li className="nav-item active px-3">
                <a className="nav-link content-align-center" style={{ color: "#6486DD"}}href="/login">Login</a>
                        </li>
                    <li className="nav-link px-3 align-items-center">
                        <a href="/register"><button className="btn btn-primary btn-lg round" type="submit">Sign-up</button></a>
                    </li>
                </ul>
                </div>
            </nav>


}
    </>

  )
}


