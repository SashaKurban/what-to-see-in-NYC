import React from "react";
import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";
import PostFormPage from "./pages/PostFormPage";
import ShowPostPage from "./pages/ShowPostPage";
import LoginPage from "./pages/LoginPage";

import HomePage from "./pages/HomePage";

import "bootstrap/dist/css/bootstrap.min.css"

import MuseumsPage from "./pages/MuseumsPage";
// import ParksPage from "./pages/ParksPage";
// import Dropdown from 'react-bootstrap/Dropdown';
// import DropdownButton from 'react-bootstrap/DropdownButton';
// import Nav from "./pages/Nav";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';



import "./App.css";



function Navigation(props) {
  return (
        
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Logo</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className=" ms-auto">
   
            {/* <Nav.Link href="#link"> Categories</Nav.Link> */}
            <NavDropdown title="Categories" id="basic-nav-dropdown">
              <NavDropdown.Item href="/museums">MUSEUMS and ART INSTITUTIONS</NavDropdown.Item>
              <NavDropdown.Item href="/parks">PARKS and PUBLIC SPACE</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">SHOWS and CONCERTS</NavDropdown.Item>
            </NavDropdown>

            <NavLink className="nav-link" to="/log-in">
            Login
            </NavLink>



            

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  );
}

function App() {
 
  return (
    <BrowserRouter>
      <Navigation />
     
 
         
          <Routes>
    
            <Route path="/shows" element={<showsPage />} />
            {/* <Route path="/parks" element={<ParksPage />} /> */}
            <Route path="/museums" element={<MuseumsPage />} />
            <Route path="/log-in" element={<LoginPage />} />
            <Route path="/" element={<HomePage />} />
          </Routes>
     
    </BrowserRouter>

    
  );
}

export default App;
