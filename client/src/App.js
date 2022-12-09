import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import { AuthProvider } from "./context/AuthContext";
import HomePage from "./pages/HomePage";
import Navigation from "./components/Navigation";


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
