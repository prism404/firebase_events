import React, { useState } from "react";
import "./header.css";
import { Link } from "react-router-dom";
import Logo from "../../assets/img/logo.png";
import { AiFillCloseCircle } from "react-icons/ai";
import { TbGridDots } from "react-icons/tb";

function Header() {
  const [active, setActive] = useState("navBar");

  const showNav = () => {
    setActive("navBar activeNavbar");
  };

  const removeNav = () => {
    setActive("navBar");
  };

  return (
    <section className="navBarSection">
      <header className="header flex">
        <div className="logoDiv">
          <Link to={"/"}>
            <img src={Logo} className="logo_nav" alt="logo" />
          </Link>
        </div>

        <div className={active}>
          <ul className="navLists flex">
            <li className="navItem">
              <Link to={"/"} className="linkNav">
                Home
              </Link>
            </li>
            <li className="navItem">
              <Link to={"/profil"} className="linkNav">
                Profil
              </Link>
            </li>
            <li className="navItem">
              <Link to={"/login"} className="linkNav btn">
                Login
              </Link>
            </li>
          </ul>

          <div onClick={removeNav} className="closeNavbar">
            <AiFillCloseCircle className="icon" />
          </div>
        </div>

        <div onClick={showNav} className="toggleNavbar">
          <TbGridDots className="icon" />
        </div>
      </header>
    </section>
  );
}

export default Header;
