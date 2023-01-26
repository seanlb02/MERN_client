import React from 'react'
import { Route, BrowserRouter, Routes, Link } from 'react-router-dom'
import { Nav, Navbar, NavDropdown, Button } from "react-bootstrap"



import "bootstrap/dist/css/bootstrap.min.css";



export default function Navigator() {
  return (
    <>
    <nav class="navbar navbar-expand-lg navbar light">
      <a class="navbar-brand" href="#"><img src="src/assets/logo.png" alt= "logo"></img></a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <i class ="fa fa-bars"></i>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
            <li class="nav-item active px-3">
              <a class="nav-link" href="#">Home</a>
            </li>
            <li class="nav-item px-3">
              <a class="nav-link" href="#">Graph</a>
            </li>
            <li class="nav-item px-3">
              <a class="nav-link" href="#">Weekly Check-in</a>
            </li>
            <li class="nav-item px-3">
              <a class="nav-link" href="#">Friends</a>
            </li>
            <li class="nav-item px-3">
              <a class="nav-link" href="#">Settings</a>
          </li>
        </ul>
      </div>
    </nav>


    </>

  )
}


