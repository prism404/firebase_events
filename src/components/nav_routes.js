import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";

// Pages
import EventDetailed from "../components/eventDetailed/EventDetailed";
import Home from "../components/Home/home";
import Login from "../components/auth/Login";
import Profil from "../components/Profil/Profil";
import Organize from "../components/Organize/CreateOuting";
import SignUp from "./auth/Signup";

function NavRoutes() {
  const location = useLocation();
  return (
    <>
      <Routes key={location.pathname} location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/profil" element={<Profil />} />
        <Route path="/create" element={<Organize />} />
        <Route path="/event/:id" element={<EventDetailed />} />
      </Routes>
    </>
  );
}

export default NavRoutes;
