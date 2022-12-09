import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import { AuthProvider } from "./context/AuthContext";
import HomePage from "./pages/HomePage";



import "./homepage.css"

import "bootstrap/dist/css/bootstrap.min.css"

import MuseumsPage from "./pages/MuseumsPage";
// import ParksPage from "./pages/ParksPage";
// import Dropdown from 'react-bootstrap/Dropdown';
// import DropdownButton from 'react-bootstrap/DropdownButton';
// import Nav from "./pages/Nav";

import UserProfile from "./pages/UserProfile";
import CreateEvent from "./pages/CreateEvent";
import ProfileCard from "./components/ProfileCard";
import EditProfile from "./pages/EditProfile";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown'
import { Navigate } from "react-router-dom";
import "./App.css";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import "./homepage.css";


function Navigation(props) {

  return (

    <Navbar className="color-nav">
      <Container >
        <Navbar.Brand href="/" className="navbarcolor">What to See in NYC</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className=" ms-auto ">

          <NavLink className="nav-link navbarcolor" to="/">
              Home
            </NavLink>


            <NavDropdown title={
        <span className="navbarcolor my-auto">Categories</span>
    } id="basic-nav-dropdown">
              <NavDropdown.Item href="/museums">MUSEUMS and ART INSTITUTIONS</NavDropdown.Item>
              <NavDropdown.Item href="/parks">PARKS and PUBLIC SPACE</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">SHOWS and CONCERTS</NavDropdown.Item>
            </NavDropdown>

            <NavLink className="nav-link navbarcolor" to="/log-in">
              Login
            </NavLink>
            <NavLink className="nav-link navbarcolor" to="/user-profile">
              User Profile
            </NavLink>
          </Nav>
        </Navbar.Collapse>
        
      </Container>
    </Navbar>

   

  );
}

function App() {

  return (
    <AuthProvider>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/shows" element={<showsPage />} />
          {/* <Route path="/parks" element={<ParksPage />} /> */}
          <Route path="/museums" element={<MuseumsPage />} />
          <Route path="/log-in" element={<LoginPage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/user-profile" element={<UserProfile />} />
          <Route path="/create-event" element={<CreateEvent />} />
        </Routes>

      </BrowserRouter>
    </AuthProvider>

  );
}

export default App;
