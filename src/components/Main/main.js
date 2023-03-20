import React, { useState, useEffect } from "react";
import "./main.css";
import axios from "axios";
import { Link } from "react-router-dom";

// Icons
import { MdOutlineDateRange } from "react-icons/md";
// import { BiCurrentLocation } from "react-icons/bi";
import { FcNext } from "react-icons/fc";
import { FcPrevious } from "react-icons/fc";

function Main() {
  const [events, setEvents] = useState([]);
  const [displayPerPage, setDisplayPerPage] = useState(12);
  const [currentPage, setCurrentPage] = useState(1);

  const numOfPages = Math.ceil(events.length / displayPerPage);
  const pages = [...Array(numOfPages + 1).keys()].slice(1);
  const indexOfLastEvent = currentPage * displayPerPage;
  const indexOfFirstEvent = indexOfLastEvent - displayPerPage;

  const visibleEvent = events.slice(indexOfFirstEvent, indexOfLastEvent);

  useEffect(() => {
    axios({
      method: "GET",
      url: "https://public.opendatasoft.com//api/records/1.0/search/?dataset=evenements-publics-openagenda&q=&rows=100&start=10",
      headers: { "content-type": "application/json" },
    })
      .then((res) => {
        console.log(res.data["records"]);
        setEvents(res.data["records"]);
      })
      .catch((error) => {
        console.log(error);
      });
    return;
  }, []);

  const prevHandler = () => {
    if (currentPage !== 1) setCurrentPage(currentPage - 1);
  };

  const nextHandler = () => {
    if (currentPage !== numOfPages) setCurrentPage(currentPage + 1);
  };

  return (
    <section className="main container section">
      <div className="sectionEvent">
        {/* <h1 className="title">Our events !</h1> */}

        <div className="pagination">
          <span onClick={prevHandler}>
          <FcPrevious height={20} className="icon"/>
          </span>
          {pages.map((page) => (
            <span
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`${currentPage === page ? "active" : ""}`}
            >
              {`${page} `}
            </span>
          ))}
          <span onClick={nextHandler}>
            <FcNext height={20} className="icon"/>
          </span>
        </div>

        {/* _______________ Mapping API _______________ */}

        <div>
          {visibleEvent.map((data) => (
            <div key={data.recordid} className="eventCard">
              {/* Return every single id from API */}
              <div className="contents grid">
                <h3 className="eventTitle">{data.fields.title_fr}</h3>

                <div className="eventInfos">
                <p className="eventDescription">{data.fields.description_fr}</p>
                  <h4 className="eventDate">
                    <MdOutlineDateRange className="icon" />
                    {data.fields.daterange_fr}
                  </h4>

                  <div className="eventDetails">
                    <h4>
                      {/* <BiCurrentLocation className="icon" /> */}
                      Ville: {data.fields.location_city}
                    </h4>
                    <h4>Region: {data.fields.location_region}</h4>
                    <h4>Pays: {data.fields.country_fr}</h4>
                  </div>
                </div>

                {/* Img de l'event */}
                <div className="imgContainer">
                  <Link to={"event/:id"}>
                    <img
                      src={data.fields.image}
                      alt="event photodetailed"
                      className="eventImg"
                    />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* _______________ Pagination _______________ */}

        <div className="pagination">
          <span onClick={prevHandler}>
          <FcPrevious height={20} className="icon"/>
          </span>
          {pages.map((page) => (
            <span
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`${currentPage === page ? "active" : ""}`}
            >
              {`${page} `}
            </span>
          ))}
          <span onClick={nextHandler}>
          <FcNext height={20} className="icon"/>
          </span>
        </div>
      </div>

    </section>
  );
}

export default Main;
