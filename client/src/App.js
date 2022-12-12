import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import { AuthProvider } from "./context/AuthContext";
import HomePage from "./pages/HomePage";
import Navigation from "./components/Navigation";


import "./homepage.css"

import "bootstrap/dist/css/bootstrap.min.css"

import MuseumsPage from "./pages/MuseumsPage";

import UserProfile from "./pages/UserProfile";
import EventForm from "./pages/EventForm";
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
          <Route path="/event-form" element={<EventForm />} />
          <Route path="/event-form" element={<EventForm />} />
        </Routes>

      </BrowserRouter>
    </AuthProvider>

  );
}

export default App;
