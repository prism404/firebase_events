import React, { useState } from "react";
import "./header.css";
import { Link } from "react-router-dom";
import Logo from "../../assets/img/logo.png";
import { AiFillCloseCircle } from "react-icons/ai";
import { TbGridDots } from "react-icons/tb";
import UseAuth from "../../context/UseAuth";
import Default from "../../assets/img/default.png";
import { auth } from "../../config/firebase";
import { signOut } from "firebase/auth";

function Header() {
  const [active, setActive] = useState("navBar");

  const currentUser = UseAuth();
  console.log("currentUser: ", currentUser);

  const showNav = () => {
    setActive("navBar activeNavbar");
  };

  const removeNav = () => {
    setActive("navBar");
  };

  const logOut = async () => {
    try {
      await signOut(auth);
      alert("Bye bye ! See you again !");
    } catch (err) {
      console.error(err);
    }
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
              <Link to={"/create"} className="linkNav">
                Organize
              </Link>
            </li>

            {currentUser?.displayName ? (
              <li>
                <button className="btn" onClick={logOut}>
                  {" "}
                  Logout
                </button>
              </li>
            ) : (
              <li className="navItem">
                <Link to={"/login"} className="linkNav btn">
                  Login
                </Link>
              </li>
            )}

            {/* <li className="navItem">
              <Link to={"/login"} className="linkNav btn">
                Login
              </Link>
            </li> */}

            <div className="avatarContainer">
              {currentUser !== 0 ? (
                <img
                  src={currentUser?.photoURL}
                  alt="profileAvatar"
                  className="avatar"
                />
              ) : (
                <img src={Default} alt="default profile" />
              )}
            </div>
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
