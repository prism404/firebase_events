import React from "react";

// Pages
import EventDetailed from "../pages/EventDetailed";
// import Home from "../pages/Home";
import Home from "../components/Home/home";
import Login from "../components/auth/Login";
import Profil from "../pages/Profil";

import { Routes, Route, useLocation } from "react-router-dom";

function NavRoutes() {
  const location = useLocation();
  return (
    <>
      <Routes key={location.pathname} location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profil" element={<Profil />} />
        <Route path="/outing/:id" element={<EventDetailed />} />
      </Routes>
    </>
  );
}

export default NavRoutes;
