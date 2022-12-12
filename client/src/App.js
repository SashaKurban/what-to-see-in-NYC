import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import { AuthProvider } from "./context/AuthContext";
import HomePage from "./pages/HomePage";
import Navigation from "./components/Navigation";


import "./homepage.css"
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css";
import MuseumsPage from "./pages/MuseumsPage";
import ParksPage from "./pages/ParksPage";
import ShowsPage from "./pages/ShowsPage";
import UserProfile from "./pages/UserProfile";
import EventForm from "./pages/EventForm";

function App() {

  return (
    <AuthProvider>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/shows" element={<ShowsPage />} />
          <Route path="/parks" element={<ParksPage />} />
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
