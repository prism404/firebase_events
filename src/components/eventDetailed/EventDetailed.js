import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useParams } from "react-router-dom";
import "./detail.css";

function EventDetailed() {
  return (
    <div className="eventContainer">
      <h1>Event Name</h1>
      <p>
        Date: <span>Insert Date Here</span>
      </p>
      <p>
        Time: <span>Insert Time Here</span>
      </p>
      <p>
        Location: <span>Insert Location Here</span>
      </p>
      <img src="" alt="Event Image" />
      <p>
        Description: <span>Insert Description Here</span>
      </p>
      <h2>Agenda</h2>
      <ul>
        <li>Agenda item 1</li>
        <li>Agenda item 2</li>
        <li>Agenda item 3</li>
      </ul>
      <h2>Speakers</h2>
      <ul>
        <li>
          Speaker 1: <span>Insert Name and Title Here</span>
        </li>
        <li>
          Speaker 2: <span>Insert Name and Title Here</span>
        </li>
        <li>
          Speaker 3: <span>Insert Name and Title Here</span>
        </li>
      </ul>
    </div>
  );
}

export default EventDetailed;
