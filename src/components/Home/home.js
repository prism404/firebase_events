import React from "react";
import "./home.css";
// import Video from "../../assets/videos/bg_login.mp4";
import { FiMapPin } from "react-icons/fi";
import { GoSettings } from "react-icons/go";
import Main from "../Main/main";

function Home() {
  return (
    <>
      <section className="home">
        <div className="homeContent container">
          <div className="textDiv">

          {/* <span className="smallText">Bored ?</span> */}

          <h1 className="homeTitle">Find the events around you</h1>
        </div>

          <div className="cardDiv grid">
            <div className="destinationInput">
              <label htmlFor="lieu">Location</label>
              <div className="input location flex">
                <input type="text" placeholder="Lieu, adresse ..." />
                <FiMapPin className="icon" />
              </div>
            </div>

            <div className="typeInput">
              <label htmlFor="date">Date</label>
              <div className="input date flex">
                <input type="date" placeholder="Lieu, adresse ..." />
              </div>
            </div>
          </div>

          <div className="searchOptions flex">
            <GoSettings className="icon" />
            <span>More filters</span>
          </div>
        </div>
      </section>

      <Main />
    </>
  );
}

export default Home;
