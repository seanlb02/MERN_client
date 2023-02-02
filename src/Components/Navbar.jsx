import React from 'react'
import { Route, BrowserRouter, Routes, Link } from 'react-router-dom'
import { Nav, Navbar, NavDropdown, Button } from "react-bootstrap"



import "bootstrap/dist/css/bootstrap.min.css";



export default function Navigator() {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar light">
        <a className="navbar-brand" href="#"><img src="src/assets/logo.png" alt= "logo"></img></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <i className ="fa fa-bars"></i>
      </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item active px-3">
              <a className="nav-link" href="/journal">Home</a>
            </li>
            <li className="nav-item px-3">
              <a className="nav-link" href="/graph">Graph</a>
            </li>
            <li className="nav-item px-3">
              <a className="nav-link" href="/questions">Weekly Check-in</a>
            </li>
            <li className="nav-item px-3">
              <a className="nav-link" href="/friends">Friends</a>
            </li>
            <li className="nav-item px-3">
              <a className="nav-link" href="/settings">Settings</a>
          </li>
        </ul>
      </div>
    </nav>


    </>

  )
}


